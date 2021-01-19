import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setInputTextArea } from 'actions';

const InputSection = () => {
  
  const dispatch = useDispatch();
  
  const getPlaceHolder = () => {
    return (`Type anything you want`);
  }
  
  const [placeholder, setPlaceholder] = useState(getPlaceHolder);
  
  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder(getPlaceHolder);
  };
  
  const handleChange = (text) => {
    console.log('text', text);
    dispatch(setInputTextArea(text));
  };
  
  console.log('dispatch', dispatch);
  
  return (
    <div className="input-area">
      <textarea 
      className="input-info" 
      type="text"
      spellCheck="false"
      placeholder={placeholder}
      onFocus={() => handleFocus()}
      onBlur={() => handleBlur()}
      onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default InputSection;