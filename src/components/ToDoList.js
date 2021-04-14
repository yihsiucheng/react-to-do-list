import React from 'react';
import InputSection from './InputSection';
import ListContent from './ListContent';
import ToolBar from './ToolBar';

const ToDoList = () => {
  return (
    <React.Fragment>
      <InputSection />
      <ToolBar />
      <ListContent />
    </React.Fragment>
  );
}

export default ToDoList;
