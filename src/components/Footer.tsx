import React from 'react'
import { Heart, Github, Linkedin, Mail, Terminal } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
    },
    {
      icon: Mail,
      href: 'mailto:aabhash.shakya@example.com',
      label: 'Email'
    }
  ]

  return (
    <footer className="bg-black border-t border-neon-cyan/20 py-12">
      <div className="container-max section-padding">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-2xl font-cyber font-bold mb-4">
            <Terminal className="text-neon-cyan" size={24} />
            <span className="text-white">Aabhash</span>
            <span className="text-neon-cyan">Shakya</span>
          </div>
          <p className="text-gray-400 mb-8 max-w-md mx-auto font-modern">
            Building innovative mobile experiences, one line of code at a time.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center hover:bg-neon-cyan/10 transition-all duration-300 transform hover:scale-110 border border-gray-700"
              >
                <link.icon size={20} className="text-gray-400 hover:text-neon-cyan transition-colors duration-300" />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 flex items-center justify-center font-modern">
              © {currentYear} Aabhash Shakya. Made with{' '}
              <Heart className="mx-2 text-neon-pink" size={16} fill="currentColor" />
              and lots of coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer