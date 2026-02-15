const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, 'build_trace.log');
const logStream = fs.createWriteStream(logPath);

function log(msg) {
    const t = new Date().toISOString();
    const line = `[${t}] ${msg}\n`;
    process.stdout.write(line);
    logStream.write(line);
}

log('Starting Build Trace...');

const viteBin = path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');
log(`Vite Bin: ${viteBin}`);

const child = spawn('node', [viteBin, 'build', '--logLevel', 'info'], {
    cwd: __dirname,
    shell: true,
    env: { ...process.env, NODE_ENV: 'production' }
});

child.stdout.on('data', (data) => {
    log(`STDOUT: ${data.toString()}`);
});

child.stderr.on('data', (data) => {
    log(`STDERR: ${data.toString()}`);
});

child.on('error', (err) => {
    log(`ERROR: ${err.message}`);
});

child.on('close', (code) => {
    log(`PROCESS CLOSED WITH CODE ${code}`);
    logStream.end();
});

log('Spawned process. Waiting...');
