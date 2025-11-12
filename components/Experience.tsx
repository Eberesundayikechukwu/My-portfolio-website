
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

const ExperienceItem: React.FC<{ experience: typeof EXPERIENCE_DATA[0], isLast: boolean }> = ({ experience, isLast }) => {
    return (
        <div className="relative pl-10" data-aos="fade-left">
            <div className="absolute left-0 top-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-gray-800 glow"></div>
            {!isLast && <div className="absolute left-[7px] top-5 w-0.5 h-full bg-gray-700"></div>}
            <div>
                <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
                <p className="text-md text-pink-400">{experience.company}</p>
            </div>
        </div>
    );
};

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-white">Experience</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-2"></div>
                </div>
                <div className="max-w-2xl mx-auto">
                    <div className="space-y-12">
                        {EXPERIENCE_DATA.map((exp, index) => (
                            <ExperienceItem 
                                key={index}
                                experience={exp} 
                                isLast={index === EXPERIENCE_DATA.length - 1} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;