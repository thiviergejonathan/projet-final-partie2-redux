import React from 'react'

const IngredientAndMeasure = ({ingredient, measure}) => {

  return (
  <tr>
    <td className='border-2'>{ingredient}</td>
    <td className='border-2'>{measure}</td>
  </tr>
)
}

export default IngredientAndMeasure