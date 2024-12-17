

function MyRecipesComponents ({label, image,ingredients,calories}) {

  

    return(
<div>

   
        <div className="container">
        <h2>{label}</h2>
        </div>
        <div className="container">
            <img src ={image} width="300px" alt ="pic"/>
            </div>

            <div className="container cal">
                        <p>{calories.toFixed()} calories</p>
                        </div>
        
            <ul className="container list" >
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <img className="icon" src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png " alt= "pic"/> 
                     
                        {ingredient}</li>
                ))}
                </ul>
       
        {/* <div className="container">
            <p>{calories.toFixed()} calories</p>
            </div> */}
      </div>
    
    


   
    )
}
export default MyRecipesComponents;