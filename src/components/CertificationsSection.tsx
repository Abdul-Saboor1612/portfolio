import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink, Calendar, CheckCircle, Trophy, Medal } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: "Artificial Intelligence Virtual Internship",
      issuer: "CodSoft",
      date: "September - October 2025",
      credentialId: "920b5bf",
      skills: ["Artificial Intelligence", "NLP", "Computer Vision ", "Transformers", "Deep Learning"],
      verifyLink: "https://www.codsoft.in",
      gradient: "from-blue-500 to-purple-500",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "MachineLearningTraining",
      issuer: "Internshala",
      date: "2024",
      credentialId: "94p6uq4dp0l",
      skills: ["ML", "Data Analytics & Visualization", "Supervised & Unsupervised Learning"],
      verifyLink: "https://trainings.internshala.com/verify-certificate/",
      gradient: "from-blue-500 to-cyan-500",
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications & Credentials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuously learning and validating skills through industry-recognized certifications
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white mb-2 leading-tight">
                        {cert.title}
                      </CardTitle>
                      <p className="text-gray-400 text-sm font-medium">{cert.issuer}</p>
                    </div>
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${cert.gradient} flex-shrink-0`}>
                      {cert.icon}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">Issued: {cert.date}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-xs text-gray-400">Credential ID</p>
                    <p className="text-sm text-gray-300 font-mono bg-slate-700/50 px-3 py-2 rounded">
                      {cert.credentialId}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-xs text-gray-400">Skills Covered</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 text-xs bg-slate-700/70 text-blue-300 rounded-full border border-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full mt-4 bg-transparent border-slate-600 text-white hover:bg-slate-700 hover:border-blue-400 transition-all duration-300 group"
                    onClick={() => window.open(cert.verifyLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:text-blue-400" />
                    Verify Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info Card */}
          <Card className="mt-12 bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 mb-4">
                  <Trophy className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold">Continuous Learner</span>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Committed to staying updated with the latest advancements in AI/ML through 
                  continuous learning and professional development.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
