import { screen, within } from "@testing-library/react";
import type { UserEvent } from "@testing-library/user-event";

/** Segments d'un champ de date ou d'heure, trouvé par le nom de son groupe (son étiquette visible). */
export const segmentsOf = (name: string) =>
  within(screen.getByRole("group", { name })).getAllByRole("textbox") as HTMLInputElement[];

/** Tape une date "YYYY-MM-DD" dans un champ en segments (jour, mois, année). */
export async function typeDate(user: UserEvent, name: string, iso: string) {
  const [year, month, day] = iso.split("-");
  await user.click(segmentsOf(name)[0]);
  await user.keyboard(`${day}${month}${year}`);
}

/** Tape une heure "HH:MM" dans un champ en segments sur 24 heures. */
export async function typeTime(user: UserEvent, name: string, time: string) {
  await user.click(segmentsOf(name)[0]);
  await user.keyboard(time.replace(":", ""));
}

/** Date lue dans les segments, "YYYY-MM-DD" ("--" pour un champ vide). */
export function dateValue(name: string) {
  const [day, month, year] = segmentsOf(name).map((input) => input.value);
  return `${year}-${month}-${day}`;
}
