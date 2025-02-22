import React, { useState, useEffect } from 'react';
import { Plus, X, CheckCircle, Circle } from 'lucide-react';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

const API_URL = 'http://localhost/todo-app-backend/api/todos.php';

const TodoList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskInput, setTaskInput] = useState('');
    const [loading, setLoading] = useState(true);

    // Fetch all todos
    const fetchTasks = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setTasks(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching tasks:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async () => {
        if (taskInput.trim() === '') return;

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: taskInput.trim() }),
            });

            const newTask = await response.json();
            setTasks(prev => [...prev, newTask]);
            setTaskInput('');
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const toggleTask = async (id: number) => {
        try {
            const task = tasks.find(t => t.id === id);
            if (!task) return;

            await fetch(API_URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    completed: !task.completed
                }),
            });

            setTasks(prev =>
                prev.map(task =>
                    task.id === id ? { ...task, completed: !task.completed } : task
                )
            );
        } catch (error) {
            console.error('Error toggling task:', error);
        }
    };

    const deleteTask = async (id: number) => {
        try {
            await fetch(`${API_URL}?id=${id}`, {
                method: 'DELETE',
            });

            setTasks(prev => prev.filter(task => task.id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    if (loading) {
        return <div className="text-white">Loading...</div>;
    }

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