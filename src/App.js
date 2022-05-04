
import { useEffect, useState } from 'react';
import './App.css';
import RecipeComponent from './RecipeComponent';
import video from './food.mp4';

function App() {

  const MY_ID = '29461229';
  const MY_KEY = '48af898a005646731061f5e2c95bb5b1';

  const [search, setSearch] = useState('');

  const [recipes, setRecipes] = useState([]);

  const [wordSubmit, setWordSubmit] = useState('tomato');

  useEffect(() =>{
    async function getRecipe(){
      const response = await fetch(`https://api.edamam.com/search?q=${wordSubmit}&app_id=${MY_ID }&app_key=${MY_KEY}`);;
      const data = await response.json();
      setRecipes(data.hits);
      
    }
    getRecipe()
  }, [wordSubmit])

  const inputSearch =(e) =>{
    setSearch(e.target.value)
    
}

const finalSearch =(e)=>{
  e.preventDefault();
  setWordSubmit(search)
  
}


return ( <div className='color boss' >
    <div className="App">
      <h1>search simply</h1>
      <h1>find quickly</h1>
      <h1>cook with pleasure</h1>
    </div>
    <div className="App">
      <form onSubmit={finalSearch}>
        <input  placeholder='Find a recipe...'
        onChange={inputSearch}
        value={search} />
        </form>
    </div>
   
    <div className="App">
        <button className='click'  onClick={finalSearch}><img src="https://img.icons8.com/officel/80/000000/meal.png" width={50} alt='xx'/></button>
      </div>

    {recipes.map((item, index)=>(
      <RecipeComponent key={index}
      label = {item.recipe.label}
      cuisineType = {item.recipe.cuisineType}
      calories = {item.recipe.calories}
      
      totalTime = {item.recipe.totalTime}
      ingredients = {item.recipe.ingredientLines}
      totalWeight = {item.recipe.totalWeight}
      image = {item.recipe.image}



       />
    ))}

<div className='App'>
  <h2 className='enjoy'>ENJOY YOUR MEAL!</h2>
</div>
<div className='App'>
<video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
</div>


    </div>
  );
}

export default App;
