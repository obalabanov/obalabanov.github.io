# Oleg Balabanov's personal website

A compact, single-page academic website with an al-folio-inspired layout.
The published page is plain HTML and CSS, with no runtime JavaScript or external font dependencies.

## Editing

- Biography: `contents/home.md` (the Emails section is retained as source reference; visible email links live in the template).
- Selected publications: `contents/publications.md`.
- Page layout and contact links: `template.html`.
- Design: `static/css/main.css`.
- Public CV: `static/assets/oleg_balabanov_public.pdf`.

After editing the Markdown or template, run `node build.cjs` to regenerate `index.html`.
The Markdown parser is already included; no package installation is required.
For a local preview, run `python3 -m http.server 8000` from this directory.

## GitHub Pages

Copy the contents of this directory into the website repository. Commit the generated
`index.html` along with the assets. No Jekyll or build action is required.
The older CV URL is retained as an identical copy for existing links.

The original downloaded website is unchanged. The general CV was rebuilt from its
original LaTeX source with the subtitle beneath the name removed.
