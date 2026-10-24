const fs = require('fs');
const path = require('path');

const indexJsPath = path.join(process.cwd(), 'index.js');
const indexJsContent = fs.readFileSync(indexJsPath, 'utf8');

// Extract DEFAULT_POSTS array from index.js
const startMarker = 'const DEFAULT_POSTS = [';
const startIdx = indexJsContent.indexOf(startMarker);
const endMarker = '\n];\n\nconst BlogView = () => {';
const endIdx = indexJsContent.indexOf(endMarker, startIdx);

if (startIdx === -1 || endIdx === -1) {
  throw new Error('Could not locate DEFAULT_POSTS in index.js');
}

const arrayLiteral = indexJsContent.slice(startIdx + 'const DEFAULT_POSTS = '.length, endIdx + 2);
const posts = eval(arrayLiteral);

console.log(`Extracted ${posts.length} blog posts from index.js`);

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderInlineHTML(text) {
  let escaped = String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
  escaped = escaped.replace(/`(.*?)`/g, '<code class="bg-white/10 text-brand-cyan px-1.5 py-0.5 rounded font-mono text-xs border border-white/5">$1</code>');
  escaped = escaped.replace(/\[(.*?)\]\((.*?)\)/g, (_, label, url) => {
    const resolvedUrl = url.startsWith('#') ? `../${url}` : url;
    return `<a href="${resolvedUrl}" class="text-brand-cyan underline hover:text-brand-blue font-semibold transition">${label}</a>`;
  });
  return escaped;
}

function renderRichMarkdownStatic(text) {
  if (!text) return '';
  const lines = text.split('\n');
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      const lang = trimmed.slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(escapeHtml(lines[i]));
        i++;
      }
      if (i < lines.length) i++;
      out.push(`
        <div class="my-6 border border-white/10 rounded-2xl bg-black/40 overflow-hidden font-mono text-sm leading-relaxed text-brand-light-secondary shadow-2xl">
          <div class="px-4 py-2 bg-white/5 border-b border-white/5 text-xs text-brand-blue uppercase font-bold tracking-wider flex justify-between items-center">
            <span>${escapeHtml(lang || 'CODE')}</span>
            <span class="text-[10px] text-white/30 lowercase font-mono">Terminal Output</span>
          </div>
          <pre class="p-5 overflow-x-auto whitespace-pre scrolling-touch select-all text-xs md:text-sm text-brand-cyan scrollbar-thin"><code>${codeLines.join('\n')}</code></pre>
        </div>
      `);
      continue;
    }

    if (trimmed.startsWith('## ')) {
      out.push(`<h2 class="text-2xl md:text-3xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">${renderInlineHTML(trimmed.replace('## ', ''))}</h2>`);
      i++;
      continue;
    }

    if (trimmed.startsWith('#### ')) {
      out.push(`<h4 class="text-lg md:text-xl font-bold text-brand-cyan mt-6 mb-2">${renderInlineHTML(trimmed.replace('#### ', ''))}</h4>`);
      i++;
      continue;
    }

    if (trimmed.startsWith('> ')) {
      const quoteLines = [];
      while (i < lines.length && lines[i].trim().startsWith('> ')) {
        quoteLines.push(lines[i].trim().replace(/^>\s*/, ''));
        i++;
      }
      out.push(`
        <div class="my-6 p-6 rounded-2xl bg-gradient-to-r from-brand-blue/15 via-brand-cyan/10 to-transparent border-l-4 border-brand-cyan shadow-xl backdrop-blur-sm">
          <div class="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan mb-2">
            <span class="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
            <span>Key Takeaway / Architecture Insight</span>
          </div>
          <div class="text-brand-light text-base md:text-lg leading-relaxed font-medium">${renderInlineHTML(quoteLines.join(' '))}</div>
        </div>
      `);
      continue;
    }

    if (trimmed.startsWith('### ')) {
      out.push(`<h3 class="text-xl md:text-2xl font-bold text-brand-blue mt-8 mb-3">${renderInlineHTML(trimmed.replace('### ', ''))}</h3>`);
      i++;
      continue;
    }

    if (trimmed === '---') {
      out.push(`<hr class="border-t border-white/10 my-10" />`);
      i++;
      continue;
    }

    if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      const items = [];
      while (i < lines.length && (lines[i].trim().startsWith('* ') || lines[i].trim().startsWith('- '))) {
        const cleanLine = lines[i].trim().replace(/^[\*\-]\s+/, '');
        items.push(`
          <li class="flex items-start mb-3 ml-4 text-brand-light-secondary">
            <span class="text-brand-blue mr-2.5 mt-1.5 text-xs">✦</span>
            <span>${renderInlineHTML(cleanLine)}</span>
          </li>
        `);
        i++;
      }
      out.push(`<ul class="my-5 list-none">${items.join('')}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        const numMatch = lines[i].trim().match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          items.push(`
            <li class="flex items-start mb-3 ml-4 text-brand-light-secondary">
              <span class="text-brand-cyan font-mono font-bold mr-3 mt-0.5 text-sm">${numMatch[1]}.</span>
              <span>${renderInlineHTML(numMatch[2])}</span>
            </li>
          `);
        }
        i++;
      }
      out.push(`<ol class="my-5 list-none">${items.join('')}</ol>`);
      continue;
    }

    if (trimmed.startsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      if (tableLines.length >= 2) {
        const parseRow = (rowStr) => rowStr.split('|').slice(1, -1).map(c => c.trim());
        const headers = parseRow(tableLines[0]);
        const bodyRows = tableLines.slice(2).map(parseRow);
        out.push(`
          <div class="my-8 overflow-x-auto rounded-2xl border border-white/10 shadow-xl bg-brand-dark-secondary/80">
            <table class="w-full text-left border-collapse text-sm">
              <thead>
                <tr class="bg-white/5 border-b border-white/10 text-white font-mono text-xs uppercase tracking-wider">
                  ${headers.map(h => `<th class="py-3.5 px-4 font-bold">${renderInlineHTML(h)}</th>`).join('')}
                </tr>
              </thead>
              <tbody class="divide-y divide-white/5">
                ${bodyRows.map(r => `
                  <tr class="hover:bg-white/[0.03] transition-colors">
                    ${r.map((cell, cIdx) => `<td class="py-3.5 px-4 ${cIdx === 0 ? 'font-semibold text-white' : 'text-brand-light-secondary'}">${renderInlineHTML(cell)}</td>`).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `);
      }
      continue;
    }

    if (trimmed === '') {
      out.push(`<div class="h-4"></div>`);
      i++;
      continue;
    }

    out.push(`<p class="text-brand-light-secondary leading-relaxed mb-5 text-base md:text-lg">${renderInlineHTML(trimmed)}</p>`);
    i++;
  }

  return out.join('\n');
}

