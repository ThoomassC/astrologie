import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, describe, expect, it, vi } from "vitest";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/locales";
import { LanguageSwitch } from "./LanguageSwitch";

const navigation = vi.hoisted(() => ({ pathname: "/fr/signes/belier" }));
vi.mock("next/navigation", () => ({ usePathname: () => navigation.pathname }));

afterEach(() => {
  cleanup();
  document.cookie = "lang=; Path=/; Max-Age=0";
  window.history.replaceState(null, "", "/");
  navigation.pathname = "/fr/signes/belier";
});

function inLocale(locale: Locale, ui: ReactNode) {
  return <LocaleProvider locale={locale}>{ui}</LocaleProvider>;
}

describe("LanguageSwitch", () => {
  it("devrait mener à la même page dans l'autre langue, par un lien nommé dans cette langue", () => {
    render(inLocale("fr", <LanguageSwitch />));
    const link = screen.getByRole("link", { name: "English version" });
    expect(link).toHaveAttribute("href", "/en/signes/belier");
    expect(link).toHaveAttribute("hreflang", "en");
    expect(link).toHaveAttribute("lang", "en");
  });

  it("devrait proposer la version française depuis une page anglaise", () => {
    navigation.pathname = "/en/theme-natal";
    render(inLocale("en", <LanguageSwitch />));
    const link = screen.getByRole("link", { name: "Version française" });
    expect(link).toHaveAttribute("href", "/fr/theme-natal");
    expect(link).toHaveAttribute("hreflang", "fr");
  });

  it("devrait fonctionner sans JavaScript : le lien est dans le HTML rendu au serveur", () => {
    navigation.pathname = "/fr";
    const markup = renderToStaticMarkup(inLocale("fr", <LanguageSwitch />));
    expect(markup).toContain('href="/en"');
    expect(markup).toContain('aria-label="English version"');
  });

  it("devrait dessiner les deux drapeaux, décoratifs, et poser le bouton glissant sur la langue de la page", () => {
    const { container } = render(inLocale("en", <LanguageSwitch />));
    expect(container.querySelectorAll("svg[aria-hidden='true']")).toHaveLength(2);
    expect(container.querySelector("[data-active]")).toHaveAttribute("data-active", "en");
  });

  it("devrait retenir le choix dans le cookie « lang » au clic, pour un an, sans l'envoyer depuis un autre site", () => {
    const writes: string[] = [];
    const descriptor = Object.getOwnPropertyDescriptor(Document.prototype, "cookie");
    vi.spyOn(document, "cookie", "set").mockImplementation((value: string) => {
      writes.push(value);
      descriptor?.set?.call(document, value);
    });
    render(inLocale("fr", <LanguageSwitch />));
    fireEvent.click(screen.getByRole("link", { name: "English version" }));
    expect(writes).toEqual(["lang=en; Path=/; Max-Age=31536000; SameSite=Lax"]);
    vi.restoreAllMocks();
  });

  it("devrait garder la position affichée : l'ancre de l'adresse suit le lien au clic", () => {
    navigation.pathname = "/fr/maisons";
    window.history.replaceState(null, "", "/fr/maisons#maison-4");
    render(inLocale("fr", <LanguageSwitch />));
    const link = screen.getByRole("link", { name: "English version" });
    fireEvent.click(link);
    expect(link).toHaveAttribute("href", "/en/maisons#maison-4");
  });

  it("devrait faire glisser le bouton vers l'autre drapeau au clic, et le remettre au retour par le cache arrière", () => {
    const { container } = render(inLocale("fr", <LanguageSwitch />));
    fireEvent.click(screen.getByRole("link", { name: "English version" }));
    expect(container.querySelector("[data-active]")).toHaveAttribute("data-active", "en");
    act(() => {
      window.dispatchEvent(new PageTransitionEvent("pageshow", { persisted: true }));
    });
    expect(container.querySelector("[data-active]")).toHaveAttribute("data-active", "fr");
  });

  it("ne devrait ni poser l'ancre ni faire glisser le bouton pour un clic qui ouvre un nouvel onglet", () => {
    window.history.replaceState(null, "", "/fr/signes/belier#mythe");
    const { container } = render(inLocale("fr", <LanguageSwitch />));
    const link = screen.getByRole("link", { name: "English version" });
    fireEvent.click(link, { metaKey: true });
    expect(link).toHaveAttribute("href", "/en/signes/belier");
    expect(container.querySelector("[data-active]")).toHaveAttribute("data-active", "fr");
  });

  it("devrait écrire le nom de la version à côté de la pilule dans le menu replié", () => {
    render(inLocale("fr", <LanguageSwitch variant="menu" />));
    const link = screen.getByRole("link", { name: "English version" });
    expect(link).toHaveTextContent("English version");
    expect(link).toHaveAttribute("href", "/en/signes/belier");
  });
});
