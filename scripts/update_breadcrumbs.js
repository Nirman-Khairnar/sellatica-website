import fs from 'fs';
import path from 'path';

const pagesDir = 'h:/Biz Online/Sellatica - Official Website/sellatica-website-/src/pages';

const pagesToUpdate = [
     { file: 'About.tsx', name: 'About', url: 'https://www.sellatica.in/about' },
     { file: 'Services.tsx', name: 'Services', url: 'https://www.sellatica.in/services' },
     { file: 'Results.tsx', name: 'Results', url: 'https://www.sellatica.in/results' },
     { file: 'FAQ.tsx', name: 'FAQ', url: 'https://www.sellatica.in/faq' },
     { file: 'Contact.tsx', name: 'Contact', url: 'https://www.sellatica.in/contact' },
     { file: 'AiOsAudit.tsx', name: 'AI OS Audit', url: 'https://www.sellatica.in/ai-os-audit' },
     { file: 'AiOsPartner.tsx', name: 'AI OS Partner', url: 'https://www.sellatica.in/ai-os-partner' },
     { file: 'AiOsPilot.tsx', name: 'AI OS Pilot', url: 'https://www.sellatica.in/ai-os-pilot' },
     { file: 'Blog.tsx', name: 'Blog', url: 'https://www.sellatica.in/blog' },
     { file: 'BlogPost.tsx', isDynamic: true }
];

pagesToUpdate.forEach(page => {
     const filePath = path.join(pagesDir, page.file);
     if (!fs.existsSync(filePath)) return;

     let content = fs.readFileSync(filePath, 'utf-8');

     // Inject Breadcrumbs to SEO
     if (page.isDynamic) {
          if (!content.includes('breadcrumbs={[')) {
               content = content.replace(/<SEO([^>]+)\/>/, `<SEO$1\n        breadcrumbs={[{ name: 'Blog', item: 'https://www.sellatica.in/blog' }, { name: post.title, item: 'https://www.sellatica.in/blog/' + post.slug }]} \n      />`);
          }
     } else {
          if (!content.includes('breadcrumbs={[')) {
               content = content.replace(/<SEO([^>]+)\/>/, `<SEO$1\n        breadcrumbs={[{ name: '${page.name}', item: '${page.url}' }]} \n      />`);
          }
     }

     // Remove existing BreadcrumbList scripts
     // This regex looks for: <script type="application/ld+json"> ... "BreadcrumbList" ... </script>
     content = content.replace(/<script type="application\/ld\+json">[\s\S]*?"@type":\s*"BreadcrumbList"[\s\S]*?<\/script>/g, '');

     content = content.replace(/<Helmet>\s*<\/Helmet>/g, '');

     fs.writeFileSync(filePath, content);
});

console.log('Breadcrumbs added and old schemas cleaned up.');
