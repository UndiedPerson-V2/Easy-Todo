// src/components/TodoList.tsx
import React from 'react';
import type { Todo } from '../types';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
  onCompletedChange: (id: number, completed: boolean) => void;
}

const TodoList: React.FC<Props> = ({ todos, onDelete, onCompletedChange }) => {
  
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 opacity-80 animate-fade-in">
        <svg className="w-16 h-16 text-indigo-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
        </svg>
        <p className="text-center text-gray-500 font-medium text-lg">You're all caught up!</p>
        <p className="text-center text-gray-400 text-sm mt-1">Add a new task above.</p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDelete={onDelete} 
          onCompletedChange={onCompletedChange} 
        />
      ))}
    </div>
  );
};

export default TodoList;