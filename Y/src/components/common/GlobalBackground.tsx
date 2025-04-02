// src/components/GlobalBackground.tsx
export default function GlobalBackground() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden">
            <div className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] bg-gradient-to-r from-orange-200 to-orange-300 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-[-50px] right-[-50px] w-[350px] h-[350px] bg-gradient-to-r from-orange-300 to-orange-400 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
    );
}
