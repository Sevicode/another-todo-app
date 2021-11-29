import React, { ChangeEvent, useEffect, useState } from "react";
import { ITask, IImage } from "../Interfaces";

export const AddToDo = () => {
  // create inputs for task, priority, and due date
  const [task, setTask] = useState<string>("");
  const [startDate, setStartDate] = useState<any>("");
  const [dueDate, setDueDate] = useState<any>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [quote, setQuote] = useState<[]>([]);
  const [author, setAuthor] = useState<[]>([]);
  const [image, setImage] = useState("");

  //get the value of the input // save it to the state in an array
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else if (event.target.name === "startDate") {
      setStartDate(event.target.value);
    } else {
      setDueDate(event.target.value);
    }
  };

  //   add task to the todo list
  const addTask = (): void => {
    const newTask = { taskName: task, startDate: startDate, dueDate: dueDate };
    console.log(newTask);
    // add the new item to the list
    setTodoList([...todoList, newTask]);
    setTask("");
    setStartDate("");
    setDueDate("");
    console.log(todoList);
  };

  //   delete the item from the list
  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  // get quote API call
  const fetchAPI = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    console.log(data);
    setQuote(data.content);
    setAuthor(data.author);
  };
  // save quote to state

  useEffect(() => {
    fetchAPI();
  }, []);

    // get image API call
    const fetchImage = async () => {
        const response = await fetch("https://api.unsplash.com/photos/random");
        const imageData = await response.json();
        console.log(imageData);
        setImage(imageData.id);
    };
    // save image to state

    useEffect(() => {
        fetchImage();
    }, []);

  return (
    <div className="container">
      <div className="quote">
        <h1>Quote of the day</h1>
        <p className="quote-section">{quote}</p>
        <p className="author-section">{author}</p>
      </div>
      <div className="add-task">
        <h1>Add a Task</h1>
        <div className="input-section">
          <input
            type="text"
            name="task"
            placeholder="Task..."
            value={task}
            onChange={handleChange}
          />

          <input
            type="any"
            name="startDate"
            placeholder="Start Date..."
            value={startDate}
            onChange={handleChange}
          />

          <input
            type="any"
            name="dueDate"
            placeholder="Due Date..."
            value={dueDate}
            onChange={handleChange}
          />

          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div className="todo-list">
        {todoList.map((task: ITask, index: number) => {
          return (
            <div key={index} className="todo-list-result">
              <span>{task.taskName}</span>
              <span>{task.startDate}</span>
              <span>{task.dueDate}</span>
              <button
                onClick={() => {
                  deleteTask(task.taskName);
                }}
              >
                x
              </button>
            </div>
          );
        })}

        <div>
            <img></img>
        </div>
      </div>
    </div>
  );
};
