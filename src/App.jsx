import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, ExternalLink, Phone, Mail, MessageCircle, Sun, Moon } from 'lucide-react';

// --- Custom Styles for Shimmer ---
const globalCss = `
  /* Button Shimmer Animation */
  @keyframes sweep {
    0% { transform: translateX(-150%) skewX(-15deg); }
    100% { transform: translateX(250%) skewX(-15deg); }
  }
  
  .btn-shimmer {
    position: relative;
    overflow: hidden;
  }
  
  .btn-shimmer::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
    transform: translateX(-150%) skewX(-15deg);
    animation: sweep 3s infinite ease-in-out;
    pointer-events: none;
  }
`;

// --- Custom SVGs for missing Lucide brand icons ---
const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isDark, setIsDark] = useState(true);

  // Smooth scroll to top when changing tabs
  useEffect(() => {
    const mainContent = document.getElementById('main-scroll-area');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  return (
    <>
      <style>{globalCss}</style>
      
      <div className={`min-h-screen transition-colors duration-500 font-sans relative overflow-hidden flex justify-center items-center p-4 md:p-8 ${
        isDark ? 'bg-[#050505] text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}>
        
        {/* --- FIXED: Animated Background GIF --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <img 
            // This is the exact GIF URL you requested
            src="https://i.pinimg.com/originals/af/7b/6e/af7b6ee82ae6de2df640d6d40c8fe8a4.gif" 
            alt="Cyber Background" 
            className={`w-full h-full object-cover transition-opacity duration-1000 ${isDark ? 'opacity-60 mix-blend-screen' : 'opacity-10 mix-blend-multiply'}`}
          />
          {/* Changed from a solid gradient to a uniform wash so the GIF is highly visible */}
          <div className={`absolute inset-0 transition-colors duration-1000 ${isDark ? 'bg-[#050505]/70' : 'bg-slate-50/80'}`}></div>
        </div>

        {/* Subtle Background Glows */}
        <div className={`absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] pointer-events-none transition-colors duration-700 z-0 ${
          isDark ? 'bg-indigo-900/20' : 'bg-blue-300/30'
        }`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full blur-[120px] pointer-events-none transition-colors duration-700 z-0 ${
          isDark ? 'bg-cyan-900/10' : 'bg-indigo-300/30'
        }`}></div>

        {/* Main Container */}
        <div className={`relative w-full max-w-7xl h-[90vh] backdrop-blur-3xl border rounded-[2.5rem] flex overflow-hidden shadow-2xl transition-all duration-500 z-10 ${
          isDark ? 'bg-white/[0.02] border-white/5 shadow-black/50' : 'bg-white/60 border-white/80 shadow-slate-200/50'
        }`}>
          
          {/* Sidebar Navigation */}
          <nav className={`hidden md:flex w-24 flex-col items-center py-10 gap-8 z-20 border-r transition-colors duration-500 shrink-0 ${
            isDark ? 'border-white/5 bg-black/20' : 'border-slate-200/50 bg-white/40'
          }`}>
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 p-[2px] mb-4 shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
              <img 
                src="/profile.png" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover border-2 border-transparent" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://ui-avatars.com/api/?name=Sadiq+Pathan&background=random'; 
                }}
              />
            </div>
            
            <NavIcon icon={<Home />} active={activeTab === 'home'} onClick={() => setActiveTab('home')} isDark={isDark} />
            <NavIcon icon={<User />} active={activeTab === 'about'} onClick={() => setActiveTab('about')} isDark={isDark} />
            <NavIcon icon={<Code />} active={activeTab === 'skills'} onClick={() => setActiveTab('skills')} isDark={isDark} />
            <NavIcon icon={<Briefcase />} active={activeTab === 'projects'} onClick={() => setActiveTab('projects')} isDark={isDark} />
          </nav>

          {/* Main Content Area */}
          <main id="main-scroll-area" className="flex-1 flex flex-col h-full overflow-y-auto hide-scrollbar scroll-smooth relative z-10">
            
            {/* Header Area */}
            <header className={`relative lg:sticky top-0 z-30 flex flex-col lg:flex-row justify-between items-start lg:items-center p-6 md:px-12 backdrop-blur-xl border-b transition-all duration-500 ${
              isDark ? 'bg-[#050505]/90 lg:bg-black/40 border-white/5' : 'bg-white/95 lg:bg-white/70 border-slate-200/50'
            }`}>
              <div className="mb-6 lg:mb-0 w-full">
                <h1 className={`text-3xl md:text-4xl font-bold tracking-tight mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Mohammed Sadiq Zakir Pathan
                </h1>
                <p className={`font-medium text-sm md:text-base ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>
                  Full-Stack Developer | Final-Year Computer Engineering Student
                </p>
              </div>
              
              <div className="flex items-center gap-3 w-full lg:w-auto">
                {/* Theme Toggle Button */}
                <button 
                  onClick={() => setIsDark(!isDark)}
                  className={`p-3 rounded-full border shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer shrink-0 ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700 text-yellow-400 hover:bg-slate-700' 
                      : 'bg-white border-slate-200 text-indigo-600 hover:bg-slate-50'
                  }`}
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun size={20} fill="currentColor" /> : <Moon size={20} fill="currentColor" />}
                </button>

                {/* Shimmering GitHub Button */}
                <a 
                  href="https://github.com/0101-lucifer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`btn-shimmer flex items-center justify-center gap-2 px-5 py-3 rounded-full border shadow-lg transition-all duration-300 hover:scale-105 font-semibold flex-1 lg:flex-none cursor-pointer text-sm md:text-base ${
                    isDark 
                      ? 'bg-indigo-600 hover:bg-indigo-500 border-indigo-500 text-white shadow-indigo-900/50' 
                      : 'bg-indigo-600 hover:bg-indigo-700 border-indigo-600 text-white shadow-indigo-200/50'
                  }`}
                >
                  <span className="truncate">GitHub (@0101-lucifer)</span>
                  <ExternalLink size={18} className="shrink-0" />
                </a>
              </div>
            </header>

            {/* Scrollable Content Container */}
            <div className="p-5 sm:p-8 md:p-12 pb-32 md:pb-12">
              {}
              {activeTab === 'home' && (
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 animate-fade-in">
                  <div className="xl:col-span-1 flex flex-col gap-8">
                    <AboutCard isDark={isDark} />
                    <SkillsCard isDark={isDark} /> 
                  </div>
                  <div className="xl:col-span-2 flex flex-col gap-6">
                    <h2 className={`text-2xl font-bold ml-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>Featured Projects</h2>
                    <ProjectList isDark={isDark} />
                  </div>
                </div>
              )}

              {}
              {activeTab === 'about' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in max-w-5xl mx-auto">
                  <AboutCard isDark={isDark} expanded />
                  <ConnectCard isDark={isDark} />
                </div>
              )}

              {}
              {activeTab === 'skills' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in max-w-6xl mx-auto">
                  <div className="flex flex-col gap-8">
                    <SkillCategory isDark={isDark} title="Frontend & UI" skills={['React', 'Tailwind CSS', 'HTML5', 'CSS3']} color="blue" />
                    <SkillCategory isDark={isDark} title="Backend & Cloud" skills={['Node.js', 'AWS', 'MongoDB', 'Firebase', 'REST APIs']} color="green" />
                    <SkillCategory isDark={isDark} title="Languages" skills={['JavaScript', 'Python', 'C/C++']} color="yellow" />
                  </div>
                  <div className="flex flex-col gap-8">
                    <SkillCategory isDark={isDark} title="Specialized Concepts" skills={['Cybersecurity & Cryptography', 'AI Search Strategies', 'Network Protocols', 'Compiler Design (LEX/YACC)', 'Pygame']} color="purple" />
                    <EducationCard isDark={isDark} />
                  </div>
                </div>
              )}

              {}
              {activeTab === 'projects' && (
                <div className="max-w-4xl mx-auto flex flex-col gap-6 animate-fade-in pb-10">
                  <h2 className={`text-2xl font-bold ml-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>All Projects</h2>
                  <ProjectList isDark={isDark} />
                </div>
              )}
            </div>

          </main>
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className={`md:hidden fixed bottom-4 left-4 right-4 flex justify-around items-center p-3 rounded-3xl backdrop-blur-xl border shadow-2xl z-50 transition-colors duration-500 ${
          isDark ? 'bg-[#050505]/95 border-slate-700/50' : 'bg-white/95 border-slate-200/80'
        }`}>
          <NavIcon icon={<Home />} active={activeTab === 'home'} onClick={() => setActiveTab('home')} isDark={isDark} mobile />
          <NavIcon icon={<User />} active={activeTab === 'about'} onClick={() => setActiveTab('about')} isDark={isDark} mobile />
          <NavIcon icon={<Code />} active={activeTab === 'skills'} onClick={() => setActiveTab('skills')} isDark={isDark} mobile />
          <NavIcon icon={<Briefcase />} active={activeTab === 'projects'} onClick={() => setActiveTab('projects')} isDark={isDark} mobile />
        </nav>
      </div>
    </>
  );
};

const GlassCard = ({ children, className = "", isDark }) => (
  <div className={`p-8 rounded-[2rem] backdrop-blur-xl border shadow-xl transition-all duration-500 ${
    isDark 
      ? 'bg-white/[0.03] border-white/10 shadow-black/20 hover:bg-white/[0.05]' 
      : 'bg-white/60 border-white/80 shadow-slate-200/50 hover:bg-white/80'
  } ${className}`}>
    {children}
  </div>
);

const AboutCard = ({ isDark, expanded }) => (
  <GlassCard isDark={isDark}>
    <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>About Me</h2>
    <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'} ${expanded ? 'text-base' : 'text-sm'}`}>
      Full-stack developer focused on creating scalable web applications. Currently building at Anjuman-I-Islam's Kalsekar Technical Campus. Certified by Samsung Innovation Campus and actively participating in hackathons like the Meta PyTorch OpenEnv.
    </p>
    {expanded && (
      <p className={`leading-relaxed mt-4 text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
        Passionate about combining robust backend architectures with seamless, modern front-end experiences. Always exploring new paradigms in AI and Cloud infrastructure.
      </p>
    )}
  </GlassCard>
);

const SkillsCard = ({ isDark }) => (
  <GlassCard isDark={isDark}>
    <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Top Skills</h2>
    <div className="flex flex-wrap gap-3">
      <SkillBadge name="React" isDark={isDark} />
      <SkillBadge name="Node.js" isDark={isDark} />
      <SkillBadge name="AWS" isDark={isDark} />
      <SkillBadge name="Tailwind" isDark={isDark} />
      <SkillBadge name="Python" isDark={isDark} />
    </div>
  </GlassCard>
);

const SkillCategory = ({ title, skills, isDark, color }) => (
  <GlassCard isDark={isDark}>
    <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    <div className="flex flex-wrap gap-3">
      {skills.map(skill => (
        <SkillBadge key={skill} name={skill} isDark={isDark} color={color} />
      ))}
    </div>
  </GlassCard>
);

const EducationCard = ({ isDark }) => (
  <GlassCard isDark={isDark}>
    <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Education & Certifications</h2>
    <div className="space-y-6">
      <div className="relative pl-6 border-l-2 border-indigo-500/30">
        <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
        <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>B.E. Computer Engineering</h3>
        <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Anjuman-I-Islam's Kalsekar Technical Campus</p>
        <p className="text-xs font-semibold text-indigo-500 mt-1 uppercase tracking-wider">Final Year (Current)</p>
      </div>
      <div className="relative pl-6 border-l-2 border-cyan-500/30">
        <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
        <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>Samsung Innovation Campus</h3>
        <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Certified Participant</p>
      </div>
      <div className="relative pl-6 border-l-2 border-pink-500/30">
        <div className="absolute w-3 h-3 bg-pink-500 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
        <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>Meta PyTorch OpenEnv</h3>
        <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Hackathon Participant</p>
      </div>
    </div>
  </GlassCard>
);

const ConnectCard = ({ isDark }) => (
  <GlassCard isDark={isDark}>
    <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Let's Connect</h2>
    <div className="flex flex-col gap-4">
      <SocialLink icon={<LinkedinIcon size={20} />} label="LinkedIn" href="https://www.linkedin.com/in/sadiq-pathan-62588b39b" isDark={isDark} />
      <SocialLink icon={<InstagramIcon size={20} />} label="Instagram (@0101_lucifer)" href="https://instagram.com/0101_lucifer" isDark={isDark} />
      <SocialLink icon={<MessageCircle size={20} />} label="WhatsApp" href="https://wa.me/919152531891" isDark={isDark} />
      <SocialLink icon={<Phone size={20} />} label="+91 9152531891" href="tel:+919152531891" isDark={isDark} />
      <SocialLink icon={<Mail size={20} />} label="sadiqpathan0304@gmail.com" href="mailto:sadiqpathan0304@gmail.com" isDark={isDark} />
    </div>
  </GlassCard>
);

const ProjectList = ({ isDark }) => (
  <>
    <ProjectCard 
      title="DevFusion"
      description="A comprehensive web project and agency platform built from the ground up to handle modern development workflows."
      tech={['React', 'Node.js', 'Tailwind', 'MongoDB']}
      link="https://spwebagency-f7663.web.app/"
      isDark={isDark}
    />
    <ProjectCard 
      title="ai-stylist"
      description="An AI-powered e-commerce application designed to provide intelligent styling recommendations directly to users."
      tech={['React', 'Firebase', 'AI Integrations']}
      link="https://sadiq-s-e-commerce.web.app/"
      isDark={isDark}
    />
  </>
);

const NavIcon = ({ icon, active, onClick, isDark, mobile }) => {
  const activeClass = isDark 
    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50 scale-110' 
    : 'bg-indigo-500 text-white shadow-lg shadow-indigo-200/50 scale-110';
  
  const inactiveClass = isDark
    ? 'text-slate-400 hover:text-white hover:bg-white/5 hover:scale-105'
    : 'text-slate-500 hover:text-slate-900 hover:bg-black/5 hover:scale-105';

  return (
    <div 
      onClick={onClick}
      className={`p-3 md:p-4 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-center ${
        active ? activeClass : inactiveClass
      } ${mobile ? 'flex-1 mx-1' : 'w-full'}`}
    >
      {React.cloneElement(icon, { size: mobile ? 20 : 24 })}
    </div>
  );
};

const SkillBadge = ({ name, isDark }) => {
  const baseClasses = "px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-default hover:scale-105 shadow-sm border";
  const darkClass = "bg-white/[0.05] text-slate-200 border-white/10 hover:border-white/30 hover:bg-white/10";
  const lightClass = "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:shadow-md hover:shadow-slate-200";
  
  return (
    <span className={`${baseClasses} ${isDark ? darkClass : lightClass}`}>
      {name}
    </span>
  );
};

const SocialLink = ({ icon, label, href, isDark }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group hover:-translate-y-1 border shadow-sm cursor-pointer ${
      isDark 
        ? 'bg-white/[0.03] border-white/5 hover:bg-white/[0.08] hover:border-white/20 text-slate-300 hover:text-white hover:shadow-black/40' 
        : 'bg-white/50 border-slate-200/50 hover:bg-white text-slate-600 hover:text-slate-900 hover:shadow-slate-200/50'
    }`}
  >
    <div className={`transition-colors duration-300 ${isDark ? 'text-indigo-400 group-hover:text-indigo-300' : 'text-indigo-500 group-hover:text-indigo-600'}`}>
      {icon}
    </div>
    <span className="text-sm font-medium truncate">
      {label}
    </span>
  </a>
);

const ProjectCard = ({ title, description, tech, link, isDark }) => (
  <div className={`p-8 rounded-[2rem] backdrop-blur-xl border shadow-xl transition-all duration-500 hover:-translate-y-1 ${
    isDark 
      ? 'bg-white/[0.03] border-white/10 shadow-black/30 hover:shadow-black/50 hover:bg-white/[0.05]' 
      : 'bg-white/80 border-white shadow-slate-200/50 hover:shadow-slate-300/60'
  }`}>
    <div className="flex flex-col h-full justify-between gap-6">
      <div>
        <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
        <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{description}</p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-2">
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span key={i} className={`px-3 py-1 text-xs font-semibold rounded-lg ${
              isDark ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-600'
            }`}>
              {t}
            </span>
          ))}
        </div>
        <a 
          href={link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-shimmer relative overflow-hidden flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 shrink-0 shadow-md cursor-pointer ${
            isDark 
              ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-900/50' 
              : 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-indigo-200/50'
          }`}
        >
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  </div>
);

export default Portfolio;