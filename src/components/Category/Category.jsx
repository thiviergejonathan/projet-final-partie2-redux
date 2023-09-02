import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { useParams } from 'react-router-dom'
import Recipy from '../../results/components/Category/Recipy';
import CategoryService from '../../results/service/CategoryService';

const categoryService = new CategoryService();

const Category = () => {
	const params = useParams();

  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: () => categoryService.getCategory(params.name),
  });

  return (
    <section>
        <Link to="/">Retour à la page d'accueil</Link>
        <h1>Recettes de la catégorie</h1>
        <ul>
            {data && data.meals.map((recipy) => <Recipy recipy={recipy} key={recipy.strMeal}/>)}
        </ul>
    </section>
  )
}

export default Category