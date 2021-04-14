import React from 'react';
import PropTypes from 'prop-types';

const InputTextArea = (props) => {

  const { className, type, spellCheck, placeholder, getText } = props;
  
  return (
    <textarea 
      className={className}
      type={type}
      spellCheck={spellCheck}
      placeholder={placeholder}
      onChange={(e) => getText(e.target.value)}
    />
  );
  
}

InputTextArea.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  spellCheck: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  getText: PropTypes.func.isRequired,
}

export default InputTextArea;
