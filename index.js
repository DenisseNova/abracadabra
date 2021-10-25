const express = require('express');
const app = express()
const PORT = 3000
const routes = require('./routes');

app.use(express.static(__dirname + '/assets/'))
app.use(routes);

app.listen(PORT, () =>{
  console.log(`api esta ejecutandose http://localhost:${PORT}`)
})