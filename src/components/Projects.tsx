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
      description:
        'Astronomical calendar app for the national Nepal Sambat Calendar. Provides festival dates, tithis, and celestial events across AD, BS, and NS calendars, with date conversion functionality. Offers offline-first support and official recognition by the Government of Nepal.',
      image: '/projects/nepal_sambat/collage.png',
      type: 'Mobile App',
      icon: Smartphone,
      technologies: [
        'Android',
        'Kotlin',
        'Lunisolar Calendar Algorithm',
        'Offline-First',
        'Local Persistence'
      ],
      links: {
        ios: 'https://apps.apple.com/np/app/nepal-sambat/id1588617745',
        android:
          'https://play.google.com/store/apps/details?id=com.spiralogics.nepalsambat&hl=en&gl=US'
      },
      featured: true
    },
    {
      title: 'ZONE - Group Voice Chat Room',
      description:
        'Social voice chat platform with real-time voice and chat communication. Supports interactive rooms, games, battles, gifting, parties, VIP subscriptions, level system, and an agency system for user engagement.',
      image: '/projects/zone/collage.jpeg',
      type: 'Mobile App',
      icon: Smartphone,
      technologies: [
        'Flutter',
        'Dart',
        'WebRTC',
        'ZegoCloud SDK',
        'Realtime Chat',
        'Flame Engine',
        'In-app Purchases',
        'Multi-Currency Payments'
      ],
      links: {
        ios: 'https://apps.apple.com/us/app/zone-group-voice-chat-room/id6744646452',
        android: 'https://play.google.com/store/apps/details?id=com.zoneteamx.app&hl=en_US'
      },
      featured: true
    },
    {
      title: 'Entervu',
      description:
        'Professional social media app for short-form video networking. Features swipe-based video navigation, chat capabilities, and built-in video editing tools for seamless content creation and sharing.',
      image: '/projects/entervu/collage.jpeg',
      type: 'Mobile App',
      icon: Smartphone,
      technologies: [
        'Android',
        'Jetpack Compose',
        'ExoPlayer',
        'HLS Streaming',
        'Video Compression',
        'Video Editing',
        'Chat Integration'
      ],
      links: {
        website: 'https://www.entervu.com/'
      },
      featured: true
    },
    {
      title: 'BracketIT',
      description:
        'Sports bracket prediction platform supporting major tournaments such as the FIFA World Cup. Converts traditional paper brackets to digital format with dynamic visualization, leaderboards, and community pools.',
      image: '/projects/bracketit/collage.png',
      type: 'Mobile App',
      icon: Smartphone,
      technologies: ['Flutter', 'CustomPaint', 'Sports Prediction', 'Real-time Updates', 'Cross-Platform'],
      links: {
        website: 'https://bracketlt.spiralogics.com/'
      },
      featured: true
    },
    {
      title: 'Baghchal',
      description:
        'Digital version of the strategic board game Baghchal. Supports play against AI or 1v1 matches with friends, featuring adjustable difficulty and efficient cross-platform rendering.',
      image: '/projects/baghchal/collage.jpeg',
      type: 'Game',
      icon: Globe,
      technologies: ['Kotlin Multiplatform', 'AI Strategy', 'Jetpack Compose', 'CustomPainter'],
      links: {
        website: 'https://baghchal.spiralogics.com/'
      },
      featured: true
    },
    {
      title: 'GetFit',
      description:
        'Fitness competition app that integrates with Strava, enabling users to compete on specific exercises, track performance, and view rankings on leaderboards.',
      image: '/projects/getfit/collage.png',
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
        return 'Check it out!'
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
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={project.title}
                  className="glass-effect-black rounded-2xl overflow-hidden group animate-on-scroll cyber-border"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden">
                    <a href={project.image} target="_blank" rel="noopener noreferrer">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </a>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
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
                    <p className="text-white mb-4 leading-relaxed text-sm font-modern">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-neon-purple/10 text-neon-purple transition-colors duration-300 rounded text-xs font-medium border border-neon-purple/30 font-modern group-hover:text-neon-cyan group-hover:border-neon-cyan group-hover:bg-neon-cyan/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {Object.keys(project.links).length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {Object.entries(project.links).map(([linkType, url]) => {
                          const IconComponent = getLinkIcon(linkType)
                          const iconClass =
                            'mr-2 text-cyan-300 transition-colors duration-300 group-hover:text-neon-cyan group-focus-visible:text-neon-cyan'
                          let gradientClass = ''
                          if (linkType === 'ios') gradientClass = 'gradient-text-ios'
                          else if (linkType === 'android') gradientClass = 'gradient-text-android'
                          else if (linkType === 'website') gradientClass = 'gradient-text-website'
                          const labelClass = `${gradientClass} transition-all duration-300 group-hover:text-neon-cyan group-focus-visible:text-neon-cyan`

                          return (
                            <a
                              key={linkType}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-3 py-1 rounded-lg border border-white/20 bg-black/20 backdrop-blur-md text-cyan-300 font-medium text-sm font-modern transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-black/40 focus-visible:scale-110 focus-visible:-translate-y-1 outline-none"
                              aria-label={getLinkLabel(linkType)}
                            >
                              <IconComponent size={16} className="mr-2" />
                              <span>{getLinkLabel(linkType)}</span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>

          {/* Other Projects */}
          {projects.filter((p) => !p.featured).length > 0 && (
            <div className="text-center mb-3 animate-on-scroll">
              <h2 className="section-title">More Projects</h2>
            </div>
          )}
          <div className="grid md:grid-cols-4 gap-4">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <div
                  key={project.title}
                  className="glass-effect-black rounded-xl overflow-hidden group animate-on-scroll cyber-border"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <a href={project.image} target="_blank" rel="noopener noreferrer">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-28 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </a>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
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
                    <p className="text-white mb-3 text-xs leading-relaxed font-modern">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-neon-purple/10 text-neon-purple transition-colors duration-300 rounded text-xs font-medium border border-neon-purple/30 font-modern group-hover:text-neon-cyan group-hover:border-neon-cyan group-hover:bg-neon-cyan/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {Object.keys(project.links).length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(project.links).map(([linkType, url]) => {
                          const IconComponent = getLinkIcon(linkType)
                          const iconClass =
                            'mr-1 text-cyan-300 transition-colors duration-300 group-hover:text-neon-cyan group-focus-visible:text-neon-cyan'
                          let gradientClass = ''
                          if (linkType === 'ios') gradientClass = 'gradient-text-ios'
                          else if (linkType === 'android') gradientClass = 'gradient-text-android'
                          else if (linkType === 'website') gradientClass = 'gradient-text-website'
                          const labelClass = `${gradientClass} transition-all duration-300 group-hover:text-neon-cyan group-focus-visible:text-neon-cyan`

                           return (
                            <a
                              key={linkType}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-3 py-1 rounded-lg border border-white/20 bg-black/20 backdrop-blur-md text-cyan-300 font-medium text-sm font-modern transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-black/40 focus-visible:scale-110 focus-visible:-translate-y-1 outline-none"
                              aria-label={getLinkLabel(linkType)}
                            >
                              <IconComponent size={16} className="mr-2" />
                              <span>{getLinkLabel(linkType)}</span>
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