function getCategoryThemeClass(cat) {
  switch (cat) {
    case 'Threat Intel': return 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/25';
    case 'Generative AI': return 'bg-brand-purple/10 text-brand-purple border-brand-purple/25';
    case 'Browser Security': return 'bg-brand-green/10 text-brand-green border-brand-green/25';
    default: return 'bg-brand-blue/10 text-brand-blue border-brand-blue/25';
  }
}

function toIsoDate(dateStr) {
  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) {
    return d.toISOString().split('T')[0];
  }
  return '2026-10-07';
}

const blogDirs = [
  path.join(process.cwd(), 'blog'),
  path.join(process.cwd(), 'public', 'blog')
];

blogDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

posts.forEach(post => {
  const canonicalUrl = `https://eyeballsecurity.com/blog/${post.slug}.html`;
  const isoDate = toIsoDate(post.date);
  const relatedPosts = posts.filter(p => p.slug !== post.slug).slice(0, 3);

  const schemaJson = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${canonicalUrl}#article`,
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": `${isoDate}T08:00:00+00:00`,
        "dateModified": "2026-10-24T10:00:00+00:00",
        "author": {
          "@type": "Organization",
          "name": post.author,
          "url": "https://eyeballsecurity.com/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "EyeBall Security Inc.",
          "logo": {
            "@type": "ImageObject",
            "url": "https://eyeballsecurity.com/blue.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        "articleSection": post.category,
        "keywords": (post.tags || []).join(', ')
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "EYEBALL Security",
            "item": "https://eyeballsecurity.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Threat Intel Blog",
            "item": "https://eyeballsecurity.com/#blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": canonicalUrl
          }
        ]
      }
    ]
  }, null, 2);

  const htmlPage = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="../logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(post.title)} | EYEBALL Security</title>
    <link rel="canonical" href="${canonicalUrl}" />
    <meta name="description" content="${escapeHtml(post.excerpt)}" />
    <meta name="keywords" content="${escapeHtml((post.tags || []).join(', '))}, ${escapeHtml(post.category)}, Enterprise Browser Security, Browser DLP, EYEBALL Security" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="EYEBALL Security" />
    <meta property="og:title" content="${escapeHtml(post.title)}" />
    <meta property="og:description" content="${escapeHtml(post.excerpt)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="https://eyeballsecurity.com/blue.png" />
    <meta property="article:published_time" content="${isoDate}T08:00:00Z" />
    <meta property="article:section" content="${escapeHtml(post.category)}" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(post.title)}" />
    <meta name="twitter:description" content="${escapeHtml(post.excerpt)}" />
    <meta name="twitter:image" content="https://eyeballsecurity.com/blue.png" />

    <script type="application/ld+json">
