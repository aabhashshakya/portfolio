import React, { useEffect, useRef } from 'react'
import { Code, Smartphone, Cpu, Zap } from 'lucide-react'

const About = () => {
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

  const highlights = [
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Android, Flutter, Kotlin Multiplatform'
    },
    {
      icon: Code,
      title: 'Cross-Platform',
      description: 'Native & hybrid app development'
    },
    {
      icon: Cpu,
      title: 'Performance',
      description: 'Optimized algorithms & efficient code'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge solutions & technologies'
    }
  ]

  return (
    <section id="about" ref={sectionRef} className="section-compact bg-dark-100 relative">
      <div className="container-max section-padding">
        <div className="text-center mb-8 animate-on-scroll">
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-modern">
            Passionate mobile developer with expertise in creating innovative solutions 
            that bridge technology and user experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* About Content */}
          <div className="animate-on-scroll">
            <div className="glass-effect rounded-2xl p-6 cyber-border">
              <div className="space-y-3 text-gray-300 leading-relaxed font-modern">
                <p>
                  I'm a passionate mobile developer with over 3 years of experience in creating 
                  innovative mobile applications. My journey in technology started with a 
                  curiosity about how things work, which evolved into a deep love for problem-solving 
                  and building solutions that make a difference.
                </p>
                <p>
                  I specialize in Android development with Kotlin/Java, Flutter for cross-platform 
                  solutions, and Kotlin Multiplatform Mobile (KMM). I've had the privilege of working 
                  on diverse projects ranging from cultural heritage apps to real-time communication 
                  platforms, always focusing on performance optimization and user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="card-dark text-center group"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:from-neon-cyan/30 group-hover:to-neon-purple/30 transition-all duration-300">
                  <highlight.icon className="text-neon-cyan" size={20} />
                </div>
                <h4 className="text-base font-cyber font-bold text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-400 font-modern">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About