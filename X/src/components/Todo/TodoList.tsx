// TodoList.tsx
import React, { useState, useEffect } from 'react';
import { Plus, X, CheckCircle, Circle } from 'lucide-react';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskInput, setTaskInput] = useState('');

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (taskInput.trim() === '') return;
        
        const newTask: Task = {
            id: Date.now(),
            text: taskInput.trim(),
            completed: false,
        };
        setTasks(prev => [...prev, newTask]);
        setTaskInput('');
    };

    const toggleTask = (id: number) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id: number) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    return (
        <div className="space-y-6">
            <div className="relative">
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addTask()}
                    placeholder="Add a new task..."
                    className="w-full bg-white/5 text-white placeholder-white/40 rounded-xl px-5 py-4 pr-12 border border-white/10 focus:border-white/20 focus:ring-2 focus:ring-white/10 focus:outline-none transition-all"
                />
                <button
                    onClick={addTask}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white/80"
                >
                    <Plus className="w-5 h-5" />
                </button>
            </div>

            <div className="space-y-2">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className={`group flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 ${
                            task.completed ? 'opacity-60' : ''
                        }`}
                    >
                        <button
                            onClick={() => toggleTask(task.id)}
                            className="flex-shrink-0"
                        >
                            {task.completed ? (
                                <CheckCircle className="w-5 h-5 text-emerald-400" />
                            ) : (
                                <Circle className="w-5 h-5 text-white/40" />
                            )}
                        </button>
                        <span
                            className={`flex-grow text-md text-white/80 ${
                                task.completed ? 'line-through text-white/40' : ''
                            }`}
                        >
                            {task.text}
                        </span>
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/20 rounded-lg transition-all"
                        >
                            <X className="w-4 h-4 text-red-400" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;