// src/components/TodoItem.tsx
import React from 'react';
import type { Todo } from '../types';

interface Props {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onCompletedChange, onDelete }) => {
  return (
    <div className={`group flex items-center justify-between p-4 mb-3 rounded-2xl transition-all duration-300 border border-transparent hover:border-indigo-100/50 hover:shadow-md ${todo.completed ? 'bg-gray-50/80 opacity-[0.85]' : 'bg-white shadow-sm border-gray-100'}`}>
      <div className="flex items-center space-x-4">
        
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
            className="peer appearance-none h-6 w-6 border-2 border-indigo-200 rounded-lg checked:bg-indigo-500 checked:border-indigo-500 transition-all cursor-pointer hover:border-indigo-400"
          />
          <svg className="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <span className={`text-lg transition-all duration-300 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700 font-medium'}`}>
          {todo.title}
        </span>
      </div>
      
      <button 
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200"
        title="Delete"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;