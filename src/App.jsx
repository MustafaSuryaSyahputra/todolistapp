import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import FilterTodo from './components/FilterTodo';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <FilterTodo />
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
