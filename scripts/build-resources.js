import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const PUBLISHED_DIR = path.join(ROOT, 'mission-boss-seo', 'published');
const OUTPUT_DIR = path.join(ROOT, 'resources');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Configure marked for tables, GFM, etc.
marked.setOptions({
  gfm: true,
  breaks: false,
});

// ── Shared HTML fragments ──────────────────────────────────────────

const NAV = `  <!-- ====== NAVIGATION ====== -->
  <nav class="nav" id="nav">
    <div class="nav__inner">
      <a href="/" class="nav__logo">
        <img src="/img/mission-boss-logo-white.png" alt="Mission BOSS" class="nav__logo-img" />
      </a>
      <div class="nav__hamburger" id="nav-toggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </div>
      <div class="nav__links" id="nav-links">
        <a href="/" class="nav__link">Home</a>
        <a href="/how-it-works" class="nav__link">How It Works</a>
        <a href="/case-studies" class="nav__link">Case Studies</a>
        <a href="/about" class="nav__link">About</a>
        <a href="/media-appearances" class="nav__link">Media</a>
        <a href="/resources" class="nav__link">Resources</a>
        <a href="https://missionboss.com" class="nav__link" target="_blank">Login</a>
        <a href="/start-here" class="nav__cta btn btn--primary">Start Here</a>
      </div>
    </div>
  </nav>`;

const FOOTER = `  <!-- ====== FOOTER ====== -->
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__brand">
          <div class="footer__brand-name">
            <img src="/img/mission-boss-logo-white.png" alt="Mission BOSS" class="footer__logo-img" />
          </div>
          <p class="footer__brand-text">
            Daily clarity, honest scorecards, and documented decisions for credit union leaders who want to lead with facts.
          </p>
        </div>
        <div>
          <h4 class="footer__heading">Navigate</h4>
          <a href="/" class="footer__link">Home</a>
          <a href="/how-it-works" class="footer__link">How It Works</a>
          <a href="/case-studies" class="footer__link">Case Studies</a>
          <a href="/about" class="footer__link">About</a>
          <a href="/media-appearances" class="footer__link">Media</a>
          <a href="/resources" class="footer__link">Resources</a>
          <a href="/start-here" class="footer__link">Start Here</a>
        </div>
        <div>
          <h4 class="footer__heading">Connect</h4>
          <a href="mailto:mike@missionboss.com" class="footer__link">mike@missionboss.com</a>
          <a href="#" class="footer__link">LinkedIn</a>
          <a href="#" class="footer__link">Skool Community</a>
        </div>
      </div>
      <div class="footer__bottom">
        <span>&copy; 2026 Mission BOSS. All rights reserved.</span>
        <span>Franklin, TN</span>
      </div>
    </div>
  </footer>`;

// ── Helpers ────────────────────────────────────────────────────────

/**
 * Extract <script type="application/ld+json"> blocks from raw markdown.
 * These appear as literal HTML in the markdown, after "---" separators.
 */
function extractSchemaBlocks(rawContent) {
  const blocks = [];
  const regex = /<script\s+type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/gi;
  let match;
  while ((match = regex.exec(rawContent)) !== null) {
    blocks.push(match[0]);
  }
  return blocks;
}

/**
 * Remove schema script blocks from the markdown body so they don't
 * render as visible HTML inside the article content.
 */
function stripSchemaBlocks(content) {
  // Remove the trailing --- separator before schema blocks too
  return content
    .replace(/---\s*\n\s*<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, '')
    .replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, '')
    .trim();
}

/**
 * Format a date string (YYYY-MM-DD) to a human-readable form.
 */
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

/**
 * Map cluster IDs to readable names.
 */
function clusterLabel(cluster) {
  const map = {
    'cluster-01-nim': 'Net Interest Margin',
    'cluster-02-alm': 'Asset-Liability Management',
    'cluster-03-ncua': 'NCUA & Compliance',
    'cluster-04-ncua': 'NCUA Exam',
    'cluster-03-strategic': 'Strategic Planning',
    'cluster-04-strategy': 'Strategy & Execution',
  };
  return map[cluster] || cluster;
}

