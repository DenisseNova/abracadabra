const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
  const html = fs.readFileSync('./index.html', 'utf-8')
  res.send(html)
})



module.exports = router;