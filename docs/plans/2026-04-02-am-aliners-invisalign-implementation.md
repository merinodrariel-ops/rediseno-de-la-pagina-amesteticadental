# AM Aliners / Invisalign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make `AM Aliners` the public-facing label while preserving `Invisalign` only where it helps SEO capture.

**Architecture:** Keep `/invisalign` live as an SEO bridge route, but shift public UI labels, navigation, and CTAs toward `AM Aliners` and `alineadores invisibles`. Remove prominent visible `Invisalign` mentions outside metadata and limited SEO-supporting copy.

**Tech Stack:** Next.js App Router, TypeScript, static metadata, schema/FAQ JSON-LD.

---

### Task 1: Update public navigation labels

**Files:**
- Modify: `src/components/Navbar.tsx`

**Step 1:** Replace visible `Invisalign` nav label with `AM Aliners` or `Alineadores` while keeping the desired destination route.

**Step 2:** Verify no other visible nav text still promotes `Invisalign`.

### Task 2: Update homepage and treatment surfaces

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/Tratamientos.tsx`

**Step 1:** Replace visible promotional copy mentioning `Invisalign` with `AM Aliners` or generic invisible aligners.

**Step 2:** Replace cards/labels that expose `Invisalign` as a product with public-facing AM Aliners wording.

### Task 3: Update supporting cluster pages

**Files:**
- Modify: `src/app/alineadores-invisibles/page.tsx`
- Modify: `src/app/estetica-dental/page.tsx`
- Modify: `src/app/carillas-vs-alineadores/page.tsx`

**Step 1:** Remove visible `Invisalign` product-style mentions from cards and body copy.

**Step 2:** Keep only neutral SEO-supporting mentions where needed and non-primary.

### Task 4: Rework the `/invisalign` bridge page

**Files:**
- Modify: `src/app/invisalign/page.tsx`

**Step 1:** Keep metadata and route intent useful for search capture.

**Step 2:** Shift the visible hero, CTAs, and core body copy to position `AM Aliners` as the public-facing offer.

**Step 3:** Reduce visible `Invisalign` prominence so it acts as a search bridge instead of a public product page.

### Task 5: Verify and commit

**Files:**
- Modify: impacted files above only

**Step 1:** Run `npm run build`.

**Step 2:** Spot-check remaining `Invisalign` mentions in `src/`.

**Step 3:** Commit only the relevant UI/SEO changes.
