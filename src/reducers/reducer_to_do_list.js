import { INPUT_LIST, DELETE_LIST } from '../actions/actionTypes';

const INIT_STATE = [];

const deleteList = (state, payload) => {
  const updateList = state.reduce((a, c, index) => {
    if (payload[index]) {
      return a;
    }
    return a.concat(c);
  }, [])
  return updateList;
}

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case INPUT_LIST: {
      const textContent = [...state, payload];
      return textContent;
    }
    case DELETE_LIST: {
      return deleteList(state, payload);
    }
    default:
      return state;
  }
}
