import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Profile({ history }) {
  const user = JSON.parse(localStorage.getItem('user'));

  const nullTest = () => {
    if (user === null) {
      return <p data-testid="profile-email">email</p>;
    }
    return <p data-testid="profile-email">{user.email}</p>;
  };

  return (
    <div>
      <Header title="Perfil" />
      <div>
        { nullTest() }
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => { history.push('/receitas-feitas'); } }
        >
          Receitas Feitas
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => { history.push('/receitas-favoritas'); } }
        >
          Receitas Favoritas
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => {
            history.push('/');
            localStorage.clear();
          } }
        >
          Sair
        </button>
      </div>
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
