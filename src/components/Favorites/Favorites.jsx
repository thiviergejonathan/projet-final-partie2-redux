import React from 'react'
import { useSelector } from "react-redux";
import { favoritesSelector } from '../../favorites/store/favoriteSelectors';
import FavoriteButton from '../../favorites/components/FavortieButton/FavoriteButton';
import { Link } from 'react-router-dom';
import Recipy from '../../results/components/Category/Recipy';
const Favorites = () => {
    
    const favorites = useSelector(favoritesSelector);
    console.log("favorites");
    console.log(favorites);
    return (
        <>
            <Link className='underline text-blue-600' to="/">Retour à la page d'accueil</Link><br/>

            <div>
            <h1>Mes recettes favories</h1>
            {favorites && favorites.map((recipy) => (
                <div key={recipy.idMeal} className='flex'>
                    <FavoriteButton recipy={recipy} /> 
                    <Recipy recipy={recipy} key={recipy.strMeal}/>
                </div>
            ))}
            </div>
        </>

    )
}

export default Favorites