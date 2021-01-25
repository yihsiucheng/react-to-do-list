import React from 'react';
import InputSection from './InputSection';
import ListContent from './ListContent';

const ToDoList = () => {
  return (
    <React.Fragment>
      <InputSection />
      <div className="separate-line" />
      <ListContent />
    </React.Fragment>
  );
}

export default ToDoList;
