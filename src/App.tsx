import React, {FC} from 'react';
import './App.css';
import { AddToDo } from './components/AddToDo';
import { ITask, IImage } from "./Interfaces";
const App: FC = () => {
  
  return (
    <div className="App">
      <AddToDo />
    </div>
  );
}

export default App;
