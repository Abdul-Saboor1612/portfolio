import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Eye, Brain, Heart, Shield } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "AI Defect Detector",
      description: "Industrial-grade defect detection system using computer vision. Implements YOLO and custom CNN architectures for real-time quality control in manufacturing processes.",
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      technologies: ["PyTorch", "YOLO", "OpenCV", "ReactJS", "MongoDB" ],
      githubUrl: "https://github.com/Abdul-Saboor1612/defect_detection_model",
      demoUrl: "https://ainspect.netlify.app/",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "SmartAssist Bot",
      description: "Intelligent rule-based chatbot with pattern matching and keyword recognition. Uses predefined decision trees and if-then logic to handle customer inquiries, FAQs, and support tickets efficiently.",
      icon: < Eye className="w-8 h-8 text-purple-400" />,
      technologies: ["Python", "NLTK", "RegEx", "Flask", "SQLite"],
      githubUrl: "https://github.com/Abdul-Saboor1612/Chatbot",
      demoUrl: "https://drive.google.com/file/d/1iO9nwkZkAfFM7td_7qNGS1tt8xtU4Qmv/view",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Face Recognition System",
      description: "Face detection and recognition system. Uses computer vision Haarcascade to identify individuals and Recognize faces in images and webcam/video.",
      icon: <Heart className="w-8 h-8 text-green-400" />,
      technologies: ["Python", "OpenCV", "TensorFlow", "Haar Cascades", "NumPy"],
      githubUrl: "https://github.com/Abdul-Saboor1612/Face_recognition_detection",
      demoUrl: "https://drive.google.com/file/d/1ZCWs48ov5K8Pf3DWAQq8cOOnn-GM2YCf/view",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Dubify AI",
      description: "Advanced AI-based voice dubbing and speech synthesis platform. Features real-time voice cloning, multilingual support, and emotion-aware speech generation for content creators.",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      technologies: ["PyTorch", "Streamlit", "FastAPI", "Docker", "AWS"],
      githubUrl: "https://github.com/Abdul-Saboor1612/dubify_AI",
      // demoUrl: "https://dubify-ai.com",
      // gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative AI/ML solutions that solve real-world problems
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                      {project.icon}
                    </div>
                    <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-slate-700 text-gray-300 hover:bg-slate-600 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="!bg-transparent !hover:bg-transparent border-blue-400 text-blue-400 hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  
                  {project.demoUrl && (
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white transition-all duration-300 transform hover:scale-105`}
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="!bg-transparent !hover:bg-transparent border-blue-400 text-blue-400 hover:border-purple-400 hover:text-purple-400 px-8 py-3 text-lg transition-all duration-300"
            onClick={() => window.open('https://github.com/Abdul-Saboor1612', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};