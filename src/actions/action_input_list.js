import { INPUT_LIST } from './actionTypes';

export const setInputList = (text) => {
  return {
    type: INPUT_LIST,
    payload: text
  }
};
