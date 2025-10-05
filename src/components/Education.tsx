import React, { useEffect, useRef } from 'react'
import { GraduationCap, Award, Calendar, MapPin, Trophy } from 'lucide-react'

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const education = [
    {
      degree: 'Bachelor\'s in Computer Science and Information Technology',
      institution: 'National College of Computer Studies',
      period: '2022',
      description: 'Focused on software engineering, algorithms, and mobile application development.',
      achievements: [
        '1st Position in Final Year Real Time Project (2022) - Developed "Resume Generator" application allowing users to customize resumes and technical documents',
        'Runner-up in NCCS Hackathon (2021) - Developed Android chat application "ChatBiz" for organizational communication with real-time location tracking'
      ]
    }
  ]

  return (
    <section id="education" ref={sectionRef} className="section-compact bg-dark-100 relative">
      <div className="container-max section-padding">
        <div className="text-center mb-6 animate-on-scroll">
          <h2 className="section-title">Education</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="animate-on-scroll">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="glass-effect rounded-xl p-6 cyber-border group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="mr-3 text-neon-cyan" size={20} />
                        <h3 className="text-lg font-cyber font-bold text-neon-cyan">Education</h3>
                      </div>
                      <h4 className="text-lg font-cyber font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      <p className="text-neon-purple group-hover:text-neon-green transition-colors duration-300 font-semibold font-modern">{edu.institution}</p>
                    </div>
                    <div className="text-right text-sm text-white font-modern">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1 text-neon-cyan" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                  <p className="text-white text-sm leading-relaxed font-modern">
                    {edu.description}
                  </p>
                  
                  {edu.achievements && (
                    <div>
                      <div className="flex items-center mb-3">
                        <Trophy className="mr-2 text-neon-purple group-hover:text-neon-cyan transition-colors duration-300" size={16} />
                        <h5 className="font-cyber font-bold text-neon-purple group-hover:text-neon-cyan transition-colors duration-300">Achievements</h5>
                      </div>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-white text-sm font-modern">
                            <div className="w-1.5 h-1.5 bg-neon-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education