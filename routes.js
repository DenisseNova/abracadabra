const express = require('express');
const fs = require('fs');
const { userInfo } = require('os');
const router = express.Router();

router.get('/', (req, res) => {
  const html = fs.readFileSync('./index.html', 'utf-8')
  res.send(html)
})

router.get('/abracadabra/usuarios', (req, res) => {
  const user = fs.readFileSync('usuarios.json', 'utf-8')
  res.send(user)
})

router.use('/abracadabra/juego/:usuario', (req,res,next) => {
  const nombre = req.params.usuario;
  const user = JSON.parse(fs.readFileSync('usuarios.json', 'utf-8'))
  const usuario = user.usuarios.find((elemento) => {
    return elemento == nombre;
  }) 

  usuario == undefined
    ? res.sendFile(__dirname + '/assets/img/who.jpeg')
    : next()
})
router.get('/abracadabra/juego/:usuario', (req,res) => {
  const { usuario } = req.params;
  res.send(`Usuario ${usuario} existe`)
})

module.exports = router;