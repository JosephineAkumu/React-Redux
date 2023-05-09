
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
      <Auth>
        <Switch>
          <Route exact path="/" component={TaskList} />
          <Route exact path="/add-task" component={AddTaskForm} />
          <Route exact path="/edit-task/:id" component={EditTaskForm} />
        </Switch>
      </Auth>
    </div>
  );
}

export default App;