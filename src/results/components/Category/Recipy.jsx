import React from 'react'
import { Link } from 'react-router-dom';

const Recipy = ({ recipy }) => {
  return (
    <li>
        <Link to={"/recipy/" + recipy.strMeal}>{recipy.strMeal}</Link>
    </li>
  )
}

export default Recipy