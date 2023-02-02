import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorPage({ e }) {
    <div>
        { e }
    </div>

}

ErrorPage.propTypes = {
  e: PropTypes.shape({}),
}.isRequired;
