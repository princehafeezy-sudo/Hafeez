import { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight, ExternalLink, Palette, Layout, Printer, Share2, Monitor, Sun, Moon, PenTool } from 'lucide-react';

// --- Theme Context ---
const ThemeContext = createContext({ isLight: false, toggleTheme: () => {} });

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isLight, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img 
            src="https://i.ibb.co/cKxWx2xN/Hafeez-Logo-SVG-01.png" 
            alt="Hafeez Qureshi Logo" 
            className="h-10 w-auto object-contain brightness-110"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-[var(--accent-primary)] transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
          >
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a
            href="https://drive.google.com/file/d/1GRSJBFDwZTHl051CeQqG8U618V8S_DkA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gradient rounded-full text-sm font-bold hover:scale-105 transition-transform"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 glass rounded-full flex items-center justify-center"
          >
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="text-[var(--text-main)]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass md:hidden py-8 px-6 flex flex-col gap-6 items-center"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-[var(--accent-primary)] transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1GRSJBFDwZTHl051CeQqG8U618V8S_DkA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-gradient rounded-full text-center font-bold hover:scale-105 transition-transform"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className={`absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[120px] animate-float ${isLight ? 'bg-[var(--accent-primary)]/10' : 'bg-[var(--accent-primary)]/20'}`} />
      <div className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-[120px] animate-float ${isLight ? 'bg-[var(--accent-secondary)]/10' : 'bg-[var(--accent-secondary)]/20'}`} style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-fit mx-auto text-center md:text-left"
        >
          {/* Top Left: Hi, I'm */}
          <div className="md:absolute -top-6 left-2 md:-top-10 md:left-4 text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[var(--accent-primary)] mb-2 md:mb-0">
            Hi, I'm
          </div>

          {/* Main Text: Hafeez Qureshi */}
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-none text-[var(--text-main)] drop-shadow-lg tracking-tight pt-[11px] font-milkstore">
            Hafeez <span className="text-gradient inline-block pt-[41px] pb-[50px] pr-[39px]">Qureshi</span>
          </h1>

          {/* Down Right: Graphic Designer & Creative Artist */}
          <div className="flex justify-center md:justify-end mt-4 md:mt-6">
            <div className="text-[10px] md:text-xs lg:text-sm font-bold tracking-[0.4em] uppercase text-[#E50914] text-center md:text-right max-w-[250px] md:max-w-none">
              Graphic Designer & Creative Artist
            </div>
          </div>


        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
        <div className="w-[1px] h-16 bg-[var(--accent-primary)]/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [-64, 64] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-transparent via-[var(--accent-primary)] to-transparent"
          />
        </div>
        <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--text-muted)] font-bold">Scroll</span>
      </div>
    </section>
  );
};

const About = () => {
  const { isLight } = useContext(ThemeContext);
  const stats = [
    { label: 'Years Experience', value: '7+' },
    { label: 'Projects Completed', value: '400+' },
    { label: 'Happy Clients', value: '500+' },
  ];

  return (
    <section id="about" className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`aspect-square rounded-3xl overflow-hidden ${isLight ? 'shadow-2xl' : 'glow-purple'}`}>
              <img
                src="https://i.ibb.co/WpfYS4sf/HQ.jpg"
                alt="Hafeez Qureshi"
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl hidden md:block">
              <div className="text-4xl font-display font-black text-[var(--accent-primary)]">7+</div>
              <div className="text-xs uppercase tracking-widest text-[var(--text-muted)]">Years of Expertise</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[var(--accent-secondary)] font-bold tracking-widest uppercase mb-4">About Me</h3>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">
              TRANSFORMING IDEAS INTO <span className="text-gradient">VISUAL REALITY</span>
            </h2>
            <p className="text-[var(--text-muted)] text-lg mb-8 font-light leading-relaxed">
              I am a skilled Graphic Designer with strong experience in both digital and print media. My expertise lies in transforming ideas into visually compelling designs that reflect brand identity and communicate effectively.
            </p>
            <p className="text-[var(--text-muted)] text-lg mb-10 font-light leading-relaxed">
              From branding and logo design to digital illustrations and real estate marketing visuals, I bring a unique blend of creativity and precision to every project.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-display font-black text-[var(--text-main)] mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[var(--accent-primary)] font-bold hover:gap-4 transition-all"
              >
                Let's work together <ChevronRight size={20} />
              </a>
              <a
                href="https://drive.google.com/file/d/1GRSJBFDwZTHl051CeQqG8U618V8S_DkA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient rounded-full text-sm font-bold hover:scale-105 transition-transform"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { isLight } = useContext(ThemeContext);

  const projects = [
    {
      title: 'Branding & Visual Identity',
      category: 'Branding',
      desc: 'Strategic visual identities that define and elevate brand presence.',
      image: 'https://i.ibb.co/q35D74m7/1.jpg',
      gallery: [
        'https://i.ibb.co/NnF35Ryk/2.png',
        'https://i.ibb.co/q35D74m7/1.jpg',
        'https://i.ibb.co/dhFJJz4/3.png',
        'https://i.ibb.co/1G9z78n5/4.jpg',
        'https://i.ibb.co/qMkTDqg3/5.webp',
        'https://i.ibb.co/tMwJbspM/6.jpg',
        'https://i.ibb.co/zWs37sYY/7.jpg',
        'https://i.ibb.co/rfsH5Mp4/8.jpg'
      ],
      tools: ['Photoshop', 'Illustrator'],
      icon: <Layout size={20} />,
    },
    {
      title: 'Advertising & Social Media Campaigns',
      category: 'Marketing',
      desc: 'Engaging digital content designed for maximum social impact and reach.',
      image: 'https://i.ibb.co/GfTbLK0W/1.jpg',
      gallery: [
        'https://i.ibb.co/8gLVvCFD/2.jpg',
        'https://i.ibb.co/GfTbLK0W/1.jpg',
        'https://i.ibb.co/k66N37vz/3.jpg',
        'https://i.ibb.co/NgcvT59L/4.jpg',
        'https://i.ibb.co/3ydXwd1M/6.jpg',
        'https://i.ibb.co/KjZVjZnT/5.jpg',
        'https://i.ibb.co/Q3KbG4wc/7.jpg',
        'https://i.ibb.co/hR8wVBTx/8.jpg'
      ],
      tools: ['Photoshop', 'After Effects'],
      icon: <Share2 size={20} />,
    },
    {
      title: 'Packaging & Product Design',
      category: 'Product Design',
      desc: 'Innovative packaging solutions that stand out on the shelf and tell a story.',
      image: 'https://i.ibb.co/Z63c3SYb/1.jpg',
      gallery: [
        'https://i.ibb.co/Z63c3SYb/1.jpg',
        'https://i.ibb.co/MyGBTc4W/2.jpg',
        'https://i.ibb.co/fzGtkgd2/3.jpg',
        'https://i.ibb.co/DfWxJtSP/4.jpg',
        'https://i.ibb.co/WWkzCNFV/5.jpg',
        'https://i.ibb.co/rffzS4ZC/6.jpg'
      ],
      tools: ['Illustrator', 'Photoshop'],
      icon: <Layout size={20} />,
    },
    {
      title: 'Promotion Gifts & Apparel',
      category: 'Fashion & Gifting',
      desc: 'Custom apparel designs and merchandise that resonate with target audiences.',
      image: 'https://i.ibb.co/MxpXSm53/1-01.jpg',
      gallery: [
        'https://i.ibb.co/5WmQ6dw7/2.jpg',
        'https://i.ibb.co/MxpXSm53/1-01.jpg',
        'https://i.ibb.co/hxgkNC9Q/3.jpg',
        'https://i.ibb.co/PGT9SMQc/4.jpg',
        'https://i.ibb.co/tMP2JzjN/5.jpg',
        'https://i.ibb.co/nMw7CnDb/6.jpg',
        'https://i.ibb.co/93z71pj7/7.jpg',
        'https://i.ibb.co/x8YNq8kJ/8.jpg'
      ],
      tools: ['Illustrator', 'Photoshop'],
      icon: <Palette size={20} />,
    },
    {
      title: 'Signage & Banners',
      category: 'Print Media',
      desc: 'Large-scale visual communications for physical spaces and events.',
      image: 'https://i.ibb.co/xqZFz4FP/1.jpg',
      gallery: [
        'https://i.ibb.co/xqZFz4FP/1.jpg',
        'https://i.ibb.co/whPSW502/2.jpg',
        'https://i.ibb.co/NgzLW2Rk/3.jpg',
        'https://i.ibb.co/kgRs6t1J/4.jpg',
        'https://i.ibb.co/5gvHTPZX/5.jpg',
        'https://i.ibb.co/hxknt90j/7.jpg',
        'https://i.ibb.co/4RPjbKn4/6.jpg',
        'https://i.ibb.co/SXBCvJq0/8.jpg'
      ],
      tools: ['Illustrator', 'InDesign'],
      icon: <Printer size={20} />,
    },
    {
      title: 'Visual & Print Designs',
      category: 'Print Media',
      desc: ' High-quality visual and print materials for various applications and media.',
      image: 'https://i.ibb.co/XkKd9hpd/1.jpg',
      gallery: [
        'https://i.ibb.co/SD7Lftd1/2.jpg',
        'https://i.ibb.co/XkKd9hpd/1.jpg',
        'https://i.ibb.co/9SQPqWb/3.jpg',
        'https://i.ibb.co/KxmwrgQk/4.jpg',
        'https://i.ibb.co/1GTZ3hb7/5.jpg',
        'https://i.ibb.co/jvw7YpRC/6.jpg',
        'https://i.ibb.co/V0LYwbvr/7.jpg',
        'https://i.ibb.co/bg8S4hWf/8.jpg'
      ],
      tools: ['Photoshop', 'Illustrator'],
      icon: <Monitor size={20} />,
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h3 className="text-[var(--accent-primary)] font-bold tracking-widest uppercase mb-4">Portfolio</h3>
            <h2 className="text-4xl md:text-5xl font-display font-black leading-tight">
              FEATURED <span className="text-gradient">WORK</span>
            </h2>
          </div>
          <p className="text-[var(--text-muted)] max-w-md font-light">
            A selection of my most impactful work across branding, digital marketing, and print media. Click on any project to view the full gallery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white text-brand-black rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-[var(--accent-primary)] mb-3">
                  {project.icon}
                  <span className="text-[10px] uppercase font-bold tracking-widest">{project.category}</span>
                </div>
                <h4 className="text-xl font-display font-bold mb-3">{project.title}</h4>
                <p className="text-[var(--text-muted)] text-sm mb-6 font-light line-clamp-2">{project.desc}</p>
                <div className="flex gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-[var(--text-main)]/5 rounded-full text-[10px] text-[var(--text-muted)]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <div className="absolute inset-0 bg-[var(--bg-main)]/95 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] glass rounded-3xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-white/10 flex justify-between items-center bg-[var(--bg-main)]/50">
                <div>
                  <div className="text-[var(--accent-primary)] text-[10px] uppercase font-bold tracking-widest mb-1">{selectedProject.category}</div>
                  <h3 className="text-2xl md:text-3xl font-display font-black">{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-[var(--accent-primary)] transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Gallery Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {(selectedProject.gallery || Array.from({ length: 8 }, (_, i) => ({
                    id: i,
                    url: `https://picsum.photos/seed/${selectedProject.title.replace(/\s+/g, '-').toLowerCase()}-${i}/800/600`
                  }))).map((item: any, i: number) => {
                    const url = typeof item === 'string' ? item : item.url;
                    const id = typeof item === 'string' ? i : item.id;
                    return (
                      <motion.div
                        key={id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.02 }}
                        className="aspect-square rounded-xl overflow-hidden glass group relative"
                      >
                        <img 
                          src={url} 
                          alt={`${selectedProject.title} gallery item ${id}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-[var(--accent-primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Skills = () => {
  const { isLight } = useContext(ThemeContext);
  const skills = [
    { 
      name: 'Adobe Photoshop', 
      level: 75, 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' 
    },
    { 
      name: 'Adobe Illustrator', 
      level: 80, 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg' 
    },
    { name: 'Print Design', level: 85, icon: <Printer size={24} /> },
    { name: 'Branding', level: 92, icon: <Share2 size={24} /> },
    { name: 'Social Media Design', level: 95, icon: <Palette size={24} /> },
    { name: 'IT Support', level: 80, icon: <Monitor size={24} /> },
  ];

  return (
    <section id="skills" className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-[var(--accent-secondary)] font-bold tracking-widest uppercase mb-4">Expertise</h3>
          <h2 className="text-4xl md:text-5xl font-display font-black">
            MY <span className="text-gradient">CREATIVE ARSENAL</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-8 rounded-3xl hover:bg-[var(--text-main)]/10 transition-colors group relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
              
              <div className="w-14 h-14 bg-[var(--text-main)]/5 rounded-2xl flex items-center justify-center mb-6 glow-primary group-hover:scale-110 transition-transform overflow-hidden p-2.5">
                {typeof skill.icon === 'string' ? (
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-full h-full object-contain" 
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="text-[var(--text-main)] group-hover:text-[var(--accent-primary)] transition-colors">
                    {skill.icon}
                  </div>
                )}
              </div>
              
              <h4 className="text-lg font-bold mb-4 group-hover:text-[var(--accent-primary)] transition-colors">{skill.name}</h4>
              
              <div className="w-full h-1.5 bg-[var(--text-main)]/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient"
                />
              </div>
              
              <div className="flex justify-between mt-3">
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest font-medium">Proficiency</span>
                <span className="text-[10px] text-[var(--text-main)] font-bold">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-primary)]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[var(--accent-primary)] font-bold tracking-widest uppercase mb-4">Contact</h3>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">
              LET’S CREATE SOMETHING <span className="text-gradient">EXTRAORDINARY</span>
            </h2>
            <p className="text-[var(--text-muted)] text-lg mb-12 font-light leading-relaxed">
              Ready to elevate your brand with impactful design? Reach out for inquiries, collaborations, or just to say hello.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-[var(--accent-primary)] transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-1">Email Me</div>
                  <div className="text-lg font-bold">ahtpuae@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-[var(--accent-secondary)] transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-1">Call Me</div>
                  <div className="text-lg font-bold">+971 56 342 2849</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-[var(--accent-primary)] transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-1">Location</div>
                  <div className="text-lg font-bold">UAE</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { Icon: Instagram, href: 'https://instagram.com/princehaz2' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/abdul-hafeez-4652931a1/' },
                { Icon: Share2, href: '#' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-[var(--text-main)] hover:text-[var(--bg-main)] transition-all"
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-[var(--text-main)]/5 border border-[var(--text-main)]/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-[var(--text-main)]/5 border border-[var(--text-main)]/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[var(--text-main)]/5 border border-[var(--text-main)]/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[var(--accent-primary)] transition-colors resize-none"
                />
              </div>
              <button className="w-full py-5 bg-gradient rounded-xl font-black uppercase tracking-widest hover:scale-[1.02] transition-transform">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-[var(--text-main)]/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center">
          <img 
            src="https://i.ibb.co/cKxWx2xN/Hafeez-Logo-SVG-01.png" 
            alt="Hafeez Qureshi Logo" 
            className="h-10 w-auto object-contain brightness-110"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="text-[var(--text-muted)] text-sm font-light">
          © {new Date().getFullYear()} Hafeez Qureshi. All rights reserved.
        </div>
        <div className="flex gap-6 items-center">
          {[
            { Icon: Instagram, href: 'https://instagram.com/princehaz2' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/abdul-hafeez-4652931a1/' },
            { Icon: Share2, href: '#' }
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
            >
              <social.Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/971563422849"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all duration-300"
      aria-label="Contact on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </motion.a>
  );
};

export default function App() {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    setIsLight(!isLight);
    document.documentElement.classList.toggle('light');
  };

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeContext.Provider>
  );
}
