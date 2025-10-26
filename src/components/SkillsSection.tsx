import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "JavaScript", "SQL", "Java", "C", "R"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI/ML Frameworks",
      icon: "🧠",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Keras", "Pandas", "NumPy", "YOLO"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Web Frameworks",
      icon: "🌐",
      skills: ["FastAPI", "Django", "Streamlit", "React", "Flask", "Node.js"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git", "Docker", "Supabase", "AWS", "Google Cloud", "Jupyter", "VS Code", "Google Collab"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AI/ML Specializations",
      icon: "🚀",
      skills: ["Computer Vision", "NLP", "Deep Learning", "Neural Networks", "Data Science", "MLOps"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["PostgreSQL", "MongoDB", "SQLite", "Firebase"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent systems and modern applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-white">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className={`bg-gradient-to-r ${category.color} text-white border-none hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30">
            <span className="text-blue-400 font-semibold">Always Learning</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-300">Staying updated with the latest in AI/ML</span>
          </div>
        </div>
      </div>
    </section>
  );
};