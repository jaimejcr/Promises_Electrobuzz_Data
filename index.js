
const electabuzzID = 125;
const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${electabuzzID}/`;
const body = document.querySelector("body");


async function electabuzzData (){
    const res = await fetch(pokemonUrl);
    const data = await res.json();
    const name = data.name;
    const id = data.id;
    const baseExperience = data.base_experience;
    const height = data.height;
    const weight = data.weight;
    data.game_indices.forEach(element => {
        
        const gamesAppearName = element.version.name;
        const gamesAppearVersion = element.version.url;

        // Utilizamos PROMISE ALL
        const multiplePromises = async() => {
            const promises = gamesAppearVersion.map(async (url)=> {
                const res = await fetch(url);
                const data = await res.json();
                
                return data
            })
             console.log(promises);
             const results = await Promise.all(promises);
             console.log(results);
             return results
        }
        
        
          
        
        // console.log(gamesAppearVersion);
    });
    data.game_indices.map(element => {
        const games = element.version.name
        // console.log(data);
        return games
    });
    

    
}
electabuzzData()




// Nombre
// Id
// Experiencia base
// Altura
// Peso
// Lista de los juegos en los que ha aparecido
// Tipo ( fire, water ...)
// Lista de sus movimientos ( NO 'abilities')
// Item que usa
// Lista de las áreas de localización
// Galeria de TODAS sus imagenes, exceptuando las imagenes dentro del objeto versions en sprites
// Una Card de Stats que va a tener las siguientes características:
// HP
// Ataque
// Defensa
// Ataque especial
// Defensa especial
// Velocidad