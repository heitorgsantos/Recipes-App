import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header({ title }) {
  const [renderSB, setRenderSB] = useState(false);

  function handleClick() {
    setRenderSB(!renderSB);
  }

  return (
    <div>
      <header>
        <Link
          to="/perfil"
          type="submit"
          data-testid="profile-top-btn"
        >
          <img
            src={ profileIcon }
            alt="profile-icon"
          />
        </Link>
        <h1
          data-testid="page-title"
        >
          { title }
        </h1>
        <button
          type="submit"
          data-testid="search-top-btn"
          src={ searchIcon }
          onClick={ handleClick }
        >
          <img
            src={ searchIcon }
            alt="search-icon"
          />
        </button>
      </header>
      { renderSB ? <SearchBar page={ title } /> : null }
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;
