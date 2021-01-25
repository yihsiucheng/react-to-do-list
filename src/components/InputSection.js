import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputTextArea from './InputTextArea';
import InputButton from './InputButton';
import { setInputList } from '../actions';

const InputSection = () => {
  
  const dispatch = useDispatch();
  
  const defaultPlaceholder = 'Type anything you want';
  
  const [inputText, setInputText] = useState('');
  
  const getText = (text) => {
    setInputText(text);
  }

  const handleClearText = () => {
    document.getElementsByClassName("input-info")[0].value = '';
    setInputText('');
  }
  
  const handleSubmitText = () => {
    dispatch(setInputList(inputText));
    handleClearText();
  }
  
  return (
    <div className="input-area">
      <InputTextArea 
        className="input-info" 
        type="text"
        spellCheck="false"
        placeholder={defaultPlaceholder}
        getText={(text) => getText(text)}
      />
      <div className="button-bar">
        <InputButton 
          className='clear-button'
          btnText='清除'
          handleFunction={handleClearText}
        />
        <InputButton 
          className='submit-button'
          btnText='確認'
          handleFunction={handleSubmitText}
        />
      </div>
    </div>
  );
}

export default InputSection;