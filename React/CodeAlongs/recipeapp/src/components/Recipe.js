
const Recipe = (props) => {
    const {title, img, instructions} = props;
    const ingredients = props.ingredients.map((ing, index) => ( //find all ingredients in the array and display in an unordered list
        <li key={index}>{ing}</li> //React requires each list item to have a unique key. Achieve this automatically by assigning the key as the items index position in the array
    ));
    return (
        <div className="recipe-card">
        <div className="recipe-card-image">
         <img src={img} alt={title} />
       </div>
       <div className="recipe-card-content"> 
       <h3 className="recipe-title">{title}</h3>
       <h4>Ingredients:</h4>  
       <ul>
           {ingredients}
       </ul>
       <h4>Instructions:</h4>
       <p>{instructions}</p>
     </div> 
   </div>  
    );
}

export default Recipe;