import { DELETE_LIST } from './actionTypes';

export const deleteList = (listCheckBox) => {
  return {
    type: DELETE_LIST,
    payload: listCheckBox
  }
}