import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { text: "Study React", completed: false },
    { text: "Complete Assignment", completed: false },
    { text: "Practice Coding", completed: false },
  ]);

  return (
    <div className="container">
      <Header />

      <ToDoList
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;