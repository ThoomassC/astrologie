"use client";

import { type RefObject, useEffect, useRef } from "react";

/**
 * Suit l'ouverture et la fermeture d'un popover natif (`onToggle`), et rend une fonction `close` qui le referme et
 * rend le focus au bouton qui l'a ouvert. Échap et le clic au-dehors sont gérés par le navigateur ; le panneau se
 * ferme aussi quand le focus le quitte (tabulation hors du panneau).
 */
export function usePopover(
  panel: RefObject<HTMLElement | null>,
  trigger: RefObject<HTMLElement | null>,
  onToggle: (open: boolean) => void,
) {
  const toggle = useRef(onToggle);
  useEffect(() => {
    toggle.current = onToggle;
  });

  useEffect(() => {
    const element = panel.current;
    if (!element) return;
    const onPopoverToggle = (event: Event) => toggle.current((event as ToggleEvent).newState === "open");
    const onFocusOut = (event: FocusEvent) => {
      const next = event.relatedTarget as Node | null;
      if (next === null || element.contains(next) || trigger.current?.contains(next)) return;
      if (element.matches(":popover-open")) element.hidePopover();
    };
    element.addEventListener("toggle", onPopoverToggle);
    element.addEventListener("focusout", onFocusOut);
    return () => {
      element.removeEventListener("toggle", onPopoverToggle);
      element.removeEventListener("focusout", onFocusOut);
    };
  }, [panel, trigger]);

  return () => {
    const element = panel.current;
    if (element?.matches(":popover-open")) element.hidePopover();
    trigger.current?.focus();
  };
}

/** Relie un élément à la fois à une ref interne et à la ref passée par le parent. */
export function assignRef<T>(ref: React.Ref<T> | undefined, value: T | null) {
  if (typeof ref === "function") ref(value);
  else if (ref) (ref as React.RefObject<T | null>).current = value;
}

const isOpenInside = (field: HTMLElement) => {
  try {
    return field.querySelector(":popover-open") !== null;
  } catch {
    return false;
  }
};

/**
 * Appelle `onLeave` si le focus a vraiment quitté le champ. Safari ne donne pas le focus à un bouton cliqué
 * (`relatedTarget` vaut null) : on regarde alors, après coup, où est le focus et si un panneau du champ est ouvert.
 */
export function leaveCheck(field: HTMLElement, next: EventTarget | null, onLeave: (() => void) | undefined) {
  if (!onLeave) return;
  if (next !== null) {
    if (!field.contains(next as Node)) onLeave();
    return;
  }
  requestAnimationFrame(() => {
    if (field.contains(document.activeElement) || isOpenInside(field)) return;
    onLeave();
  });
}
