import React, { useEffect, useRef, useState } from 'react'
import { Code, Smartphone, Database, Cloud, Gamepad2, CreditCard } from 'lucide-react'

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: Code,
      skills: ['Android (Java/Kotlin)', 'Flutter (Dart)', 'Xamarin (C#)', 'Kotlin Multiplatform Mobile']
    },
    {
      title: 'Architecture & Patterns',
      icon: Smartphone,
      skills: ['MVVM', 'MVI', 'Provider', 'BLoC']
    },
    {
      title: 'Tools & Technologies',
      icon: Gamepad2,
      skills: ['ExoPlayer', 'HLS', 'WebRTC', 'Flame/Forge2D', 'Firebase', 'AWS']
    },
    {
      title: 'Payment & Integration',
      icon: Cloud,
      skills: ['Google Play Billing', 'Apple In-App Purchases', 'Codapay', 'PayerMax', 'SQLite', 'Retrofit']
    }
  ]

  const additionalSkills = [
    'Git', 'Postman', 'Fastlane', 'Agile', 'Twilio', 'OAuth', 'OneSignal', 'Dagger/Hilt', 'Sentry', 'Branch.io', 'Azure', 'GCP', 'Aliyun'
  ]

  return (
    <section id="skills" ref={sectionRef} className="section-compact bg-black relative">
      <div className="container-max section-padding">
        <div className="text-center mb-6 animate-on-scroll">
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-effect rounded-xl p-4 cyber-border group hover:scale-105 transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-lg flex items-center justify-center mr-3 group-hover:from-neon-cyan/30 group-hover:to-neon-purple/30 transition-all duration-300">
                  <category.icon className="text-neon-cyan" size={16} />
                </div>
                <h3 className="text-base font-cyber font-bold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-neon-cyan/10 text-neon-cyan rounded text-xs font-medium border border-neon-cyan/30 hover:bg-neon-cyan/20 transition-colors duration-300 font-modern"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="animate-on-scroll" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-lg font-cyber font-bold text-center text-neon-purple mb-4">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span
                key={skill}
                className="px-2 py-1 glass-effect text-gray-300 rounded text-sm font-medium hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 transform hover:scale-105 cursor-default border border-gray-700 font-modern"
                style={{ animationDelay: `${0.7 + index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills