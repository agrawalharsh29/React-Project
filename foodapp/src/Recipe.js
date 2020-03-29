import React from 'react';
const Recipe = ({title,image,ingredients}) => {
	return(
		<div className="recipe">
		<h1>{title}</h1>
		<ul>
		{
			ingredients.map(ingredient =>(
			<li>{ingredient.text}</li>
			))
		}
		</ul>
		<img className="image" src={image} alt=""/>
		</div>
		);
}
export default Recipe;