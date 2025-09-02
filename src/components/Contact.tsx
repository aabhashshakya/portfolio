import React, { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Terminal } from 'lucide-react'

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    const mailtoLink = `mailto:aabhashshakya@gmail.com?subject=${subject}&body=${body}`
    
    window.location.href = mailtoLink
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aabhashshakya@gmail.com',
      href: 'mailto:aabhashshakya@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+977 98XXXXXXXX',
      href: 'tel:+97798XXXXXXXX'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kathmandu, Nepal',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/aabhashshakya',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/aabhash-shakya-47820b202',
      label: 'LinkedIn'
    }
  ]

  return (
    <section id="contact" ref={sectionRef} className="section-compact bg-dark-50 relative">
      <div className="container-max section-padding">
        <div className="text-center mb-8 animate-on-scroll">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-modern">
            Let's discuss your next project or just connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <div className="glass-effect rounded-2xl p-6 cyber-border">
              <h3 className="text-2xl font-cyber font-bold text-neon-cyan mb-6 flex items-center">
                <Terminal className="mr-3" size={24} />
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed font-modern">
                I'm always interested in hearing about new opportunities, interesting projects, 
                or just having a chat about mobile development and technology.
              </p>

              <div className="space-y-4 mb-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center p-4 glass-effect rounded-lg hover:bg-neon-cyan/10 transition-all duration-300 transform hover:scale-105 group border border-gray-700"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-lg flex items-center justify-center mr-4 group-hover:from-neon-cyan/30 group-hover:to-neon-purple/30 transition-all duration-300">
                      <info.icon className="text-neon-cyan" size={20} />
                    </div>
                    <div>
                      <p className="font-cyber font-semibold text-white">{info.label}</p>
                      <p className="text-gray-400 font-modern">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-cyber font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-neon-cyan transition-all duration-300 transform hover:scale-110 border border-gray-700"
                    >
                      <link.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-6 cyber-border">
              <h3 className="text-2xl font-cyber font-bold text-neon-purple mb-6">
                Send Message
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-modern">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 font-modern"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-modern">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 font-modern"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 font-modern">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 font-modern"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-modern">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-500 font-modern"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-neon flex items-center justify-center group font-modern"
              >
                <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact