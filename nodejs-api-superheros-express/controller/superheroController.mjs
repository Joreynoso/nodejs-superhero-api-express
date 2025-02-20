// Superheroes controller
import { obtenerSupehero30, obtenerSuperHeroPoderoso, obtenerSuperHeroAtributo, obtenerSuperHeroPorId } from '../services/superheroServices.mjs'
import { renderizarListaSupherHero, renderizarSupeHero } from '../views/responseView.mjs'

// Obtener superheroe por id
export function obtenerSuperHeroPorIdController(req, res) {
    const { id } = req.params;
    const superheroe = obtenerSuperHeroPorId(parseInt(id));

    if (superheroe) {
        res.send(renderizarSupeHero(superheroe));
    } else {
        res.status(404).send({ mensaje: 'Superheroe no encontrado' });
    }
};

// Obtener lista de superheroes según atributo y valor
export function obtenerSuperHeroAtributoController(req, res) {
    const { atributo, valor } = req.params;
    const superheroes = obtenerSuperHeroAtributo(atributo, valor);

    // Si hay algo en la lista
    if (superheroes.length > 0) {
        res.send(renderizarListaSupherHero(superheroes));
    } else {
        res.status(404).send({ mensaje: 'No superheroes con esos atributos' });
    }
};

// Obtener lista de superheroes con + de 30 años
export function obtenerSupehero30Controller(req, res) {
    const superheroes30 = obtenerSupehero30();
    res.send(renderizarListaSupherHero(superheroes30))
};

// Obtener superheroe más poderoso
export function obtenerSuperHeroPoderosoController(req, res) {
    const heroPoderoso = obtenerSuperHeroPoderoso();
    res.send(renderizarSupeHero(heroPoderoso));
};


