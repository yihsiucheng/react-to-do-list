import React from 'react';

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

export default InputButton;
