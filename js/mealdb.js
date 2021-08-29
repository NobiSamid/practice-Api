document.getElementById('error-message').style.display = 'none';

const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText)
    // Clear Data
    searchField.value = '';

    //if searched with empty string
    if(searchText == ''){
        console.log('kichu na likhle tow hobe na')
    }
    // load Data
    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
        .catch(error => displayError(error) );
    }
}
const displayError = error =>{
    document.getElementById('error-message').style.display = 'block';
}


const displaySearchResult = (meals) => {
    console.log(meals)
    const searchResult = document.getElementById('search-result');

    //Clear prev searched results
    // searchResult.innerHTML = '';
    searchResult.textContent = '';

    //if search result doesnt match
    if(meals.length == 0){
        console.log('eTa hobe na amader kache')
    }
    else{
        meals.forEach(meal => {
            console.log(meal)
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="loadMealDetails(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" width="20%" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
            `
            searchResult.appendChild(div);
        })
    }
    
}

const loadMealDetails = mealId =>{
    console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
    console.log(meal)
    const mealDetails = document.getElementById('meal-details')
    const div = document.createElement('div')
    div.classList.add('card');
    div.innerHTML = `
    <div class="card-header">
    Details
  </div>
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">Category: ${meal.strCategory}</p>
    <p class="card-text">Category: ${meal.strArea}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Yt video</a>
  </div>
    `
    mealDetails.appendChild(div);
}