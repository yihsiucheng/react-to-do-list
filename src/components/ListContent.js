import { render } from 'node-sass';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ListContent = () => {
  // const toDoList = useSelector((state) => state.toDoList);
  
  // useEffect(() => {
    
  // }, [toDoList])
  
  const renderList = () => {
    return toDoList.map((content) => {
      return (
        <div></div>
      );
    })
  }
  
  return (
    <div className="list-content">
      {/* {renderList} */}
    </div>
  );
}

export default ListContent;


