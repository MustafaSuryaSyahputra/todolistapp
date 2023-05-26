import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, updateTodo } from '../store/actions';

const TodoList = ({ todos, toggleTodo, deleteTodo, updateTodo }) => {
  const handleToggle = (id) => {
    toggleTodo(id);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleUpdate = (id, text) => {
    const newTodoText = prompt('Enter new todo text:', text);
    if (newTodoText) {
      updateTodo(id, newTodoText);
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggle(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <button onClick={() => handleUpdate(todo.id, todo.text)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: filterTodos(state.todos, state.filter),
});

const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter((todo) => !todo.completed);
    case 'completed':
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};

const mapDispatchToProps = {
  toggleTodo,
  deleteTodo,
  updateTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
