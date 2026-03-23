// src/App.tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Todos from './pages/Todos';
import { useTodos } from './hooks/useTodos';

function App() {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();

  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex flex-col items-center py-12 px-4 font-sans text-gray-800 bg-[#fafafc] overflow-hidden">
        
        {/* Ambient Premium Background (High-Class & Subtle) */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-indigo-200/50 via-purple-200/40 to-transparent blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-teal-100/40 via-blue-200/40 to-transparent blur-[120px] pointer-events-none"></div>
        <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-rose-100/30 to-pink-200/30 blur-[100px] pointer-events-none"></div>

        {/* Content Layer */}
        <div className="relative z-10 w-full flex flex-col items-center">
          
          {/* Navigation เมนู */}
          <nav className="mb-10 flex space-x-2 bg-white/70 backdrop-blur-xl p-2 rounded-2xl shadow-sm border border-white/60">
            <Link to="/" className="px-6 py-2 rounded-xl text-indigo-600 font-bold hover:bg-white hover:shadow-md transition-all duration-300">Dashboard</Link>
            <Link to="/todos" className="px-6 py-2 rounded-xl text-indigo-600 font-bold hover:bg-white hover:shadow-md transition-all duration-300">Tasks</Link>
          </nav>

          {/* พื้นที่แสดงผลของ Route */}
          <div className="w-full max-w-lg bg-white/70 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl shadow-indigo-100/40 border border-white/80 ring-1 ring-black/[0.02]">
            <Routes>
              <Route path="/" element={<Home todos={todos} />} /> 
              <Route path="/todos" element={<Todos todos={todos} onAdd={addTodo} onDelete={deleteTodo} onCompletedChange={toggleTodo} />} />
            </Routes>
          </div>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;