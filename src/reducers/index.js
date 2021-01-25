import { combineReducers } from 'redux';
import ToDoList from './reducer_to_do_list';

const rootReducer = combineReducers({
  toDoList: ToDoList,
});

export default rootReducer;