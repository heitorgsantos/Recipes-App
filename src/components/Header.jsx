import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header({ title }) {
  const history = useHistory();
  const [renderSB, setRenderSB] = useState(false);

  function handleClick() {
    setRenderSB(!renderSB);
  }

  function showButton() {
    const { location: { pathname } } = history;
    if (pathname === '/comidas' || pathname === '/bebidas'
      || pathname === '/explorar/comidas/area') {
      return (
        <div>
          <button
            data-testid="search-top-btn"
            type="button"
            src={ searchIcon }
            onClick={ handleClick }
          >
            <img src={ searchIcon } alt="Mostrar pesquisa" />
          </button>
        </div>
      );
    }
  }

  return (
    <div>
      <header>
        <button
          type="submit"
          data-testid="profile-top-btn"
          src={ profileIcon }
          onClick={ () => { history.push('/perfil'); } }
        >
          <img
            src={ profileIcon }
            alt="profile-icon"
          />
        </button>
        <h1
          data-testid="page-title"
        >
          { title }
        </h1>
        { showButton() }
      </header>
      { renderSB ? <SearchBar page={ title } /> : null }
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;
