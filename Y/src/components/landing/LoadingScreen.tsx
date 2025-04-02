// src/components/landing/LoadingScreen.tsx
import { Zap } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center z-50">
      <div className="animate-pulse flex flex-col items-center">
        <Zap className="w-16 h-16 text-orange-600 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">
            Shop CRM
        </h2>
        <p className="text-gray-600 mt-2">
        </p>
      </div>
    </div>
  );
}