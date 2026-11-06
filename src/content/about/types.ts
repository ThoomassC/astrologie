import type { PageHead, SourceLink, Titled } from "@/content/explained";

export const ABOUT_SECTION_IDS = ["demarche", "calcul", "sources", "images", "confidentialite"] as const;
export type AboutSectionId = (typeof ABOUT_SECTION_IDS)[number];

export interface AboutSection extends Titled {
  readonly links: readonly SourceLink[];
}

export interface AboutContent extends PageHead {
  readonly sections: Readonly<Record<AboutSectionId, AboutSection>>;
}
