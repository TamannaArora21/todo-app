import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        {
          text: newTask,
          completed: false,
        },
      ]);

      setNewTask("");
    }
  };

  const deleteTask = (indexToDelete) => {
    setTasks(
      tasks.filter(
        (_, index) =>
          index !== indexToDelete
      )
    );
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  const editTask = (
    indexToEdit,
    updatedText
  ) => {
    const updatedTasks = [...tasks];

    updatedTasks[indexToEdit].text =
      updatedText;

    setTasks(updatedTasks);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) =>
          setNewTask(e.target.value)
        }
      />

      <button onClick={addTask}>
        Add Task
      </button>

      <ul>
        {tasks.map((task, index) => (
          <ToDoItem
            key={index}
            task={task}
            onDelete={() =>
              deleteTask(index)
            }
            onComplete={() =>
              toggleComplete(index)
            }
            onEdit={(updatedText) =>
              editTask(
                index,
                updatedText
              )
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;