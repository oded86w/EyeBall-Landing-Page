const fs = require('fs');

let content = fs.readFileSync('./index.js', 'utf8');

// 1. Upgrade renderInlineHTML to support markdown links [text](url)
const oldInline = `  // Safe inner markdown inline helper
  const renderInlineHTML = (text) => {
    let escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    // Replace daring bold **
    escaped = escaped.replace(/\\*\\*(.*?)\\*\\*/g, '<strong class="text-white font-bold">$1</strong>');
    // Replace markup code \`
    escaped = escaped.replace(/\`(.*?)\`/g, '<code class="bg-white/10 text-brand-cyan px-1.5 py-0.5 rounded font-mono text-xs border border-white/5">$1</code>');
    return escaped;
  };`;

const newInline = `  // Safe inner markdown inline helper
  const renderInlineHTML = (text) => {
    let escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    // Replace daring bold **
    escaped = escaped.replace(/\\*\\*(.*?)\\*\\*/g, '<strong class="text-white font-bold">$1</strong>');
    // Replace markup code \`
    escaped = escaped.replace(/\`(.*?)\`/g, '<code class="bg-white/10 text-brand-cyan px-1.5 py-0.5 rounded font-mono text-xs border border-white/5">$1</code>');
    // Replace markdown links [label](url)
    escaped = escaped.replace(/\\[(.*?)\\]\\((.*?)\\)/g, '<a href="$2" class="text-brand-cyan underline hover:text-brand-blue font-semibold transition">$1</a>');
    return escaped;
  };`;

if (!content.includes(oldInline)) {
  console.error("oldInline not found!");
  process.exit(1);
}
content = content.replace(oldInline, newInline);

// 2. Add H4 and Blockquote (Callout Box) support in renderRichMarkdown
const targetH2 = `      // 1. Heading 2
      if (trimmed.startsWith('## ')) {
        elements.push(html\`<h2 key=\${i} class="text-2xl md:text-3xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">\${trimmed.replace('## ', '')}</h2>\`);
        i++;
        continue;
      }`;

const newHeadingsAndQuotes = `      // 1. Heading 2
      if (trimmed.startsWith('## ')) {
        elements.push(html\`<h2 key=\${i} class="text-2xl md:text-3xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">\${trimmed.replace('## ', '')}</h2>\`);
        i++;
        continue;
      }
      
      // 1b. Heading 4
      if (trimmed.startsWith('#### ')) {
        elements.push(html\`<h4 key=\${i} class="text-lg md:text-xl font-bold text-brand-cyan mt-6 mb-2">\${trimmed.replace('#### ', '')}</h4>\`);
        i++;
        continue;
      }

      // 1c. Blockquote / Key Takeaway Callout Box
      if (trimmed.startsWith('> ')) {
        const quoteLines = [];
        while (i < lines.length && lines[i].trim().startsWith('> ')) {
          quoteLines.push(lines[i].trim().replace(/^>\\s*/, ''));
          i++;
        }
        elements.push(html\`
          <div key=\${i} class="my-6 p-6 rounded-2xl bg-gradient-to-r from-brand-blue/15 via-brand-cyan/10 to-transparent border-l-4 border-brand-cyan shadow-xl backdrop-blur-sm">
            <div class="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan mb-2">
              <span class="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              <span>Key Takeaway / Architecture Insight</span>
            </div>
            <div class="text-brand-light text-base md:text-lg leading-relaxed font-medium" dangerouslySetInnerHTML=\${{ __html: renderInlineHTML(quoteLines.join(' ')) }}></div>
          </div>
        \`);
        continue;
      }`;

if (!content.includes(targetH2)) {
  console.error("targetH2 not found!");
  process.exit(1);
}
content = content.replace(targetH2, newHeadingsAndQuotes);

fs.writeFileSync('./index.js', content, 'utf8');
console.log("Successfully patched index.js markdown parser!");
