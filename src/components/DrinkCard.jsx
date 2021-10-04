import React, { useContext } from 'react';
import { Redirect, useHistory } from 'react-router';
import foodContext from '../context/FoodContext';

function DrinkCard() {
  const { drinkState } = useContext(foodContext);
  const MAX_NUMBER = 12;
  const history = useHistory();

  if (drinkState.length === 1) {
    return (
      <Redirect to={ `bebidas/${drinkState[0].idDrink}` } />
    );
  }

  function handleClick(id) {
    history.push(`bebidas/${id}`);
  }

  return (
    <div className="drink-box">
      { drinkState ? drinkState.map(({ idDrink, strDrinkThumb, strDrink }, index) => (
        <button
          type="button"
          data-testid={ `${index}-recipe-card` }
          key={ idDrink }
          className="drink-card"
          onClick={ () => handleClick(idDrink) }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ strDrinkThumb }
            alt={ strDrink }
          />
          <h3 data-testid={ `${index}-card-name` }>{strDrink}</h3>
        </button>))
        .slice(0, MAX_NUMBER) : null }
    </div>
  );
}

export default DrinkCard;