// ── Build individual article page ──────────────────────────────────

function buildArticlePage(frontmatter, markdownBody, schemaBlocks, slug) {
  const title = frontmatter.title;
  const description = frontmatter.description || '';
  const author = frontmatter.author || 'Mission BOSS';
  const date = frontmatter.date || '';
  const pillar = frontmatter.pillar || '';
  const cluster = frontmatter.cluster || '';

  // Convert markdown body to HTML
  const articleHTML = marked.parse(markdownBody);

  // Build schema tags for <head>
  const schemaHead = schemaBlocks.map(b => '  ' + b).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} — Mission BOSS</title>
  <meta name="description" content="${description.replace(/"/g, '&quot;')}" />
  <link rel="stylesheet" href="/css/base.css" />
  <link rel="stylesheet" href="/css/components.css" />
  <link rel="stylesheet" href="/css/pages.css" />
  <link rel="stylesheet" href="/css/article.css" />
  <link rel="icon" type="image/svg+xml" href="/img/logo-favicon.svg" />
${schemaHead}
</head>
<body>

${NAV}

  <!-- ====== PAGE HERO ====== -->
  <section class="page-hero">
    <div class="page-hero__overlay"></div>
    <div class="container" style="position:relative;z-index:2;">
      <span class="section__eyebrow">${pillar}</span>
      <h1 class="page-hero__title">${title}</h1>
      <p class="page-hero__subtitle">${description}</p>
    </div>
  </section>

  <!-- ====== ARTICLE ====== -->
  <article class="section">
    <div class="container">
      <div class="article-content">
        ${articleHTML}
      </div>
      <div class="article-meta">
        <div class="article-meta__author">
          <span class="article-meta__label">Written by</span>
          <span class="article-meta__name">${author}</span>
        </div>
        <div class="article-meta__details">
          ${date ? `<time class="article-meta__date" datetime="${date}">${formatDate(date)}</time>` : ''}
          ${pillar ? `<span class="article-meta__tag article-meta__tag--pillar">${pillar}</span>` : ''}
          ${cluster ? `<span class="article-meta__tag article-meta__tag--cluster">${clusterLabel(cluster)}</span>` : ''}
        </div>
      </div>
    </div>
  </article>

  <!-- ====== CTA BANNER ====== -->
  <section class="cta-banner" id="cta">
    <div class="container">
      <h2 class="cta-banner__title">Ready to BOSS Your Mission?</h2>
      <p class="cta-banner__text">
        Your mission is too important for guesswork. Get daily clarity on your bottom line and start making decisions that stick.
      </p>
      <a href="/start-here" class="btn btn--gold btn--large btn--arrow">Start Here</a>
    </div>
  </section>

${FOOTER}

  <script type="module" src="/js/main.js"></script>
