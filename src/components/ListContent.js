import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import { setCheckBoxStatus } from '../actions';

const ListContent = () => {

  const dispatch = useDispatch();
  
  const toDoList = useSelector((state) => state.toDoList);

  const listCheckBox = useSelector((state) => state.listCheckBox);

  const checkBoxStatus = Array(toDoList.length).fill(false);

  const [boxStatus, setBoxStatus] = useState([]);
  
  const updateCheckBoxStatus = (index) => {
    const newBoxStatus = boxStatus.slice();
    newBoxStatus[index] = !boxStatus[index];
    setBoxStatus(newBoxStatus);
    dispatch(setCheckBoxStatus(newBoxStatus))
  }

  useEffect(() => {
    setBoxStatus(checkBoxStatus);
    dispatch(setCheckBoxStatus(checkBoxStatus))
  }, [toDoList]);

  useEffect(() => {
    setBoxStatus(listCheckBox);
  }, [listCheckBox])

  const renderList = () => {
    return toDoList.map((content, index) => {
      const checkBoxClassName = cx('check-box', {
        checked: boxStatus[index],
      });
      return (
        <li key={`list_${index}`} className="list">
          <div className={checkBoxClassName} onClick={() => updateCheckBoxStatus(index)} />
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
