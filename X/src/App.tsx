// App.tsx
import React from 'react';
import Clock from './components/time/time';
import TodoList from './components/Todo/TodoList';
import WeatherCard from './components/weather/WeatherCard';

const App: React.FC = () => {
    return (
        <div className="w-[1200px] h-[700px] animate-fadeIn">
            <div className="h-full grid grid-cols-4 gap-6">
                {/* Main Todo Section */}
                <div className="col-span-3 bg-gray-900/40 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl overflow-auto hover:border-white/20 transition-all duration-300">
                    <div className="p-8">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-8">
                            Today's Goal
                        </h1>
                        <TodoList />
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                    {/* Clock Section */}
                    <div className="bg-gray-900/40 rounded-3xl backdrop-blur-md border border-white/10 p-6 shadow-2xl hover:border-white/20 transition-all duration-300">
                        <Clock />
                    </div>

                    {/* Thought of the Day Section */}
                    <div className="bg-gray-900/40 rounded-3xl backdrop-blur-md border border-white/10 p-6 shadow-2xl hover:border-white/20 transition-all duration-300">
                        <h2 className="text-xl font-semibold text-white/80 mb-3">Today's Inspiration</h2>
                        <p className="text-white/70 text-sm italic">
                            "Keep smiling, because life is a beautiful thing and there's so much to smile about."
                        </p>
                    </div>

                    {/* Weather Section */}
                    <div className="bg-gray-900/40 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-300">
                        <WeatherCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;