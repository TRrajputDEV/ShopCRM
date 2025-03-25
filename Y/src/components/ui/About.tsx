import { Linkedin, Github, Twitter } from 'lucide-react';

const teamMembers = [
    {
        name: "Alex Johnson",
        role: "Founder & Lead Developer",
        image: "/api/placeholder/400/400",
        bio: "A visionary technologist with over a decade of experience in software engineering.",
        skills: ["Full Stack", "Product Strategy", "Cloud Architecture"],
        socials: {
            linkedin: "#",
            github: "#",
            twitter: "#"
        }
    },
    {
        name: "Emily Chen",
        role: "Frontend Architect",
        image: "/api/placeholder/400/400",
        bio: "Design-driven developer passionate about creating seamless user experiences.",
        skills: ["React", "UI/UX", "Design Systems"],
        socials: {
            linkedin: "#",
            github: "#",
            twitter: "#"
        }
    },
    {
        name: "Michael Rodriguez",
        role: "Backend Engineer",
        image: "/api/placeholder/400/400",
        bio: "Infrastructure wizard with expertise in building robust backend systems.",
        skills: ["Node.js", "Microservices", "DevOps"],
        socials: {
            linkedin: "#",
            github: "#",
            twitter: "#"
        }
    },
    {
        name: "Sarah Kim",
        role: "UX/UI Designer",
        image: "/api/placeholder/400/400",
        bio: "Creative problem solver who transforms complex user challenges into design solutions.",
        skills: ["Design Thinking", "Figma", "User Research"],
        socials: {
            linkedin: "#",
            github: "#",
            twitter: "#"
        }
    }
];

export default function SimpleTeamPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl p-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Team</h2>
                    <hr className="border-t-2 border-orange-500 w-16 mx-auto" />
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div 
                            key={index} 
                            className="bg-white border border-gray-300 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300"
                        >
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-orange-100 overflow-hidden">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                            <p className="text-gray-600 mb-4">{member.role}</p>
                            <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
                            
                            <div className="flex justify-center space-x-4">
                                <a href={member.socials.linkedin} className="text-orange-600 hover:text-orange-800 transition duration-300">
                                    <Linkedin size={20} />
                                </a>
                                <a href={member.socials.github} className="text-orange-600 hover:text-orange-800 transition duration-300">
                                    <Github size={20} />
                                </a>
                                <a href={member.socials.twitter} className="text-orange-600 hover:text-orange-800 transition duration-300">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}