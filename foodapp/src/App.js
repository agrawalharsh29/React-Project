import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import Recipe from './Recipe';
import './App.css';

const App = () =>
{
  const APP_ID = "4c25807c";
  const APP_KEY = "47aab7a48416787e540703e446eee72c ";
  // const exampleReq = "https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}";
  const [recipes,setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

useEffect(() => {
getRecipes();
},[query]);

const getRecipes = async () => {
  const response = await fetch('https://api.edamam.com/search?q='+query+'&app_id=4c25807c&app_key=47aab7a48416787e540703e446eee72c');
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data);
};

const updateSearch = e => {
  setSearch(e.target.value)
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
}

return(
  <div className="App">
  <form onSubmit={getSearch}className="search-form">
  <input className="search-bar" type="text" value={search} onChange={updateSearch} />
  <button className="search-button" type="submit">
  search
  </button>
  </form>
  <div className="recipes">
   {recipes.map(recipe =>(
    <Recipe
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
    />
    ))};
  </div>
  </div>
);
};

export default App;