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

      
      </div>
    </section>
  )
}

export default About