${schemaJson}
    </script>

    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              'brand-dark': '#06090E',
              'brand-dark-secondary': '#0D1117',
              'brand-blue': '#00B4D8',
              'brand-cyan': '#48CAE4',
              'brand-purple': '#9D4EDD',
              'brand-green': '#06D6A0',
              'brand-light': '#F8F9FA',
              'brand-light-secondary': '#ADB5BD',
            }
          }
        }
      }
    </script>
    <style>
      html { scroll-behavior: smooth; }
      .bg-grid-pattern {
        background-image: linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
        background-size: 40px 40px;
      }
    </style>

    <!-- Umami Cloud Analytics Integration -->
    <script defer src="https://cloud.umami.is/script.js" data-website-id="f4b2fa1b-2fcb-439e-b40d-99679f204792"></script>
    <!-- Leadfeeder Analytics Integration -->
    <script> (function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('lAxoEaKjZxv4OYGd'); </script>
  </head>
  <body class="bg-brand-dark text-brand-light font-sans antialiased flex flex-col min-h-screen">
    <header class="bg-brand-dark/90 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 border-b border-white/5">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <a href="../#landing" class="flex items-center space-x-3 focus:outline-none group">
            <img src="../blue.png" onerror="this.onerror=null; this.src='../logo.svg';" class="h-12 w-auto transition-transform duration-300 group-hover:scale-105" alt="EyeBall Logo" />
            <span class="text-2xl font-bold text-white tracking-tight">EyeBall</span>
          </a>
          <div class="flex items-center space-x-4 md:space-x-6">
            <nav class="hidden md:flex space-x-6 text-sm font-medium text-brand-light-secondary">
              <a href="../#features" class="hover:text-white transition-colors">Features</a>
              <a href="../#case-studies" class="hover:text-white transition-colors">Case Studies</a>
              <a href="../#faq" class="hover:text-white transition-colors">FAQ</a>
              <a href="../#blog" class="text-brand-blue font-bold border-b-2 border-brand-blue pb-1">Blog</a>
            </nav>
            <a href="../#freemium" class="bg-brand-blue hover:bg-brand-cyan text-brand-dark px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg shadow-brand-blue/20">
              START NOW
            </a>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-grow pt-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <article class="max-w-4xl mx-auto py-4">
          <a href="../#blog" class="inline-flex items-center space-x-2 text-sm font-mono text-brand-blue hover:text-brand-cyan mb-8 transition group pb-2">
            <svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            <span>BACK TO RESOURCE DIRECTORY</span>
          </a>

          <div style="background: ${post.coverPattern || 'linear-gradient(135deg, #0d1b2a 0%, #172554 100%)'}" class="h-64 sm:h-80 w-full rounded-3xl relative overflow-hidden flex flex-col justify-end p-6 sm:p-10 border border-white/15 shadow-2xl">
            <div class="absolute inset-0 bg-brand-dark/30 backdrop-blur-[1px]"></div>
            <div class="relative z-10">
              <span class="inline-block px-3 py-1 mb-4 text-xs font-mono font-bold tracking-wider uppercase rounded border ${getCategoryThemeClass(post.category)}">
                ${escapeHtml(post.category)}
              </span>
              <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
                ${escapeHtml(post.title)}
              </h1>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-between py-6 border-b border-white/10 mb-10 text-sm gap-4 text-brand-light-secondary font-mono">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue font-bold">
                ${escapeHtml(post.author.charAt(0))}
              </div>
              <div>
                <p class="text-white font-semibold">${escapeHtml(post.author)}</p>
                <p class="text-xs text-brand-light-secondary">${escapeHtml(post.authorTitle || 'Security Researcher')}</p>
              </div>
            </div>
            <div class="flex items-center space-x-6 text-xs text-brand-light-secondary font-mono">
              <span>Published: <strong>${escapeHtml(post.date)}</strong></span>
              <span>•</span>
              <span>Read Time: <strong>${escapeHtml(post.readTime)}</strong></span>
            </div>
          </div>

          <div class="prose prose-invert prose-brand max-w-none text-brand-light-secondary leading-relaxed font-sans mb-16 space-y-4">
            ${renderRichMarkdownStatic(post.content)}
          </div>

          ${post.tags && post.tags.length > 0 ? `
            <div class="border-t border-white/10 pt-6 flex flex-wrap gap-2 items-center mb-16">
              <span class="text-xs font-mono text-brand-light-secondary uppercase tracking-widest mr-2">Tags:</span>
              ${post.tags.map(tag => `
                <span class="bg-white/5 border border-white/10 text-brand-light-secondary text-xs px-3 py-1 rounded-full font-mono">
                  #${escapeHtml(tag)}
                </span>
              `).join('')}
            </div>
          ` : ''}

          <div class="bg-gradient-to-r from-brand-blue/10 via-brand-dark-secondary to-brand-dark border border-brand-blue/20 rounded-3xl p-8 text-center relative overflow-hidden mb-16">
            <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <h3 class="text-2xl font-bold text-white mb-2 relative z-10">Deploy Zero-Blind-Spot Browser Security</h3>
            <p class="text-brand-light-secondary text-sm max-w-xl mx-auto mb-6 relative z-10">
              Neutralize session token theft, ClickFix campaigns, and GenAI data leaks natively in Chrome and Edge with EYEBALL Enterprise Suite.
            </p>
            <a href="../#contact" class="inline-block relative z-10 bg-brand-blue hover:bg-brand-cyan text-brand-dark font-bold px-8 py-3 rounded-xl transition shadow-lg shadow-brand-blue/25 text-sm uppercase tracking-wider">
              START NOW
            </a>
          </div>

          <section class="border-t border-white/10 pt-12">
            <h2 class="text-2xl font-bold text-white mb-6">More Threat Intelligence Research</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${relatedPosts.map(rp => `
                <a href="${rp.slug}.html" class="block bg-brand-dark-secondary border border-white/10 hover:border-brand-blue/40 rounded-2xl p-5 transition">
                  <span class="text-[10px] font-mono uppercase text-brand-cyan block mb-2">${escapeHtml(rp.category)}</span>
                  <h3 class="text-base font-bold text-white mb-2 line-clamp-2">${escapeHtml(rp.title)}</h3>
                  <p class="text-xs text-brand-light-secondary line-clamp-3">${escapeHtml(rp.excerpt)}</p>
                </a>
              `).join('')}
            </div>
          </section>
        </article>
      </div>
    </main>

    <footer class="bg-brand-dark-secondary border-t border-white/5 mt-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p class="text-brand-light-secondary">EyeBall 2026. Secure the Web. All rights reserved.</p>
        <div class="mt-6 flex justify-center space-x-8 text-sm text-brand-light-secondary font-mono">
          <a href="../" class="hover:text-white transition">Home</a>
          <a href="../#blog" class="hover:text-white transition">Blog</a>
          <a href="../#privacy" class="hover:text-white transition">Privacy Policy</a>
          <a href="../#terms" class="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  </body>
</html>`;

  blogDirs.forEach(dir => {
    fs.writeFileSync(path.join(dir, `${post.slug}.html`), htmlPage, 'utf8');
  });
});

// Generate updated sitemap.xml in both /sitemap.xml and /public/sitemap.xml
const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://eyeballsecurity.com/</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
${sortedPosts.map(post => `  <url>
    <loc>https://eyeballsecurity.com/blog/${post.slug}.html</loc>
    <lastmod>${toIsoDate(post.date)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(process.cwd(), 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemapXml, 'utf8');

console.log('Successfully generated static SEO blog pages and updated sitemaps.');
