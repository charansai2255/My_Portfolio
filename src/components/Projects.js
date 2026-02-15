import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "EcoTrace",
      subtitle: "QR-Based Product Transparency & Sustainability Tracking",
      description: "A comprehensive web system that revolutionizes product transparency through QR code technology, providing instant access to sustainability metrics and complete product lifecycle information.",
      tech: ["React.js", "Node.js", "MongoDB", "QR API"],
      highlights: [
        "QR-code system for instant sustainability data access",
        "Product lifecycle and batch tracking modules",
        "Secure centralized backend storage"
      ],
      date: "January 2026",
      featured: true
    },
    {
      title: "Tasks Generator",
      subtitle: "AI-Powered Mini Planning Tool",
      description: "A web application that helps generate user stories and engineering tasks from feature ideas using Google Gemini AI. Streamlines project planning with automatic task categorization and multiple export formats.",
      tech: ["Next.js 16", "React 19", "Tailwind CSS", "Gemini AI", "PostgreSQL", "Prisma"],
      highlights: [
        "Generate user stories using Google Gemini 2.5 Flash AI",
        "Automatic task categorization and organization",
        "Export in multiple formats (Copy, TXT, Markdown)",
        "Template selection with risk assessment features"
      ],
      date: "February 2026",
      featured: true
    },
    {
      title: "Decentralized Identity Verification",
      subtitle: "Blockchain-Based Document Authentication",
      description: "A cutting-edge blockchain solution for secure identity verification of documents like passports and certificates, ensuring tamper-proof and instantly verifiable credentials.",
      tech: ["Blockchain", "IPFS", "Ganache", "Web3.js", "React"],
      highlights: [
        "Blockchain-based identity verification system",
        "IPFS decentralized storage integration",
        "Tamper-proof document verification"
      ],
      date: "October 2025",
      featured: true
    },
    {
      title: "Restaurant Reservation System",
      subtitle: "MERN Stack Web Application",
      description: "A full-featured restaurant reservation platform with real-time booking validation, admin dashboard, and comprehensive reservation management.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      highlights: [
        "Full-stack MERN architecture",
        "Real-time booking validation",
        "JWT Authentication & Admin Dashboard"
      ],
      date: "May 2025",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Showcasing my best work in full-stack development, blockchain, and AI integration
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative card-hover">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className={`relative p-8 md:p-10 rounded-3xl ${project.featured ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/5 border-purple-500/20' : 'bg-white/5 border-white/10'} border backdrop-blur-sm group-hover:border-purple-500/40`}>
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      {project.featured && (
                        <span className="px-4 py-1.5 text-xs font-bold bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/30">
                          ⭐ FEATURED
                        </span>
                      )}
                      <span className="text-sm font-mono text-zinc-500">{project.date}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      {project.title}
                    </h3>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 text-sm font-mono mb-4 tracking-wider">
                      {project.subtitle}
                    </p>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm text-zinc-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIdx) => (
                        <span key={techIdx} className="px-3 py-1.5 text-xs font-mono bg-purple-500/10 text-purple-300 rounded-lg border border-purple-500/20">
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
    </section>
  );
};

export default Projects;
