// Build after editing Markdown; the published page requires no JavaScript.
const fs = require('node:fs');
const path = require('node:path');
const { marked } = require('./static/js/marked.min.js');
const read = file => fs.readFileSync(path.join(__dirname, file), 'utf8');
marked.use({ mangle: false, headerIds: false });
const biography = marked.parse(read('contents/home.md').split('#### Emails')[0].trim());
const publications = read('contents/publications.md').trim().split(/\n\s*\n/).map(entry => {
  const match = entry.match(/^(.+?)\s+\[([^\]]+)\]\(([^)]+)\)\s+(.+?),\s+(\d{4})\.$/);
  if (!match) throw new Error(`Unrecognized publication format: ${entry}`);
  const [, authors, title, url, venue, year] = match;
  return `<li class="publication">
          <span class="publication-year">${year}</span>
          <div>
            <h3><a href="${url.replace(/&/g, '&amp;')}">${marked.parseInline(title.replace(/\.$/, ''))}</a></h3>
            <p class="authors">${marked.parseInline(authors.replace(/\.$/, ''))}</p>
            <p class="venue">${marked.parseInline(venue)}</p>
          </div>
        </li>`;
}).join('\n        ');
const html = read('template.html').replace('{{BIOGRAPHY}}', biography).replace('{{PUBLICATIONS}}', publications);
fs.writeFileSync(path.join(__dirname, 'index.html'), html);
console.log('Built index.html from the biography and selected publications.');
