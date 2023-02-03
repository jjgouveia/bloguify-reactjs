import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorPage({ e }) {
    <div>
      Erro
        { e }
    </div>

}

ErrorPage.propTypes = {
  e: PropTypes.shape({}),
}.isRequired;
