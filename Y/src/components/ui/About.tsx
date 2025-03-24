import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Award, 
    Rocket, 
    Target, 
    Linkedin, 
    Github, 
    Twitter, 
    Users, 
    Globe, 
    Zap 
} from 'lucide-react';

const teamMembers = [
    {
        name: "Alex Johnson",
        role: "Founder & Lead Developer",
        image: "/api/placeholder/400/400",
        bio: "A visionary technologist with over a decade of experience in software engineering, specializing in creating scalable, innovative solutions.",
        skills: ["Full Stack", "Product Strategy", "Cloud Architecture"],
        socials: {
            linkedin: "#",
            github: "#",
            twitter: "#"
        },
        color: "bg-gradient-to-br from-orange-400 to-orange-600"
    },
    {
        name: "Emily Chen",
        role: "Frontend Architect",
        image: "/api/placeholder/400/400",
        bio: "Design-driven developer passionate about creating seamless, intuitive user experiences that blend aesthetics with functionality.",
        skills: ["React", "UI/UX", "Design Systems"],
        socials: {
            linkedin: "#",
            github: "#",
            twitter: "#"
        },
        color: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
        name: "Michael Rodriguez",
        role: "Backend Engineer",
        image: "/api/placeholder/400/400",
        bio: "Infrastructure wizard with expertise in building robust, secure, and high-performance backend systems.",
        skills: ["Node.js", "Microservices", "DevOps"],
        socials: {
            linkedin: "#",
            github: "#",
            twitter: "#"
        },
        color: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
        name: "Sarah Kim",
        role: "UX/UI Designer",
        image: "/api/placeholder/400/400",
        bio: "Creative problem solver who transforms complex user challenges into elegant, meaningful design solutions.",
        skills: ["Design Thinking", "Figma", "User Research"],
        socials: {
            linkedin: "#",
            github: "#",
            twitter: "#"
        },
        color: "bg-gradient-to-br from-purple-400 to-purple-600"
    }
];

export default function UltimateSinglePageAbout() {
    const [activeSection, setActiveSection] = useState('team');
    const [selectedMember, setSelectedMember] = useState<null | typeof teamMembers[number]>(null);

    const sections = {
        team: {
            icon: <Users className="w-8 h-8" />,
            title: "Our Team",
            description: "Innovative minds united by a passion for transformative technology."
        },
        mission: {
            icon: <Target className="w-8 h-8" />,
            title: "Our Mission",
            description: "Empowering digital experiences through cutting-edge solutions."
        },
        vision: {
            icon: <Rocket className="w-8 h-8" />,
            title: "Our Vision",
            description: "Leading the next wave of technological innovation and user-centric design."
        }
    };

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-white to-orange-50 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-12 h-[90vh] max-h-[900px]">
                {/* Sidebar Navigation */}
                <div className="col-span-2 bg-gray-900 text-white p-6 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center mb-12">
                            <Zap className="w-10 h-10 text-orange-500 mr-2" />
                            <span className="text-2xl font-bold">TechInnovate</span>
                        </div>

                        {Object.keys(sections).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveSection(key as keyof typeof sections)}
                                className={`flex items-center w-full p-3 rounded-lg mb-4 transition-all duration-300 
                                    ${activeSection === key 
                                        ? 'bg-orange-500 text-white' 
                                        : 'hover:bg-gray-800 text-gray-300'
                                    }`}
                            >
                                {sections[key as keyof typeof sections].icon}
                                <span className="ml-3 font-medium">{sections[key as keyof typeof sections].title}</span>
                            </button>
                        ))}
                    </div>

                    <div className="text-xs text-gray-500 text-center">
                        © 2024 TechInnovate. All rights reserved.
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="col-span-10 overflow-hidden relative">
                    <AnimatePresence mode="wait">
                        {activeSection === 'team' && (
                            <motion.div 
                                key="team"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                className="p-8 grid grid-cols-4 gap-6 h-full overflow-hidden"
                            >
                                {teamMembers.map((member, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        onClick={() => setSelectedMember(member)}
                                        className="bg-white border border-gray-100 rounded-2xl p-5 text-center cursor-pointer shadow-lg hover:shadow-xl transition-all flex flex-col justify-center items-center"
                                    >
                                        <div className={`w-24 h-24 mb-4 rounded-full ${member.color} flex items-center justify-center`}>
                                            <img 
                                                src={member.image} 
                                                alt={member.name} 
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                        <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                                        <p className="text-gray-500 text-sm">{member.role}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {activeSection === 'mission' && (
                            <motion.div 
                                key="mission"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                className="p-12 flex items-center justify-center h-full"
                            >
                                <div className="text-center max-w-3xl">
                                    <div className="bg-orange-100 text-orange-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <Award className="w-12 h-12" />
                                    </div>
                                    <h2 className="text-4xl font-bold mb-6 text-gray-900">
                                        Our Mission
                                    </h2>
                                    <p className="text-xl text-gray-700 leading-relaxed">
                                        To empower businesses and individuals through innovative 
                                        technology solutions that solve complex challenges, drive 
                                        digital transformation, and create meaningful impact in 
                                        the ever-evolving technological landscape.
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {activeSection === 'vision' && (
                            <motion.div 
                                key="vision"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                className="p-12 flex items-center justify-center h-full"
                            >
                                <div className="text-center max-w-3xl">
                                    <div className="bg-blue-100 text-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <Globe className="w-12 h-12" />
                                    </div>
                                    <h2 className="text-4xl font-bold mb-6 text-gray-900">
                                        Our Vision
                                    </h2>
                                    <p className="text-xl text-gray-700 leading-relaxed">
                                        To be a global catalyst for technological innovation, 
                                        continuously pushing boundaries and creating solutions 
                                        that inspire, connect, and transform the way people 
                                        interact with technology.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Member Details Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="bg-white rounded-2xl max-w-md w-full p-8 text-center relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={`w-32 h-32 mx-auto rounded-full mb-6 ${selectedMember.color} flex items-center justify-center`}>
                                <img 
                                    src={selectedMember.image} 
                                    alt={selectedMember.name} 
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <h3 className="text-3xl font-bold mb-2">{selectedMember.name}</h3>
                            <p className="text-gray-500 mb-4">{selectedMember.role}</p>
                            <p className="text-gray-700 mb-6">{selectedMember.bio}</p>
                            
                            <div className="flex justify-center space-x-4 mb-6">
                                {selectedMember.skills.map((skill, index) => (
                                    <span 
                                        key={index} 
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex justify-center space-x-6">
                                <a href={selectedMember.socials.linkedin} className="text-blue-600 hover:text-blue-800">
                                    <Linkedin size={24} />
                                </a>
                                <a href={selectedMember.socials.github} className="text-gray-800 hover:text-black">
                                    <Github size={24} />
                                </a>
                                <a href={selectedMember.socials.twitter} className="text-blue-400 hover:text-blue-600">
                                    <Twitter size={24} />
                                </a>
                            </div>
                            
                            <button 
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}