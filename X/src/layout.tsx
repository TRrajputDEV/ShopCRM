// Layout.tsx
import React from 'react';

import App from "./App";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <div className="h-screen overflow-hidden bg-gray-950">
            
            <div className="relative z-10 h-full flex items-center justify-center p-8">
                <App />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;