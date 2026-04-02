# AM Aliners vs Invisalign Design

## Goal

Preserve SEO capture for searches around `Invisalign` without presenting Invisalign as a public-facing product or brand offered by AM Estetica Dental.

## Decision

- `AM Aliners` becomes the visible public-facing label.
- `Invisalign` remains only where it helps SEO and search intent capture.
- The route `/invisalign` stays live as an SEO bridge page, but its visible copy shifts to AM Aliners and generic invisible aligners.

## Visible UX Rules

- Remove `Invisalign` from primary navigation.
- Remove `Invisalign` from visible cards, CTAs, and homepage-style promotional copy.
- Replace visible references with `AM Aliners` or `alineadores invisibles`.
- Keep `/alineadores-invisibles` as the main public route users are guided toward.

## SEO Rules

- Keep `/invisalign` route indexable.
- Keep `Invisalign` in metadata where useful for search capture.
- Keep supporting mentions in structured data / FAQ only where they serve intent matching.
- Avoid making `Invisalign` the visual page headline, CTA label, or main service claim.

## Implementation Scope

- Update `src/components/Navbar.tsx`
- Update `src/components/Tratamientos.tsx`
- Update `src/components/Hero.tsx`
- Update `src/app/alineadores-invisibles/page.tsx`
- Update `src/app/estetica-dental/page.tsx`
- Update `src/app/carillas-vs-alineadores/page.tsx`
- Update `src/app/invisalign/page.tsx`

## Non-Goals

- No route removal for `/invisalign`.
- No major information architecture change.
- No rewrite of the whole aligners content cluster.

## Success Criteria

- Public-facing UI primarily shows `AM Aliners` / `alineadores invisibles`.
- `Invisalign` is no longer featured in visible navigation or sales CTAs.
- SEO bridge page continues to exist and build cleanly.
