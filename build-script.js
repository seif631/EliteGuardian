import { build } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logFile = path.resolve(__dirname, 'build.log');

function log(msg) {
    const formattedMsg = `[${new Date().toISOString()}] ${msg}\n`;
    console.log(formattedMsg);
    fs.appendFileSync(logFile, formattedMsg);
}

log('Starting build script...');
log('Current directory: ' + process.cwd());
log('__dirname: ' + __dirname);

(async () => {
    try {
        log('Invoking vite build...');

        // Ensure dist is empty
        const distDir = path.resolve(__dirname, 'dist');
        if (fs.existsSync(distDir)) {
            log('Cleaning existing dist folder...');
            fs.rmSync(distDir, { recursive: true, force: true });
        }

        const result = await build({
            root: __dirname,
            configFile: path.resolve(__dirname, 'vite.config.js'),
            logLevel: 'info',
            build: {
                outDir: 'dist',
                emptyOutDir: true,
                write: true
            }
        });

        log('Build completed successfully!');

        // Verify files exist
        if (fs.existsSync(distDir)) {
            const files = fs.readdirSync(distDir);
            log(`Files in dist: ${files.join(', ')}`);
        } else {
            log('ERROR: dist folder not created!');
        }

    } catch (e) {
        log('Build failed with error:');
        log(e.stack || e);
        process.exit(1);
    }
})();
