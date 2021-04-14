import { combineReducers } from 'redux';
import ToDoList from './reducer_to_do_list';
import ListCheckBox from './reducer_list_check_box';

const rootReducer = combineReducers({
  toDoList: ToDoList,
  listCheckBox: ListCheckBox,
});

export default rootReducer;
