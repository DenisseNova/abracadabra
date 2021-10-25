const PORT = 3030
const routes = require('./rutas');


app.use(routes);

app.listen(PORT, () =>{
  console.log(`api esta ejecutandose http://localhost:${PORT}`)
})