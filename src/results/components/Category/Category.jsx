import React from 'react'
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    return (
      <li>
          <Link to={"/category/" + category.strCategory}>{category.strCategory}</Link>
      </li>
    );
  };
  
export default Category;