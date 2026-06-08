# Blog Implementation Plan

## Overview

This plan outlines the incremental implementation of a Markdown/MDX-based blog section for the portfolio website using Gatsby and Tailwind CSS.

## Tech Stack

- **Framework:** Gatsby (React + TypeScript)
- **Styling:** Tailwind CSS v4 (CSS-first approach)
- **Content Engine:** MDX (Markdown + JSX)
- **Icons/Images:** Gatsby Image / Sharp

## Implementation Phases

### Phase 1: Discovery (Completed)

- [x] Check CSS setup to confirm Tailwind v4 `@import` syntax.
- [x] Inspect `gatsby-node.ts` to ensure safe integration of `createPages` logic.

**Discovery Notes:**

- **Tailwind v4:** Uses `@import "tailwindcss";` in `src/styles/global.css`. Typography must be added via `@import "@tailwindcss/typography";` in the CSS file, NOT via `tailwind.config.js`.
- **Gatsby Node:** `gatsby-node.ts` is currently an empty file. It will be used to implement `createPages` logic for dynamic routing of MDX files.
- **Project Structure:** Content will be stored in a new top-level `content/posts/` directory.

### Phase 2: The Engine (Completed)

- [x] **Install dependencies:** `gatsby-plugin-mdx`, `@mdx-js/react`, and `@tailwindcss/typography`.
- [x] **Update `gatsby-config.js`:**
  - Add `gatsby-source-filesystem` pointing to `content/posts/`.
  - Add `gatsby-plugin-mdx`.
  - Add `gatsby-plugin-image` and `gatsby-plugin-sharp` if not already configured for MDX images.
- [x] **Update `gatsby-node.ts`:** Implement `createPages` logic to query all MDX nodes and create individual pages using a `src/templates/blog-post.tsx` template.

### Phase 3: The Look (Partially Completed)

- [x] **Create `src/templates/blog-post.tsx`:**
  - Use `MDX` component from `@mdx-js/react`.
  - Apply Tailwind's `prose` class (and `prose-invert` for dark mode) to the main container.
- [x] **Create `src/pages/blog/index.tsx`:** A landing page listing all blog posts.
- [x] **Implement Draft Support:** Added `draft: true` frontmatter support and filtering in GraphQL queries.
- [x] **Conditional UI Rendering:** Implemented logic to hide the "Read Blog" link on the homepage if no published posts exist.

### Phase 4: The Content (Partially Completed)

- [x] **Directory Setup:** Create `content/posts/`.
- [x] **Sample Content:** Created `content/posts/sample-post.mdx` containing:
  - Frontmatter (title, date, description, slug).
  - Markdown text and code snippets.
- [ ] **Verification:** Run `npm start` (or `gatsby develop`) to verify the live site.

## Decision Framework

- **Incremental progress:** Each phase should be verified before moving to the next.
- **Minimal code:** Use the simplest implementation that meets the requirements.
- **Consistency:** Follow existing TypeScript patterns and Tailwind v4 standards.
