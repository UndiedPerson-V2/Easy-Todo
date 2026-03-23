// src/components/AddTodoForm.tsx
import React, { useState } from 'react';

interface Props {
  onSubmit: (title: string) => void;
}

const AddTodoForm: React.FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (title.trim()) {
      onSubmit(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-8 shadow-sm rounded-2xl overflow-hidden ring-1 ring-gray-900/5 focus-within:ring-2 focus-within:ring-indigo-500/50 transition-all">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="What needs to be done?"
        className="flex-1 border-0 bg-gray-50/50 px-6 py-4 focus:outline-none transition-all text-gray-700 placeholder:text-gray-400 font-medium"
      />
      <button 
        type="submit" 
        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 hover:from-indigo-600 hover:to-purple-600 transition-all font-bold active:scale-95"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;