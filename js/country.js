const loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    console.log(countries);
    // for(const country of countries){
    //     console.log(country.name)
    // } 
    countries.forEach(country => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>Country name: ${country.name}</h3>
        <p> Capital: ${country.capital}<br>
        <button onclick = "loadCountryByName('${country.name}')">Details</button>
        `
        div.classList.add('country')
        const countryDiv = document.getElementById('countries');
        countryDiv.appendChild(div);
    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data[0]))
}

const displayDetails = (countryDetails) => {
    console.log(countryDetails)
    const section = document.getElementById('country-detail');
    section.innerHTML = `
    <h1>Country Details</h1>
    <h3>${countryDetails.nativeName}</h3>
    <h2>${countryDetails.population}</h2>
    <img width="200px" src="${countryDetails.flag}">
    `
}