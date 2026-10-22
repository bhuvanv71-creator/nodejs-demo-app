const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ status: 'healthy' }));
    }

    if (req.url === '/' || req.url === '/version') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Version 1: DevOps CI/CD Pipeline is Working!');
    }

    res.writeHead(404);
    res.end('Not Found');
});

if (require.main === module) {
    const PORT = process.env.PORT || 3000;

    server.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = server;
