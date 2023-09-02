import React from 'react'

const IngredientAndMeasure = ({ingredient, measure}) => {
  return (
  <tr>
    <td>{ingredient}</td>
    <td>{measure}</td>
  </tr>
)
}

export default IngredientAndMeasure