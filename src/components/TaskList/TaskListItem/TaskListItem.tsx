// Core
import React from "react";
import {useDispatch} from "react-redux";

// Interfaces
import {ITask} from "../../../bus/tasks/interface";

// Actions
import {changeTextValue, changePriceValue, clearForm} from "../../../bus/form/reducer";
import {addCurrentTaskId, clearCurrentTaskId, deleteTask} from "../../../bus/tasks/reducer";

// Styles
import styles from './TaskListItem.module.css';

const TaskListItem: React.FC<ITask> = ({id, text, price}) => {
  const dispatch = useDispatch();

  const onEditHandler = () => {
    dispatch(changeTextValue({value: text}))
    dispatch(changePriceValue({value: price.toString()}))
    dispatch(addCurrentTaskId({id}))
  }

  const onDeleteHandler = () => {
    dispatch(deleteTask({id}));
    dispatch(clearCurrentTaskId());
    dispatch(clearForm());
  }

  return (
    <div className="card mb-3" data-id={id}>
      <div className="card-body d-flex justify-content-between">
        <div className={styles.text}>{text}</div>
        <div className={styles.price}>{price}</div>
        <div className={styles.control}>
          <span className={styles.edit} onClick={onEditHandler}/>
          <span className={styles.delete} onClick={onDeleteHandler}/>
        </div>
      </div>
    </div>
  );
}

export default TaskListItem;
