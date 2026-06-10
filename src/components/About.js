import React from 'react';

const About = () => {
  const certifications = [
    { name: "Data Analytics Job Simulation", issuer: "Deloitte", date: "Jul 2025" },
    { name: "Python for Data Science", issuer: "IBM", date: "Jun 2025" },
    { name: "Java Advanced", issuer: "Oracle", date: "Sep 2024" }
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="prose prose-lg prose-invert">
              <p className="text-lg text-zinc-300 leading-relaxed">
                I'm a Computer Science student at <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">Geethanjali College of Engineering and Technology</span>, passionate about building impactful solutions that blend innovation with sustainability.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                From blockchain-based identity systems to AI-powered planning tools, I focus on creating technology that solves real-world problems. My expertise spans the full stack, with a particular interest in emerging technologies like blockchain and artificial intelligence.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                With <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">300+ DSA problems</span> solved across competitive programming platforms, I combine strong algorithmic thinking with practical development skills to deliver robust, scalable solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 backdrop-blur-sm card-hover">
                <div className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">7.6</div>
                <div className="text-sm text-zinc-500 mt-1">GPA</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 backdrop-blur-sm card-hover">
                <div className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">4+</div>
                <div className="text-sm text-zinc-500 mt-1">Projects</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 backdrop-blur-sm card-hover">
                <div className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">300+</div>
                <div className="text-sm text-zinc-500 mt-1">Problems</div>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Certifications */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 backdrop-blur-sm card-hover">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">Education</h3>
                  <p className="text-sm text-zinc-500">Current</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Bachelor of Technology in CSE</h4>
                <p className="text-sm text-zinc-400 mb-1">Geethanjali College of Engineering and Technology</p>
                <p className="text-sm text-zinc-500">Oct 2022 – May 2026• Hyderabad</p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">GPA: 7.6</span>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm card-hover">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">Certifications</h3>
                  <p className="text-sm text-zinc-500">Professional</p>
                </div>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="border-l-2 border-purple-500 pl-4 py-2">
                    <h4 className="font-semibold text-white">{cert.name}</h4>
                    <p className="text-sm text-zinc-400 mt-1">{cert.issuer} · {cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
