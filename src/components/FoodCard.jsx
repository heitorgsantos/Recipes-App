import React, { useContext } from 'react';
import { Redirect, useHistory } from 'react-router';
import foodContext from '../context/FoodContext';

function FoodCard() {
  const { foodState, prevent } = useContext(foodContext);
  const history = useHistory();
  const MAX_NUMBER = 12;

  if (foodState.length === 1 && !prevent) {
    return (
      <Redirect to={ `comidas/${foodState[0].idMeal}` } />
    );
  }

  function handleClick(id) {
    history.push(`comidas/${id}`);
  }
  return (
    <div className="food-box">
      {foodState ? foodState.map(({ idMeal, strMealThumb, strMeal }, index) => (
        <button
          className="food-card"
          type="button"
          data-testid={ `${index}-recipe-card` }
          key={ idMeal }
          onClick={ () => handleClick(idMeal) }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ strMealThumb }
            alt={ strMeal }
          />
          <p data-testid={ `${index}-card-name` }>{strMeal}</p>
        </button>))
        .slice(0, MAX_NUMBER) : null }
    </div>
  );
}

export default FoodCard;
