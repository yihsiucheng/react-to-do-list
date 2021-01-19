import { INPUT_TEXT_AREA } from './actionTypes';

export const setInputTextArea = (text) => {
  return {
    type: INPUT_TEXT_AREA,
    payload: text
  }
};