</body>
</html>
`;
}

// ── Build resources index page ─────────────────────────────────────

function buildIndexPage(articles) {
  // Group articles by cluster
  const groups = {};
  for (const a of articles) {
    const cluster = a.frontmatter.cluster || 'other';
    if (!groups[cluster]) groups[cluster] = [];
    groups[cluster].push(a);
  }

  // Sort clusters by their key
  const sortedClusters = Object.keys(groups).sort();

  // Build card grid sections
  let sectionsHTML = '';
  for (const cluster of sortedClusters) {
    const label = clusterLabel(cluster);
    const clusterArticles = groups[cluster].sort((a, b) =>
      (a.frontmatter.title || '').localeCompare(b.frontmatter.title || '')
    );

    let cardsHTML = '';
    for (const a of clusterArticles) {
      const slug = a.slug;
      const fm = a.frontmatter;
      cardsHTML += `
          <a href="/resources/${slug}" class="resource-card">
            <div class="resource-card__tags">
              ${fm.pillar ? `<span class="resource-card__tag resource-card__tag--pillar">${fm.pillar}</span>` : ''}
              <span class="resource-card__tag resource-card__tag--cluster">${label}</span>
            </div>
            <h3 class="resource-card__title">${fm.title}</h3>
            <p class="resource-card__desc">${fm.description || ''}</p>
            <span class="resource-card__link">Read Article <span aria-hidden="true">&rarr;</span></span>
          </a>`;
    }

    sectionsHTML += `
      <div class="resources-cluster">
        <h2 class="resources-cluster__heading">${label}</h2>
        <div class="grid grid--3 resources-grid">
          ${cardsHTML}
        </div>
      </div>`;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Resources — Mission BOSS</title>
  <meta name="description" content="Credit union leadership resources: net interest margin, ALM, NCUA compliance, strategy execution, and daily bottom-line management guides." />
  <link rel="stylesheet" href="/css/base.css" />
  <link rel="stylesheet" href="/css/components.css" />
  <link rel="stylesheet" href="/css/pages.css" />
  <link rel="stylesheet" href="/css/article.css" />
  <link rel="icon" type="image/svg+xml" href="/img/logo-favicon.svg" />
</head>
<body>

${NAV}

  <!-- ====== PAGE HERO ====== -->
  <section class="page-hero">
    <div class="page-hero__overlay"></div>
    <div class="container" style="position:relative;z-index:2;">
      <span class="section__eyebrow">Learn</span>
      <h1 class="page-hero__title">Resources</h1>
      <p class="page-hero__subtitle">
        Guides, frameworks, and data-driven insights for credit union leaders who want to manage with daily clarity.
      </p>
    </div>
  </section>

  <!-- ====== RESOURCE LISTING ====== -->
  <section class="section">
    <div class="container">
      ${sectionsHTML}
    </div>
  </section>

  <!-- ====== CTA BANNER ====== -->
  <section class="cta-banner" id="cta">
    <div class="container">
      <h2 class="cta-banner__title">Ready to BOSS Your Mission?</h2>
      <p class="cta-banner__text">
        Your mission is too important for guesswork. Get daily clarity on your bottom line and start making decisions that stick.
      </p>
      <a href="/start-here" class="btn btn--gold btn--large btn--arrow">Start Here</a>
    </div>
  </section>

${FOOTER}

  <script type="module" src="/js/main.js"></script>
</body>
</html>
`;
}

// ── Main ───────────────────────────────────────────────────────────

function main() {
  const files = fs.readdirSync(PUBLISHED_DIR).filter(f => f.endsWith('.md'));
  console.log(`Found ${files.length} articles in ${PUBLISHED_DIR}`);

  const articles = [];

  for (const file of files) {
    const filePath = path.join(PUBLISHED_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content: markdownBody } = matter(raw);
    const slug = file.replace(/\.md$/, '');

    // Extract schema blocks from the raw content (they are literal HTML in the md)
    const schemaBlocks = extractSchemaBlocks(raw);

    // Strip schema blocks from the markdown body before converting
    const cleanBody = stripSchemaBlocks(markdownBody);

    // Build and write the article page
    const html = buildArticlePage(frontmatter, cleanBody, schemaBlocks, slug);
    const outPath = path.join(OUTPUT_DIR, `${slug}.html`);
    fs.writeFileSync(outPath, html, 'utf-8');
    console.log(`  -> ${slug}.html`);

    articles.push({ slug, frontmatter });
  }

  // Build and write the index page
  const indexHTML = buildIndexPage(articles);
  fs.writeFileSync(path.join(ROOT, 'resources.html'), indexHTML, 'utf-8');
  console.log(`  -> resources.html (${articles.length} articles)`);

  console.log(`\nDone. ${articles.length} files written to ${OUTPUT_DIR}/ and resources.html to root`);
}

main();
