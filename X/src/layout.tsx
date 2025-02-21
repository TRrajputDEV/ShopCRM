// Layout.tsx
import React from 'react';
import Particles from "./components/particle/particles";
import App from "./App";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <div className="h-screen overflow-hidden bg-gray-950">
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={150}
                particleSpread={15}
                speed={0.08}
                particleBaseSize={80}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
            <div className="relative z-10 h-full flex items-center justify-center p-8">
                <App />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;