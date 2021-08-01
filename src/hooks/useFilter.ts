// Core
import {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

// Types
import {RootState} from "../store";

//Interfaces
import {ITask} from "../bus/tasks/interface";

const useFilter = (tasks: ITask[]): ITask[] => {
  const [filteredTask, setFilteredTask] = useState(tasks);
  const fieldSearch = useSelector((store: RootState) => store.form.filter);

  useEffect(() => {
    if (fieldSearch === '') {
      setFilteredTask([...tasks])
      return
    }

    const filteredArray = tasks.filter((task: ITask) => {
      const lowerCaseString = task.text.toLowerCase();
      return lowerCaseString.includes(fieldSearch)
    })
    if (!filteredArray.length) {
      setFilteredTask([...tasks]);
      return;
    }
    setFilteredTask([...filteredArray])
  }, [tasks, fieldSearch])
  return filteredTask;
}

export default useFilter;
