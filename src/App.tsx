import React, {FC} from 'react';
import './App.css';
import { AddToDo } from './components/AddToDo';

const App: FC = () => {
  
  return (
    <div className="App">
      <AddToDo />
    </div>
  );
}

export default App;
