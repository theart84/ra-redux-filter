// Core
import React from 'react';
import {useSelector} from "react-redux";

// Interfaces
import {ITask} from "../../bus/tasks/interface";

// Types
import {RootState} from "../../store";

// Components
import EmptyTasks from "./EmptyTasks/EmptyTasks";
import TaskListItem from "./TaskListItem/TaskListItem";
import useFilter from "../../hooks/useFilter";
import EmptyFilteredTasks from "./EmptyFilteredTasks/EmptyFilteredTasks";

const TaskList: React.FC = () => {
  const {tasks} = useSelector((store: RootState) => store.tasks);
  const filteredTasks = useFilter(tasks);

  if (!tasks.length) {
    return <EmptyTasks/>
  }
  if (!filteredTasks.length) {
    return <EmptyFilteredTasks/>
  }

  const taskList = filteredTasks.map((task: ITask) => (
    <TaskListItem
      key={task.id}
      id={task.id}
      text={task.text}
      price={task.price}
    />
  ));

  return (
    <>
      {taskList}
    </>
  );
}

export default TaskList;
