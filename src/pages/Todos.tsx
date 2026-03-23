// src/pages/Todos.tsx
import React from 'react';
import type { Todo } from '../types';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';

interface Props {
  todos: Todo[];
  onAdd: (title: string) => void;
  onDelete: (id: number) => void;
  onCompletedChange: (id: number, completed: boolean) => void;
}

const Todos: React.FC<Props> = ({ todos, onAdd, onDelete, onCompletedChange }) => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 text-center mb-8 tracking-tight">
        My Tasks
      </h1>
      
      <AddTodoForm onSubmit={onAdd} />
      
      <TodoList todos={todos} onDelete={onDelete} onCompletedChange={onCompletedChange} />
    </div>
  );
};

export default Todos;