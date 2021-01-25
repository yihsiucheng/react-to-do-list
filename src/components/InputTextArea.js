import React from 'react';

const InputTextArea = (props) => {

  const { className, type, spellCheck, value, placeholder, getText } = props;
  
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

export default InputTextArea;
