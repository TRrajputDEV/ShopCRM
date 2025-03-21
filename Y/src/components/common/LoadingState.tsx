// src/components/common/LoadingState.tsx
import React from 'react';

interface LoadingStateProps {
    message?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({ message = 'Loading...' }) => {
    return (
        <div className="text-center py-8">{message}</div>
    );
};

export default LoadingState;

