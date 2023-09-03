import React from 'react'
import { Link } from 'react-router-dom';

const Recipy = ({ recipy }) => {
  return (
    <li>
      <div className='mb-5 border-4'>
        <Link className='flex items-center' to={"/recipy/" + recipy.strMeal}>
          <img className="w-24" src={recipy.strMealThumb} alt={recipy.strMeal} />
          <span className='ml-3 underline text-blue-600'>{recipy.strMeal}</span>
        </Link>
      </div>
    </li>
  )
}

export default Recipy