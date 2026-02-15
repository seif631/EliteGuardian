const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, 'debug_build.log');
const log = (msg) => {
    const entry = `[${new Date().toISOString()}] ${msg}\n`;
    fs.appendFileSync(logPath, entry);
    console.log(msg);
};

fs.writeFileSync(logPath, 'STARTING DEBUG BUILD\n');

log('Checking Vite path...');
const vitePath = path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');
if (!fs.existsSync(vitePath)) {
    log('ERROR: Vite path NOT FOUND: ' + vitePath);
    process.exit(1);
}

log('Vite path found: ' + vitePath);

log('Starting build process...');
const build = exec(`node "${vitePath}" build`, { cwd: __dirname });

build.stdout.on('data', (data) => {
    log('STDOUT: ' + data.toString());
});

build.stderr.on('data', (data) => {
    log('STDERR: ' + data.toString());
});

build.on('close', (code) => {
    log('Process exited with code: ' + code);
});

log('Listener attached. Waiting for build...');
