import { LIST_CHECK_BOX } from './actionTypes';

export const setCheckBoxStatus = (checkBoxStatus = []) => {

  return {
    type: LIST_CHECK_BOX,
    payload: checkBoxStatus
  }
};