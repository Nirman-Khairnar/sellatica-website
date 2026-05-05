import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, '../dist');
const PORT = 4173;

const routes = [
    '/',
    '/about',
    '/services',
    '/score',
    '/results',
    '/diagnostic',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
    '/refund'
];

function restoreBootShell(html) {
    let nextHtml = html.replace(
        /<html([^>]*)data-app-ready="true"([^>]*)>/i,
        '<html$1data-app-ready="false"$2>'
    );

    nextHtml = nextHtml.replace(
        /<html((?:(?!data-app-ready=)[^>])*)>/i,
        '<html$1 data-app-ready="false">'
    );

    return nextHtml;
}

async function prerender() {
    // 1. Start a simple server to serve the built assets
    const app = express();
    app.use(express.static(DIST_DIR));

    // Fallback for SPA
    app.use((req, res) => {
        res.sendFile(path.join(DIST_DIR, 'index.html'));
    });

    const server = app.listen(PORT, async () => {
        console.log(`Static server started on http://localhost:${PORT}`);

        try {
            // 2. Launch Puppeteer
            const browser = await puppeteer.launch({
                headless: "new"
            });
            const page = await browser.newPage();

            for (const route of routes) {
                console.log(`Prerendering: ${route}`);

                // Navigate to the route
                await page.goto(`http://localhost:${PORT}${route}`, {
                    waitUntil: 'domcontentloaded',
                    timeout: 60000
                });

                // Allow route effects, analytics boot, and the branded loader to settle.
                await new Promise((resolve) => setTimeout(resolve, 1800));

                // Get the HTML and restore the boot-shell state so the
                // prerendered document still opens behind the branded loader.
                let html = restoreBootShell(await page.content());

                // Inject BingPreview if strictly needed (though index.html should have it)
                // But doing it here ensures it's in the static snapshot
                if (!html.includes('name="BingPreview"')) {
                    html = html.replace('</head>', '<meta name="BingPreview" content="noarchive" /></head>');
                }

                // Determine output path
                const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
                const filePath = path.join(DIST_DIR, routePath);
                const dirPath = path.dirname(filePath);

                // Create directory if it doesn't exist
                if (!fs.existsSync(dirPath)) {
                    fs.mkdirSync(dirPath, { recursive: true });
                }

                // Write the file
                fs.writeFileSync(filePath, html);
                console.log(`Generated: ${filePath}`);
            }

            await browser.close();
            console.log('Prerendering complete!');

        } catch (error) {
            console.error('Prerendering failed:', error);
            process.exit(1);
        } finally {
            server.close();
            process.exit(0);
        }
    });
}

prerender();
