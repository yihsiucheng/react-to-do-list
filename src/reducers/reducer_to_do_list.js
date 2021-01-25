import { INPUT_LIST } from '../actions/actionTypes';

const INIT_STATE = [];

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case INPUT_LIST: {
      const textContent = [...state, payload];
      return textContent;
    }
    default:
      return state;
  }
} 
