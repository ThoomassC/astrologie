// @vitest-environment node
import { describe, expect, it } from "vitest";
import { localeFrom } from "@/i18n/params";

describe("localeFrom", () => {
  it.each(["fr", "en"])("devrait rendre la langue « %s » des paramètres", async (lang) => {
    await expect(localeFrom(Promise.resolve({ lang }))).resolves.toBe(lang);
  });

  it.each(["de", "FR", "", "fr-FR"])("devrait répondre par une 404 à « %s »", async (lang) => {
    await expect(localeFrom(Promise.resolve({ lang }))).rejects.toMatchObject({ digest: "NEXT_HTTP_ERROR_FALLBACK;404" });
  });
});
