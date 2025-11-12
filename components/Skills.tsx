
import React from 'react';
import { SKILLS_DATA } from '../constants';
import type { SkillCategory } from '../types';

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => {
    return (
        <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 h-full transition-all duration-300 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="flex items-center mb-6">
                <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                    <span key={skill.name} className="bg-gray-800 text-gray-300 text-sm font-medium px-4 py-2 rounded-full">
                        {skill.name}
                    </span>
                ))}
            </div>
        </div>
    )
}

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-black/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white">Tools & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-2"></div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {SKILLS_DATA.map((category, index) => (
                <div key={category.title} data-aos="fade-up" data-aos-delay={index * 100}>
                    <SkillCard category={category} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;