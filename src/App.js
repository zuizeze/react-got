import React from 'react';
import './App.css';
import { TodoList } from './components';
 import { Button } from 'antd'
 import { getUser} from './api'
function App() {
  return (
    <>
      <TodoList  />
		<Button type="primary">primary</Button>
    </>
  );
}

export default App;
