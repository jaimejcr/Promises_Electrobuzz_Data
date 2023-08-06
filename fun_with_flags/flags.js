const retCountriesAPI = "https://restcountries.com/v3.1/all";
const divFlags = document.querySelector(".flagsSection");

async function apiData (){
    const res = await fetch(retCountriesAPI);
    const data = await res.json();
    console.log(data);

    let countriesHTML = "";
    data.forEach((element, index)=>{
        // console.log(element.flags.png);
        const flag = element.flags.png;
        const name = element.name.common;
        const population = element.population;
        const region = element.region;
        const capital = element.capital;
        

        countriesHTML += `
        <div class="countryCard">
            <img class="flagImg" src="${flag}">
            <h5 class="flagName"> ${name}</h5>
            <p>${population}</p>
            <p>${region}</p>
            <p>${capital}</p>
            

        </div>
        `;
        const btn = document.createElement("button")
        btn.classList.add('btn');
        btn.innerText= 'More';
        const cardDiv = document.querySelectorAll("countryCard");
       
        

        
    });
   
    divFlags.innerHTML = countriesHTML;

    
}
apiData();

