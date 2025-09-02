import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Download, Mail, MapPin, Code, Zap } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Mobile Developer & Software Engineer'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 80)

    return () => clearInterval(timer)
  }, [])

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/aabhashshakya',
      label: 'GitHub',
      color: 'hover:text-neon-cyan'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/aabhash-shakya-47820b202',
      label: 'LinkedIn',
      color: 'hover:text-neon-blue'
    },
    {
      icon: Download,
      href: '/resume.pdf',
      label: 'Resume',
      color: 'hover:text-neon-green'
    },
    {
      icon: Mail,
      href: 'mailto:aabhash.shakya@example.com',
      label: 'Email',
      color: 'hover:text-neon-pink'
    }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-neon-cyan opacity-20 rotate-45 animate-float interactive-bg-element cursor-pointer"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-neon-purple opacity-30 animate-float interactive-bg-element cursor-pointer" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 border border-neon-pink opacity-25 rotate-12 animate-float interactive-bg-element cursor-pointer" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border border-neon-green opacity-20 animate-float interactive-bg-element cursor-pointer" style={{ animationDelay: '6s' }}></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-neon-purple rounded-full animate-pulse-neon interactive-bg-element cursor-pointer" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-neon-pink rounded-full animate-pulse-neon interactive-bg-element cursor-pointer" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left side - Profile */}
          <div className="lg:col-span-2 text-center lg:text-left animate-slide-in-left">
            {/* Name and Title */}
            <h1 className="text-4xl md:text-6xl font-cyber font-bold mb-4">
              <span className="text-white">Aabhash</span>{' '}
              <span className="text-neon-cyan neon-text">Shakya</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 mb-4 h-8 font-modern">
              <span className="typing-animation">{displayText}</span>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start text-gray-400 mb-8">
              <MapPin size={16} className="mr-2 text-neon-cyan" />
              <span>Kathmandu, Nepal</span>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 glass-effect rounded-lg transition-all duration-300 transform hover:scale-110 text-gray-400 ${link.color} cyber-border`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <link.icon size={20} />
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="btn-neon">
                <Code size={20} className="mr-2" />
                View Projects
              </a>
              <a href="#contact" className="btn-neon border-neon-purple text-neon-purple hover:bg-neon-purple">
                <Zap size={20} className="mr-2" />
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-dark-100 flex items-center justify-center text-neon-cyan text-5xl font-cyber font-bold">
                  AS
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-neon-green rounded-full animate-pulse-neon"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-neon-pink rounded-full animate-pulse-neon" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero