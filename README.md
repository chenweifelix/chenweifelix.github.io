# Felix (Chen-Wei) Yu — academic website

This repository contains the Jekyll source for [chenweifelix.github.io](https://chenweifelix.github.io). It is based on [Academic Pages](https://github.com/academicpages/academicpages.github.io), a fork of Minimal Mistakes, and is designed for an academic hiring audience.

The rebuild was imported from Academic Pages revision `9c8f68fd2582abba41365ea1ca459bbb222d5a92`. The Academic Pages and Minimal Mistakes licenses and attribution are retained.

## Site structure

- **Home** introduces the research program and features selected work.
- **Research** uses a custom wide layout with a sticky, in-page section navigator.
- **Publications** is generated from structured Markdown records in `_publications/`.
- **CV** links directly to `/files/Felix_Yu_CV.pdf`.

The first visit uses the dark theme. The masthead control switches between dark and light modes, and the saved choice is applied before the page paints.

## Local preview with Docker

The supported development environment is Ruby 3.2 in Docker. The host machine's system Ruby is not used.

```sh
docker compose build
docker compose up
```

Open <http://localhost:4000>. Live reload uses port `35729`.

For a production-equivalent strict build:

```sh
docker compose run --rm site bundle exec jekyll build --strict_front_matter
```

The generated site is written to `_site/`.

## Adding a publication

Add one Markdown file to `_publications/`. Use a descriptive slug and include every interface field:

```yaml
---
title: "Article title"
authors: "Author, A., & Yu, C.-W."
venue: "Journal name"
category: journal_articles # or under_review
order: 8
year: 2026                # leave blank for unpublished work
status: "Published"       # or "Under review"
citation: >-
  Full recommended citation in Markdown.
paperurl: "https://..."   # preprint or accessible full text; blank if unavailable
doi: "https://doi.org/..." # blank if unavailable
featured: false
---
```

For a Home-page feature, set `featured: true` and add a numeric `featured_order`. Never add a placeholder publication date to unpublished work.

## Content and presentation

- Primary page content lives in `_pages/`.
- Navigation is configured in `_data/navigation.yml`.
- Site/profile metadata is configured in `_config.yml`.
- Layouts and reusable publication rendering live in `_layouts/` and `_includes/`.
- The site-specific color tokens, responsive layouts, focus styles, and reduced-motion rules live in `_sass/_custom.scss`.
- Theme behavior lives in `assets/js/site.js`; the pre-paint theme initialization is in `_includes/head.html`.

The muted rose accent and both color schemes must maintain readable contrast. Test changes in dark and light modes, at desktop, tablet, and mobile widths.

## Deployment

Pull requests targeting `main` run `.github/workflows/jekyll-build.yml`, which performs a strict Jekyll build and verifies the required output pages. Pushes to `main` run `.github/workflows/jekyll.yml` and deploy through GitHub Pages Actions.

Do not merge the rebuild branch until the local build and pull-request workflow pass and the launch assets below are present. The current production site remains unchanged until that merge.

## Launch assets

Two user-supplied files are required before launch:

1. Replace `images/profile-placeholder.svg` with a professional headshot at `images/profile.jpg`, then update `author.avatar` and `og_image` in `_config.yml`.
2. Add the current CV at `files/Felix_Yu_CV.pdf`.

The placeholder portrait is intentionally obvious so it cannot be mistaken for a final asset.

## Validation checklist

Before merging:

1. Run the strict Docker build.
2. Verify internal links, redirects, publication links, section anchors, `sitemap.xml`, `feed.xml`, and the CV URL.
3. Review Home, Research, Publications, 404, and a publication-detail page at desktop, tablet, and mobile widths.
4. Confirm the Research navigator does not narrow or overlap the reading column.
5. Confirm dark is the initial theme, the light choice survives navigation and reload, and no theme flash is visible.
6. Check keyboard operation, focus visibility, semantic headings, image alternatives, reduced motion, and WCAG AA contrast.

## License and attribution

The theme code is available under the license in [LICENSE](LICENSE). The site footer retains: “Powered by Jekyll & AcademicPages, a fork of Minimal Mistakes.”
