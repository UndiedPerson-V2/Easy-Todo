// src/hooks/useTodos.ts
import { useState } from 'react';
import type { Todo } from '../types';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), title, completed: false }]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number, completed: boolean) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  // ส่งคืนค่าและฟังก์ชันทั้งหมด
  return { todos, addTodo, deleteTodo, toggleTodo };
};