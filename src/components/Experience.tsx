import React, { useEffect, useRef } from 'react'
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react'

const Experience = () => {
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

  const experiences = [
    {
      title: 'Flutter Developer',
      company: 'ZoneTeamX',
      location: 'Hong Kong',
      description: 'Developed real-time voice and chat communication application with advanced features and multi-platform support.',
      achievements: [
        'Managed complete application architecture, development, and deployment lifecycle',
        'Collaborated with international team to deliver complex real-time communication features',
        'Implemented payment integration across 20+ countries in Asia and the Middle East, supporting multiple currencies',
        'Implemented in-app purchases for digital goods and mini-games',
        'Developed interactive gaming features within the main application'
      ],
      technologies: ['Flutter', 'Dart', 'WebRTC', 'ZegoCloud SDK', 'Flame Engine', 'Payment Integration', 'In-app Purchases']
    },
     {
      title: 'Software Engineer [Mobile]',
      company: 'Spiralogics Inc.',
      location: 'Sankhamul, Nepal',
      description: 'Led mobile development projects with a focus on Android, Flutter, and cross-platform solutions.',
      achievements: [
        'Implemented complex calendar and scheduling logic with offline-first support, ensuring 90% of features available without internet access',
        'Optimized HLS video streaming with ExoPlayer for smoother playback and reduced buffering',
        'Built custom video compression and editing workflows, reducing file sizes by 60% while maintaining quality',
        'Designed and developed cross-platform game logic with Kotlin Multiplatform, cutting platform-specific development time by 50%',
        'Integrated AI-driven gameplay using alpha-beta pruning with user-selectable difficulty levels (depth 1–5)',
        'Collaborated with cross-functional teams to deliver production-grade applications',
        'Built CI/CD pipelines and published applications to Play Store and App Store',
        'Developed Proof of Concept (POC) apps to evaluate emerging technologies'
      ],
      technologies: ['Android', 'Kotlin', 'Java', 'Flutter','Xamarin', 'Jetpack Compose', 'KMM', 'Firebase', 'ExoPlayer', 'HLS Streaming']
    },
    {
      title: 'Cloud Analyst',
      company: 'GrowByData LLC',
      location: 'Lalitpur, Nepal',
      description: 'Optimized digital content workflows and managed data processing operations.',
      achievements: [
        'Enhanced online product catalog quality and consistency across platforms',
        'Streamlined image editing and data entry processes for improved efficiency',
        'Collaborated with team members to maintain high-quality digital content standards'
      ],
      technologies: ['Data Processing', 'Content Management', 'Digital Workflows']
    }
  ]
  

  return (
    <section id="experience" ref={sectionRef} className="section-compact bg-black relative">
      <div className="container-max section-padding">
        <div className="text-center mb-8 animate-on-scroll">
          <h2 className="section-title">Experience</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-modern">
            My professional journey building innovative mobile solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink hidden md:block"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-neon-cyan rounded-full border-4 border-black shadow-lg hidden md:block animate-pulse-neon"></div>

                <div className="md:ml-20">
                  <div className="glass-effect rounded-2xl p-6 cyber-border group hover:scale-105 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-cyber font-bold text-neon-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-white font-semibold mb-2">
                          <Briefcase size={16} className="mr-2 text-neon-cyan" />
                          {exp.company}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center text-white text-sm space-y-1 sm:space-y-0 sm:space-x-4 font-modern">
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2 text-neon-cyan" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-white mb-4 leading-relaxed font-modern">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start white text-sm font-modern">
                          <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4">
                      <h4 className="font-cyber font-bold text-white mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan rounded-full text-sm font-medium border border-neon-cyan/30 hover:bg-neon-cyan/20 transition-colors duration-300 font-modern"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience