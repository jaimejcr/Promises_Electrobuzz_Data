const retCountriesAPI = "https://restcountries.com/v3.1/all";
async function apiData (){
    const res = await fetch(retCountriesAPI);
    const data = await res.json();
    console.log(data);
    console.log(data[0].name);
}
apiData();