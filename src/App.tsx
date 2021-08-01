// Core
import React from "react";

// Components
import AddNewTaskFrom from "./components/AddNewTask/AddNewTaskForm/AddNewTaskFrom";
import TaskList from "./components/TaskList/TaskList";
import Filter from "./components/Filter/Filter";

const App: React.FC = () => {
  return (
    <div className="container pt-5" style={{width: 800}}>
      <AddNewTaskFrom/>
      <Filter/>
      <TaskList/>
    </div>
  );
}

export default App;
