import React, { useEffect, useRef } from 'react'
import { ExternalLink, Github, Smartphone, Globe, Play, Apple } from 'lucide-react'

const Projects = () => {
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

  const projects = [
    {
      title: 'Nepal Sambat',
      description: 'Implementation of astronomical calculations and scientific principles for the national Nepal Sambat Calendar. Computes 200+ festival dates, tithis, and celestial events for AD, BS and NS calendars up to 1166 NS. Features dual-mode data handling with 90% offline access and received official recognition from Prime Minister Pushpa Kamal Dahal.',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Mobile App',
      icon: Smartphone,
      technologies: ['Android', 'Kotlin', 'Lunisolar Calendar Algorithm', 'Offline-First', 'Local Persistence'],
      links: {
        ios: 'https://apps.apple.com/np/app/nepal-sambat/id1588617745',
        android: 'https://play.google.com/store/apps/details?id=com.spiralogics.nepalsambat&hl=en&gl=US'
      },
      featured: true
    },
    {
      title: 'ZONE - Group Voice Chat Room',
      description: 'Flutter-based social voice chat platform supporting up to 9 people on mic and 100+ concurrent listeners. Features 4+ payment gateways across 20+ countries, in-app Plinko mini-game with Flutter Flame at 60 FPS, and rich avatar customizations.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Mobile App',
      icon: Smartphone,
      technologies: ['Flutter', 'Dart', 'WebRTC', 'ZegoCloud SDK', 'Flame Engine', 'Multi-Currency Payments'],
      links: {
        ios: 'https://apps.apple.com/us/app/zone-group-voice-chat-room/id6744646452',
        android: 'https://play.google.com/store/apps/details?id=com.zoneteamx.app&hl=en_US'
      },
      featured: true
    },
    {
      title: 'Entervu',
      description: 'Short-form video social networking app for professionals built with Jetpack Compose. Features intuitive video feed with horizontal/vertical swipe navigation, ExoPlayer HLS streaming with 80% improved load times, and custom video compression achieving 60% file size reduction.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Mobile App',
      icon: Smartphone,
      technologies: ['Android', 'Jetpack Compose', 'ExoPlayer', 'HLS Streaming', 'Video Compression', 'img.ly SDK'],
      links: {
        website: 'https://www.entervu.com/'
      },
      featured: false
    },
    {
      title: 'BracketIT',
      description: 'Sports bracket prediction platform for 6 major tournaments built with Flutter. Features dynamic bracket visualizations using CustomPaint, private/public pools, competitive leaderboards, and cross-platform deployment.',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Mobile App',
      icon: Smartphone,
      technologies: ['Flutter', 'CustomPaint', 'Sports Prediction', 'Real-time Updates', 'Cross-Platform'],
      links: {
        website: 'https://bracketlt.spiralogics.com/'
      },
      featured: false
    },
    {
      title: 'Baghchal',
      description: 'Strategic cultural board game with user-selectable AI difficulty (depth 1-5) powered by alpha-beta pruning. Built with Jetpack Compose and CustomPainter for efficient rendering, optimized with KMM reducing platform-specific development time by 50%.',
      image: 'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Game',
      icon: Globe,
      technologies: ['Kotlin Multiplatform', 'Alpha-Beta Pruning', 'Jetpack Compose', 'CustomPainter', 'AI Strategy'],
      links: {
        website: 'https://baghchal.spiralogics.com/'
      },
      featured: false
    },
  
    {
      title: 'GetFit',
      description: 'Fitness tracking app developed using MVVM architecture and Dependency Injection with Hilt. Integrated Strava API for real-time workout data synchronization and performance metrics tracking.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Mobile App',
      icon: Smartphone,
      technologies: ['Android', 'Kotlin', 'MVVM', 'Hilt', 'Strava API', 'Coroutines'],
      links: {},
      featured: false
    }
  ]

  const getLinkIcon = (linkType: string) => {
    switch (linkType) {
      case 'ios':
        return Apple
      case 'android':
        return Play
      case 'website':
        return Globe
      default:
        return ExternalLink
    }
  }

  const getLinkLabel = (linkType: string) => {
    switch (linkType) {
      case 'ios':
        return 'App Store'
      case 'android':
        return 'Play Store'
      case 'website':
        return 'Website'
      default:
        return 'Link'
    }
  }

  return (
    <section id="projects" ref={sectionRef} className="section-compact bg-dark-50 relative">
      <div className="container-max section-padding">
        <div className="text-center mb-8 animate-on-scroll">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-modern">
            Mobile applications and solutions that showcase my technical expertise
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={project.title}
                className="glass-effect rounded-2xl overflow-hidden group animate-on-scroll cyber-border"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center glass-effect rounded-full px-3 py-1 text-sm font-medium font-cyber">
                      <project.icon size={16} className="mr-2 text-neon-cyan" />
                      <span className="text-white">{project.type}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-cyber font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm font-modern">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-neon-purple/10 text-neon-purple group-hover:text-neon-cyan transition-colors duration-300 rounded text-xs font-medium border border-neon-purple/30 font-modern"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {Object.keys(project.links).length > 0 && (
                    <div className="flex flex-wrap gap-3">
                    {Object.entries(project.links).map(([linkType, url]) => {
                      const IconComponent = getLinkIcon(linkType)
                      return (
                        <a
                          key={linkType}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-neon-cyan hover:text-neon-purple font-medium transition-colors duration-300 text-sm font-modern"
                        >
                          <IconComponent size={16} className="mr-2" />
                          {getLinkLabel(linkType)}
                        </a>
                      )
                    })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-4 gap-4">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={project.title}
                className="glass-effect rounded-xl overflow-hidden group animate-on-scroll cyber-border"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-28 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center glass-effect rounded-full px-2 py-1 text-xs font-medium font-cyber">
                      <project.icon size={12} className="mr-1 text-neon-cyan" />
                      <span className="text-white">{project.type}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-cyber font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-3 text-xs leading-relaxed font-modern">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-neon-purple/10 text-neon-purple group-hover:text-neon-cyan transition-colors duration-300 rounded text-xs font-medium border border-neon-purple/30 font-modern"
                      >
                        {tech}
                      </span>
                    ))}
                 
                  </div>

                  {Object.keys(project.links).length > 0 && (
                    <div className="flex flex-wrap gap-2">
                    {Object.entries(project.links).map(([linkType, url]) => {
                      const IconComponent = getLinkIcon(linkType)
                      return (
                        <a
                          key={linkType}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-neon-cyan hover:text-neon-purple text-xs font-medium transition-colors duration-300 font-modern"
                        >
                          <IconComponent size={12} className="mr-1" />
                          {getLinkLabel(linkType)}
                        </a>
                      )
                    })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects