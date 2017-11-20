
const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'http://jsonplaceholder.typecode.com';

// GET api listing.
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all positions
router.get('/posts', (req, res) => {
  // Get posts from the mock API
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
