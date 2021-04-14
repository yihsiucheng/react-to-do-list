import { LIST_CHECK_BOX } from '../actions/actionTypes';

const INIT_STATE = [];

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_CHECK_BOX: {
      return payload;
    }
    default:
      return state;
  }
}
