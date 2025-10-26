import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Code, Lightbulb, Rocket } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: "AI/ML Expertise",
      description: "Deep learning, neural networks, and intelligent system design"
    },
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Full-Stack Development",
      description: "From AI models to web applications and deployment"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-cyan-400" />,
      title: "Innovation Mindset",
      description: "Solving complex problems with creative AI solutions"
    },
    {
      icon: <Rocket className="w-8 h-8 text-indigo-400" />,
      title: "Real-World Impact",
      description: "Building systems that make a difference in people's lives"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm Abdul Saboor, a passionate 4th-year AIML Engineering student with an insatiable curiosity for 
                artificial intelligence and machine learning. My journey in tech began with a fascination for how 
                machines can learn and make intelligent decisions.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently pursuing my degree in AI/ML Engineering, I've dedicated myself to mastering the art and 
                science of building intelligent systems. From computer vision projects that detect industrial defects 
                to mental health chatbots that understand emotions, I believe AI should serve humanity in meaningful ways.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding or training models, you'll find me exploring the latest research papers, 
                participating in hackathons, or working on projects that push the boundaries of what's possible 
                with AI. I'm always excited to collaborate on innovative projects that can make a real impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};