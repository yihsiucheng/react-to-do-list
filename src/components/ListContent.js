import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ListContent = () => {
  
  const toDoList = useSelector((state) => state.toDoList);
  
  const checkBoxStatus = Array(toDoList.length).fill(false);
  
  const updateCheckBoxStatus = (index) => {
    checkBoxStatus[index] = !checkBoxStatus[index];
  }
  
  console.log('checkBoxStatus', checkBoxStatus);

  const renderList = () => {
    return toDoList.map((content, index) => {
      return (
        <li key={`list_${index}`} className="list">
          <div className="check-box" onClick={(index) => updateCheckBoxStatus(index)}></div>
          <div className="list-item">{content}</div>
        </li>
      );
    })
  }
  
  return (
    <ul className="list-content">
      {renderList()}
    </ul>
  );
}

export default ListContent;

