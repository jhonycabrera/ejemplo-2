const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');

const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

//RUTAS
app.get('/', (req, res)=>{
    res.send('ruta raiz del backend');
});

const animalRoutes = require('./routes/animalesRoutes')

animalRoutes(app);

app.listen(PORT, 'localhost', function(){
    console.log('Aplicacion de NodeJS ' + PORT + ' Iniciada...')
});