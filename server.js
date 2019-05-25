const express = require('express');
const db = require('./data/db.js')
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2>Posts API</h>
    <p>Welcome to the Posts API</p>
  `);
});

server.get('/api/posts', async (req, res) => {
  try {
    const posts = await db.find(req.query);
    res.status(200).json(posts);
  } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Error retrieving posts"
      });
    } 
  });

module.exports = server;