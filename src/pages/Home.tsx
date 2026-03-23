// src/pages/Home.tsx
import React from 'react';
import type { Todo } from '../types';

interface Props {
  todos: Todo[];
}

const Home: React.FC<Props> = ({ todos }) => {
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="text-center">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-800 tracking-tight">Dashboard Overview</h1>
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-3xl shadow-lg shadow-indigo-200 text-white transform transition hover:scale-[1.02] duration-300">
        <p className="text-lg opacity-90 mb-3 font-medium">
          Total Tasks: <span className="font-bold text-3xl ml-2">{todos.length}</span>
        </p>
        <div className="h-px w-full bg-white/20 my-4"></div>
        <p className="text-lg text-green-200 font-medium">
          Completed: <span className="font-bold text-3xl ml-2 text-green-300">{completedCount}</span>
        </p>
      </div>
    </div>
  );
};

export default Home;