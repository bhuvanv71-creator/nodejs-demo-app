const test = require('node:test');
const assert = require('node:assert/strict');
const server = require('./app');

test('application returns a successful response', async () => {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));

    try {
        const address = server.address();
        const response = await fetch(`http://127.0.0.1:${address.port}/`);

        assert.equal(response.status, 200);

        const body = await response.text();
        assert.match(body, /DevOps CI\/CD Pipeline is Working!/);
    } finally {
        await new Promise((resolve, reject) => {
            server.close(error => error ? reject(error) : resolve());
        });
    }
});
