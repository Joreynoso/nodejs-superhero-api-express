import superHeroesRepository from '../repository/superHeroesRepository.mjs';

// Instanciar clase SuperHeroRepository
const repository = new superHeroesRepository();

// Buscar y retornar un superheroe dado un id en particular
export function obtenerSuperHeroPorId(id) {
    const superheroes = repository.obtenerTodos();
    return superheroes.find(hero => hero.id === id);
};

// Buscar y retornar una lista de superheroes por atributo y valor
export function obtenerSuperHeroAtributo(atributo, valor) {

    const superheroes = repository.obtenerTodos();
    const resultado = superheroes.filter(hero => {

        // --> forma dinámica de acceder a una propiedad de un objeto en JS
        const atributoHeroe = String(hero[atributo]).toLowerCase();
        return atributoHeroe.includes(valor.toLowerCase()); // --> buscamos el valor dentro del atributo ejem: nombreSuperhero --> Batman
    });

    return resultado;
};

// Obtener superheroes mayores de 30, planeta tierra y con > 2 poderes
export function obtenerSupehero30() {
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(hero => hero.edad > 30 && hero.planetaOrigen === "Tierra" && hero.poder.length >= 2);
};

// Obtener al superheroe más poderoso (mayor cantidad de poderes)
export function obtenerSuperHeroPoderoso() {

    const superheroes = repository.obtenerTodos();

    const masPoderoso = superheroes.reduce((maxHero, currentHero) => {

        return currentHero.poder.length > maxHero.poder.length ? currentHero : maxHero;

    });

    return masPoderoso;
};

// ------------ Probando el código ------------ //
// console.log('Obtener superheroe por id:', obtenerSuperHeroPorId(2));
// console.log('Obtener superheroe por atributo y valor:', obtenerSuperHeroAtributo('planetaOrigen', 'Tierra'));
// console.log('Obtener superheroes > a 30 años:', obtenerSupehero30());
// console.log('Obtener más poderoso', obtenerSuperHeroPoderosos());



