"use client";

import { type KeyboardEvent, type Ref, useId } from "react";
import styles from "./fields.module.css";
import { acceptDigits, padSegment, type SegmentKind, segmentLength, stepSegment } from "./segments";

export interface SegmentProps {
  kind: SegmentKind;
  id?: string;
  value: string;
  label: string;
  /** Étiquette visible du champ : le segment s'appelle « Date de naissance Jour », pas seulement « Jour ». */
  groupLabelId?: string;
  placeholder: string;
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
  describedBy?: string;
  inputRef?: Ref<HTMLInputElement>;
  /** Point de départ des flèches sur un segment vide (l'année en cours pour l'année), lu au moment de la frappe. */
  start?: () => number;
  /** Maximum des flèches, s'il est plus petit que celui du segment (les jours du mois choisi). */
  max?: number;
  onValue: (value: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  /** Touches propres au champ (« a » et « p » pour AM et PM) ; renvoie true si la touche est traitée. */
  onKey?: (event: KeyboardEvent<HTMLInputElement>) => boolean;
  /** Texte collé, ou inséré d'un bloc, plus long que le segment : le champ le répartit sur les segments suivants. */
  onFill?: (text: string) => void;
}

/** Touches qui passent au segment suivant, comme on écrit « 14/07 » ou « 14:30 ». */
const SEPARATORS = new Set(["/", ".", "-", ":", " ", ","]);

/**
 * Un segment d'un champ de date ou d'heure : un vrai champ texte (clavier numérique sur mobile), tout sélectionné au
 * focus pour qu'un chiffre tapé remplace l'ancien ; il passe au suivant une fois complet. Flèches haut et bas : un
 * cran ; retour arrière : efface le segment, puis ramène au précédent ; flèches gauche et droite aux bords : segment voisin.
 */
export function Segment({ inputRef, ...props }: SegmentProps) {
  const { kind, value, onValue, onNext, onPrevious } = props;
  const own = useId();
  const id = props.id ?? own;

  const reselect = (input: HTMLInputElement) => requestAnimationFrame(() => input.select());

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    if (props.onKey?.(event)) {
      event.preventDefault();
      return;
    }
    const whole = input.selectionStart === 0 && input.selectionEnd === input.value.length;
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
        event.preventDefault();
        onValue(stepSegment(kind, value, event.key === "ArrowUp" ? 1 : -1, props.start?.(), props.max));
        reselect(input);
        return;
      case "Backspace":
      case "Delete":
        // Un segment s'efface d'un coup ; vide, le retour arrière ramène au segment précédent.
        event.preventDefault();
        if (value === "") {
          if (event.key === "Backspace") onPrevious();
        } else onValue("");
        return;
      case "ArrowLeft":
        if (input.selectionStart === 0 && (input.selectionEnd === 0 || whole)) {
          event.preventDefault();
          onPrevious();
        }
        return;
      case "ArrowRight":
        if (input.selectionEnd === input.value.length) {
          event.preventDefault();
          onNext();
        }
        return;
      default:
        if (SEPARATORS.has(event.key)) {
          event.preventDefault();
          if (value !== "") onNext();
        }
    }
  };

  return (
    <input
      ref={inputRef}
      id={id}
      className={kind === "year" ? `${styles.segment} ${styles.year}` : styles.segment}
      type="text"
      inputMode="numeric"
      autoComplete="off"
      spellCheck={false}
      placeholder={props.placeholder}
      aria-label={props.label}
      aria-labelledby={props.groupLabelId ? `${props.groupLabelId} ${id}` : undefined}
      aria-invalid={props.invalid || undefined}
      aria-required={props.required || undefined}
      aria-describedby={props.describedBy}
      disabled={props.disabled}
      value={value}
      onFocus={(event) => event.currentTarget.select()}
      onClick={(event) => event.currentTarget.select()}
      onPaste={(event) => {
        if (!props.onFill) return;
        event.preventDefault();
        props.onFill(event.clipboardData.getData("text"));
      }}
      onChange={(event) => {
        const typed = event.currentTarget.value;
        const accepted = acceptDigits(kind, typed);
        if (accepted === null) {
          // Plusieurs chiffres d'un coup (saisie dictée, insertion) : répartis sur les segments.
          if (typed.replace(/\D/g, "").length > segmentLength(kind)) props.onFill?.(typed);
          return;
        }
        onValue(accepted.value);
        if (accepted.advance) onNext();
      }}
      onBlur={(event) => {
        // La valeur du champ, pas celle du rendu : le passage au segment suivant se fait dans le même événement.
        const typed = event.currentTarget.value.replace(/\D/g, "");
        const padded = padSegment(kind, typed);
        if (padded !== typed) onValue(padded);
      }}
      onKeyDown={onKeyDown}
    />
  );
}
