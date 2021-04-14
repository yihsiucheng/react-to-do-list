import React from 'react';
import PropTypes from 'prop-types';

const InputButton = ({ className, btnText, handleFunction }) => {

  return (
    <div 
    className={className} 
    onClick={handleFunction}
    >
      {btnText}  
    </div>
  );
}

InputButton.propTypes = {
  className: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  handleFunction: PropTypes.func.isRequired,
}

export default InputButton;
