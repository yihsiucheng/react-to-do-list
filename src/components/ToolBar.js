import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import { setCheckBoxStatus, deleteList } from '../actions'
import InputButton from './InputButton';

const ToolBar = () => {

  const dispatch = useDispatch();

  const toDoList = useSelector((state) => state.toDoList);

  const listCheckBox = useSelector((state) => state.listCheckBox);

  const [ckeckBoxAll, setCheckBoxAll] = useState(false);

  useEffect(() => {
    if (listCheckBox.every((bool) => bool === false)) {
      setCheckBoxAll(false);
    }
  }, [listCheckBox]);

  const selectAll = () => {
    if (toDoList.length > 0) {
      const ckeckBoxAllStatus = !ckeckBoxAll;
      let updateBoxStatus = [];
      if (ckeckBoxAllStatus) {
        updateBoxStatus = Array(toDoList.length).fill(true);
      } else {
        updateBoxStatus = Array(toDoList.length).fill(false);
      }
      dispatch(setCheckBoxStatus(updateBoxStatus));
      setCheckBoxAll(!ckeckBoxAll);
    }
  }

  const handleDeleteList = () => {
    dispatch(deleteList(listCheckBox));
  }

  const chackBoxClassName = cx('check-box', {
    checked: ckeckBoxAll,
  });

  return (
    <div className="tool-bar">
      <div className="select-all" onClick={selectAll}>
        <div className={chackBoxClassName} />
        <div className="all">全選</div>
      </div>
      <InputButton
        className='button delete-button'
        btnText='刪除'
        handleFunction={handleDeleteList}
      />
    </div>
  );
}

export default ToolBar;
