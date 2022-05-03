

function RecipeComponent({label, cuisineType, calories, 
    totalTime, ingredients, totalWeight, image}){

    return( 
        <div >
<div className="App">
    <h2>{label} </h2>
    <h4>cuisine type: {cuisineType} </h4>
</div>

<div className="container">
<div className="end">
<img src={image} alt='cc' />
</div>
<div className="start">
    <p><span>calories: </span> {calories.toFixed()} </p>
    <p><span>total time: </span> {totalTime} </p>
    <p><span>total weight: </span>{totalWeight.toFixed(2)} </p>
    <p><span>ingredients: </span></p>

    <ul>
    {ingredients.map((ingredient, index) =>
    <li key={index}>{ingredient}</li>
    )}
   
    </ul>
</div>
</div>


</div>

    )
}
export default RecipeComponent;