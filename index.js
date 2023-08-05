
const electabuzzID = 125;
const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${electabuzzID}/`;
const body = document.querySelector("body");
const parentDiv = document.querySelector(".ejercicio1");

async function electabuzzData (){
    const res = await fetch(pokemonUrl);
    const data = await res.json();

    const name = data.name;
    const id = data.id;
    const baseExperience = data.base_experience;
    const height = data.height;
    const weight = data.weight;
    // Vamos renderizando los datos obtenidos en divPadre
    function renderiza (){
        const divPokemonData = document.createElement("div");
        divPokemonData.classList.add('pokemonData');
        divPokemonData.innerHTML = `
        <h3 class="pokemonName">  ${name} </h3>
        <p class="id"> ID: ${id} </p>
        <p class="base"> B. Experience: ${baseExperience}</p>
        <p> Height: ${height} </p>
        <p> Weight: ${weight} </p>
        `;
        parentDiv.appendChild(divPokemonData);
        console.log(parentDiv);
    };
    renderiza();

    // EN EL CÓDIGO ACONTINUACIÓN ESTOY CREANDO EL DIV QUE OCUPARA LA LISTA ORDENADA DE JUEGOS

        const gameList = document.createElement("div");
        gameList.classList.add ("listGames");
        gameList.innerHTML= `
        <h2 class="listTitle">LISTA DE JUEGOS</h2>
        <ol class="listGames"></ol>`
        parentDiv.appendChild(gameList);

        const olListGames = document.querySelector(".listGames");

    data.game_indices.forEach(element => {
        const gamesAppearName = element.version.name;
        const liGame = document.createElement ('li') ;
        liGame.innerText=`${gamesAppearName}`;
        olListGames.appendChild(liGame);
        
    });
    
    const type = data.types[0].type.name;
    const typeSpace = document.createElement("h3");
    typeSpace.classList.add ("type");
    typeSpace.textContent ="Tipo: " + `${type}`
    parentDiv.appendChild(typeSpace);
    
// EN EL SIGUIENTE APARTADO CREAMOS UN DIV EN EL QUE INSERTAR LA LISTA DE MOVIMIENTOS DEL POKEMON

    const divMoves = document.createElement("div");
    divMoves.classList.add("moves");
    divMoves.innerHTML= `
        <h2 class="movesList">LISTA DE MOVIMIENTOS</h2>
        <ul class="listMoves"></ul>`
        parentDiv.appendChild(divMoves);

        const ulListMoves = document.querySelector(".listMoves");

    data.moves.forEach((element)=>{
        const moves = element.move.name;
        const liMove = document.createElement("li")
        liMove.classList.add("move");
        liMove.innerText=`${moves}`;
        ulListMoves.appendChild (liMove);
        
    });

    //RENDERIZAMOS ITEM y LOCATION AREA EN EL MISMO DIV

    const item = data.held_items[0].item.name;
    const itemSpace = document.createElement("h3");
    itemSpace.classList.add("item")
    itemSpace.textContent = "Item: " + `${item}`
    
    
    const itemLocationDiv = document.createElement("div");
    itemLocationDiv.id ="itemLocation";
    parentDiv.appendChild(itemLocationDiv);
    itemLocationDiv.appendChild(itemSpace)

    
    const locationAreaUrl = data.location_area_encounters;

        async function areaLocation (){
            const res = await fetch(locationAreaUrl);
            const data = await res.json();

            data.forEach ((element)=>{
                const locationArea = element.location_area.name;
                const locationAreas = document.createElement("p");
                locationAreas.classList.add('lA');
                locationAreas.textContent= `Location Area: ${locationArea}`;
                itemLocationDiv.append(locationAreas)

                
            });
        };
        areaLocation();
    //EN EL SIGUIENTE APARTADO LOCALIZAMOS LAS IMAGNES EN LA API Y LAS RENDERIZAMOS
    function printImgs (){
        
        const backDefault = data.sprites.back_default;
        const backShiny = data.sprites.back_shiny;
        const frontDefault = data.sprites.front_default;
        const frontShiny = data.sprites.front_shiny;

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("imgsDefault");
        imgDiv.innerHTML = `
        <img class="backD" src="${backDefault}">
        <img class="backS" src="${backShiny}">
        <img class="frontD" src="${frontDefault}">
        <img class="frontS" src="${frontShiny}">
        `;

        parentDiv.appendChild(imgDiv);
        console.log(backDefault);


        
    };
    printImgs()
    
    console.log(data.sprites);
    
    
    

    
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