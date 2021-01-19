import { INPUT_TEXT_AREA } from '../actions/actionTypes';

const INIT_STATE = '';

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case INPUT_TEXT_AREA:
      return payload;
    default:
      return state;
  }
}
