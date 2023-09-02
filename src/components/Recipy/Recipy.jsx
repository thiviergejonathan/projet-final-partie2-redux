import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { useParams } from 'react-router-dom'
import RecipyService from '../../results/service/RecipyService';
import IngredientAndMeasureToArray from './IngredientAndMeasureToArray';
import IngredientAndMeasure from './IngredientAndMeasure';
import Ingredient from './Ingredient';
import Measure from './Measure';

const recipyService = new RecipyService();

const Recipy = () => {
    const params = useParams();

    const { data } = useQuery({
        queryKey: ["recipy"],
        queryFn: () => recipyService.getRecipy(params.name),
      });
      
    const meal = data && data.meals[0];
    let ingredientsAndMeasures = [[],[]];
    if (meal) {
        ingredientsAndMeasures = IngredientAndMeasureToArray.convert(meal);
    }

    return (
    <section>
        <Link to="/">Retour à la page d'accueil</Link>
        <h1>Recettes de la catégorie</h1>
        <h2>{meal && meal.strMeal}</h2>
        <h3>{meal && meal.strCategory}</h3>
        <img src={meal && meal.strMealThumb} alt="" />
        <div className='flex flex-row bg-black'>
            <div>
                {ingredientsAndMeasures && ingredientsAndMeasures[0].map((ingredient) => <Ingredient ingredient={ingredient} key={ingredient}/>)}
            </div>
            <div>
                {ingredientsAndMeasures && ingredientsAndMeasures[1].map((measure) => <Measure measure={measure} key={measure}/>)}
            </div>
        </div>
        <p>{meal && meal.strInstructions}</p>
    </section>
  )
}

export default Recipy