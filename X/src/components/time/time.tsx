// Clock.tsx
import React, { useState, useEffect } from 'react';
import { Clock as ClockIcon } from 'lucide-react';

const Clock: React.FC = () => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="flex flex-col items-center space-y-4 animate-fadeIn">
            <div className="flex items-center gap-3">
                <ClockIcon className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold text-white">Current Time</h2>
            </div>
            <div className="text-4xl font-mono font-bold text-white tracking-wider animate-pulse">
                {time.toLocaleTimeString()}
            </div>
            <div className="text-gray-400 text-lg">
                {time.toLocaleDateString(undefined, { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                })}
            </div>
        </div>
    );
};

export default Clock;