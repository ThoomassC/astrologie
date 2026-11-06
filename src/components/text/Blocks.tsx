import type { Block } from "@/content/explained";

/** Blocs de détails : paragraphes et listes. */
export function Blocks({ blocks }: { blocks: readonly Block[] }) {
  return (
    <>
      {blocks.map((block, index) =>
        block.kind === "p" ? (
          <p key={index}>{block.text}</p>
        ) : (
          <ul key={index}>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ),
      )}
    </>
  );
}
