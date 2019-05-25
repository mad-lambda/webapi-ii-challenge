const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2>API</h>
    <p>Welcome to the API</p>
  `);
});

module.exports = server;