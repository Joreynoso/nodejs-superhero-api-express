// Servidor superhero
import express from 'express';
import { obtenerSupehero30Controller, obtenerSuperHeroAtributoController, obtenerSuperHeroPorIdController, obtenerSuperHeroPoderosoController } from './controller/superheroController.mjs'

// Instanciar servidor express
const app = express();
const port = 3000;

// ----------- Rutas ----------- //
app.get('/superheroes/id/:id', obtenerSuperHeroPorIdController);
app.get('/superheroes/atributo/:atributo/:valor', obtenerSuperHeroAtributoController);
app.get('/superheroes/edad/mayor30', obtenerSupehero30Controller);
app.get('/superheroes/poder/masPoderoso', obtenerSuperHeroPoderosoController);

app.listen(port, () => {
    console.log(`servidor escuchando en: http://localhost:${port}`);
});