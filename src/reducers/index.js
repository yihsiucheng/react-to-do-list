import { combineReducers } from 'redux';
import InputTextArea from './reducer_input_text_area';

const rootReducer = combineReducers({
  inputTextArea: InputTextArea,
});

export default rootReducer;