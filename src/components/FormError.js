import React from 'react';

const FormError = ({formError}) => {
  return (
    <p className="error-text"><small>{formError}</small></p>
  )
};

export default FormError;