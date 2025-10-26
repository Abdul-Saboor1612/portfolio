import React from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedBackground } from './AnimatedBackground';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Abdul Saboor
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-semibold">
              AI/ML Engineer | Innovator | Builder of Intelligent Systems
            </span>
          </div>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            Passionate about creating intelligent systems that solve real-world problems. 
            Currently pursuing AIML Engineering and building the future with AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="!bg-transparent !hover:bg-transparent border-blue-400 text-blue-400 hover:border-purple-400 hover:text-purple-400 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-900">
            <a href="https://github.com/Abdul-Saboor1612" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/syed-abdul-saboor-a0b4a7307" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:syedabdulsaboor09@gmail.com"
               className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            size={32} 
            className="text-gray-400 cursor-pointer hover:text-blue-400 transition-colors duration-300"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};