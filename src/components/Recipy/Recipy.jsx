import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { useParams } from 'react-router-dom'
import RecipyService from '../../results/service/RecipyService';
import IngredientAndMeasure from '../IngredientAndMeasure.jsx/IngredientAndMeasure';
'use client';
import { Accordion } from 'flowbite-react';

const recipyService = new RecipyService();

const Recipy = () => {
    const params = useParams();

    const { data } = useQuery({
        queryKey: ["recipy"],
        queryFn: () => recipyService.getRecipy(params.id),
    });
      
    const meal = data && data.meals[0];
    
    let ingredientsAndMeasures = [];

    if(meal){
        const mealArray = Object.entries(meal && meal);
    
        for(let i = 0; i < 20; i++) {
            if(mealArray[i + 9][1])
                ingredientsAndMeasures.push({"ingredient": mealArray[i + 9][1], "measure": mealArray[i + 29][1]});
        }
    }

    return (
    <section>
        <Link className='underline text-blue-600' to="/">Retour à la page d'accueil</Link>
        <h1 className='font-bold text-lg'>{meal && meal.strMeal}</h1>
        <h2 className='font-bold text-md'>{meal && meal.strCategory}</h2>
        <img className='mt-5' src={meal && meal.strMealThumb} alt={meal && meal.strMeal} />

        <Accordion collapseAll className='my-10'>
            <Accordion.Panel>
                <Accordion.Title>
                    Ingrédients et mesures
                </Accordion.Title>
                <Accordion.Content>
                    <div className='flex flex-row my-5'>
                        <table className='border-2'>
                            <tbody>
                                {ingredientsAndMeasures && ingredientsAndMeasures.map((ingredientsAndMeasures) => <IngredientAndMeasure ingredient={ingredientsAndMeasures.ingredient} measure={ingredientsAndMeasures.measure} key={ingredientsAndMeasures.ingredient}/>)}
                            </tbody>
                        </table>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
        <p>{meal && meal.strInstructions}</p>
    </section>
  )
}

export default Recipy