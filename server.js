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
        error: "The posts information could not be retrieved."
      });
    } 
  });

  server.get('/api/posts/:id', async (req, res) => {
    try {
      const post = await db.findById(req.params.id);
  
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "The post with the specified ID does not exist." });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "The post information could not be retrieved."
      });
    }
  });

module.exports = server;