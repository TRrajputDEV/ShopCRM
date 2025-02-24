import React, { useState, useEffect } from 'react';
import { Plus, X, CheckCircle, Circle, Edit2, GripVertical, Clock } from 'lucide-react';

interface Task {
    id: number;
    text: string;
    completed: boolean;
    created_at: string;
    priority: number;
}

const API_URL = 'http://localhost/todo-app-backend/api/todos.php';

const TodoList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskInput, setTaskInput] = useState('');
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editText, setEditText] = useState('');
    const [draggedTask, setDraggedTask] = useState<Task | null>(null);

    const fetchTasks = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setTasks(data.sort((a: Task, b: Task) => b.priority - a.priority));
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
            const highestPriority = tasks.length > 0 
                ? Math.max(...tasks.map(t => t.priority || 0)) 
                : 0;
                
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    text: taskInput.trim(),
                    priority: highestPriority + 1
                }),
            });

            const newTask = await response.json();
            setTasks(prev => [...prev, newTask].sort((a, b) => b.priority - a.priority));
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

    const startEditing = (task: Task) => {
        setEditingId(task.id);
        setEditText(task.text);
    };

    const updateTask = async (id: number) => {
        if (editText.trim() === '') {
            setEditingId(null);
            return;
        }
        
        try {
            await fetch(API_URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    text: editText.trim()
                }),
            });

            setTasks(prev =>
                prev.map(task =>
                    task.id === id ? { ...task, text: editText.trim() } : task
                )
            );
            setEditingId(null);
        } catch (error) {
            console.error('Error updating task:', error);
            setEditingId(null);
        }
    };

    const handleDragStart = (e: React.DragEvent, task: Task) => {
        setDraggedTask(task);
        // Make drag image transparent (optional)
        if (e.dataTransfer.setDragImage) {
            const dragImg = new Image();
            dragImg.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
            e.dataTransfer.setDragImage(dragImg, 0, 0);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = async (e: React.DragEvent, targetTask: Task) => {
        e.preventDefault();
        if (!draggedTask || draggedTask.id === targetTask.id) return;

        try {
            const newTasks = [...tasks];
            const draggedIndex = tasks.findIndex(t => t.id === draggedTask.id);
            const targetIndex = tasks.findIndex(t => t.id === targetTask.id);
            
            // Swap priorities
            const tempPriority = draggedTask.priority;
            newTasks[draggedIndex].priority = targetTask.priority;
            newTasks[targetIndex].priority = tempPriority;

            // Update in database
            await fetch(API_URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: draggedTask.id,
                    priority: targetTask.priority
                }),
            });

            await fetch(API_URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: targetTask.id,
                    priority: tempPriority
                }),
            });

            setTasks(newTasks.sort((a, b) => b.priority - a.priority));
        } catch (error) {
            console.error('Error reordering tasks:', error);
        }
        setDraggedTask(null);
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

    const formatDate = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleString();
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
                        draggable
                        onDragStart={(e) => handleDragStart(e, task)}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, task)}
                        className={`group flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 ${
                            task.completed ? 'opacity-60' : ''
                        } ${draggedTask && draggedTask.id === task.id ? 'opacity-50' : ''}`}
                    >
                        <div className="cursor-grab">
                            <GripVertical className="w-5 h-5 text-white/40 hover:text-white/60" />
                        </div>
                        
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
                        
                        {editingId === task.id ? (
                            <form 
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    updateTask(task.id);
                                }}
                                className="flex-grow"
                            >
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            updateTask(task.id);
                                        } else if (e.key === 'Escape') {
                                            e.preventDefault();
                                            setEditingId(null);
                                        }
                                    }}
                                    onBlur={() => updateTask(task.id)}
                                    autoFocus
                                    className="w-full bg-white/10 text-white rounded px-2 py-1 outline-none"
                                />
                            </form>
                        ) : (
                            <>
                                <span
                                    className={`flex-grow text-md text-white/80 ${
                                        task.completed ? 'line-through text-white/40' : ''
                                    }`}
                                >
                                    {task.text}
                                </span>
                                {task.created_at && (
                                    <div className="hidden md:flex items-center gap-2 text-xs text-white/40">
                                        <Clock className="w-4 h-4" />
                                        {formatDate(task.created_at)}
                                    </div>
                                )}
                            </>
                        )}
                        
                        {editingId !== task.id && (
                            <>
                                <button
                                    onClick={() => startEditing(task)}
                                    className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-blue-500/20 rounded-lg transition-all"
                                >
                                    <Edit2 className="w-4 h-4 text-blue-400" />
                                </button>
                                
                                <button
                                    onClick={() => deleteTask(task.id)}
                                    className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/20 rounded-lg transition-all"
                                >
                                    <X className="w-4 h-4 text-red-400" />
                                </button>
                            </>
                        )}
                    </div>
                ))}
                {tasks.length === 0 && (
                    <div className="text-center p-4 text-white/40">
                        No tasks yet. Add a task to get started!
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoList;