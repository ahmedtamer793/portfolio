import React, { useState, useEffect } from 'react';
import './index.css';
import {
  Download, ArrowDown, Database, ShieldCheck,
  Server, Brain, ArrowUpRight, Menu, X,
  Terminal, CheckCircle2, Github, ExternalLink, Zap,
  Linkedin, MessageCircle
} from 'lucide-react';

declare const AOS: any;

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // 🔴 تشغيل الأنيميشن "على الرايق"
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out-cubic',
      offset: 100,
    });

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

  const skillCategories = [
    {
      title: "Core Backend Engineering",
      icon: Server,
      description: "Building robust, scalable logic and APIs.",
      skills: ["Java SE / EE", "Spring Boot", "RESTful APIs", "OOP Principles"]
    },
    {
      title: "Quality Assurance & Testing",
      icon: ShieldCheck,
      description: "Ensuring zero-defect deployment.",
      skills: ["Software Testing", "ISTQB Standards", "JUnit & Mockito", "Test Automation"]
    },
    {
      title: "Database & Architecture",
      icon: Database,
      description: "Designing efficient data structures.",
      skills: ["SQL / Oracle", "Data Normalization", "Clean Architecture", "SOLID Principles"]
    },
    {
      title: "Problem Solving & Logic",
      icon: Brain,
      description: "Tackling complex algorithmic challenges.",
      skills: ["Codeforces Problem Solving", "Data Structures", "Algorithms", "CS50 Mentoring"]
    }
  ];

  // 🔴 حط لينكات مشاريعك الحقيقية هنا مكان علامة الـ #
  const projectsData = [
    {
      name: 'Car Rental Management System',
      desc: 'Enterprise-level backend handling vehicle inventory, customer leases, and payment processing with zero-data-loss architecture.',
      link: 'https://github.com/ahmedtamer793/Car-Rental-System-Project'
    },
    {
      name: 'Customer Service Queue Module',
      desc: 'High-throughput queuing system utilizing advanced Data Structures to manage real-time customer service requests efficiently.',
      link: 'https://github.com/ahmedtamer793/Customer-Service'
    },
    {
      name: 'Online Food Ordering System',
      desc: 'Scalable RESTful API architecture connecting users, restaurants, and delivery drivers with real-time state management.',
      link: 'https://github.com/ahmedtamer793/Online-Food-Ordering-System'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 🔴 الإيميل المتجهز بالمسافات والسطور
  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    "&to=ahmedtamr8491@gmail.com" +
    "&su=" + encodeURIComponent("Hiring Inquiry - Backend Project") +
    "&body=" + encodeURIComponent(
      `Hello Ahmed,\n\nI came across your portfolio and I would like to discuss a potential project with you.\n\nProject Details:\n- \n- \n\nBest Regards,`
    );

  return (
    // ضفت overflow-x-hidden عشان السكرول الجانبي
    <div className="min-h-screen selection:bg-[hsl(188,100%,50%)] selection:text-black font-sans bg-black overflow-x-hidden">

      {/* SECTION 1: Navbar (Premium) */}
      <header className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 rounded-full px-6 py-4 flex items-center justify-between ${scrolled ? 'bg-black/80 backdrop-blur-2xl border border-[hsl(188,100%,50%)]/30 shadow-[0_0_30px_rgba(0,229,255,0.15)]' : 'bg-transparent border-transparent'}`}>

        <div onClick={scrollToTop} className="text-2xl font-bold tracking-tight z-50 hover:scale-105 transition-transform cursor-pointer group">
          <span className="text-white group-hover:text-[hsl(0,0%,95%)] transition-colors">Ahmed Tamer</span>
          <span className="text-[hsl(188,100%,50%)] glow-cyan">.</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm uppercase tracking-widest text-[hsl(0,0%,95%)]/70 hover:text-white hover:bg-[hsl(0,0%,95%)]/10 px-4 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:-translate-y-0.5">
              {link}
            </a>
          ))}
        </nav>

        <a href="./assets/Ahmed_Tamer_CV.pdf" download className="hidden md:flex items-center gap-2 bg-[hsl(0,0%,95%)] text-[hsl(0,0%,12%)] px-2 py-2 pr-6 rounded-full font-bold hover:bg-[hsl(188,100%,50%)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] transition-all duration-300 group">
          <div className="bg-[hsl(0,0%,12%)] p-2 rounded-full text-white group-hover:bg-black transition-colors">
            <Download size={16} className="group-hover:animate-bounce" />
          </div>
          Download CV
        </a>

        <button className="md:hidden z-50 text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>

        {menuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-3xl rounded-3xl flex flex-col items-center justify-center gap-8 -z-10 border border-[hsl(188,100%,50%)]/20 animate-in fade-in zoom-in duration-300">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-3xl uppercase tracking-widest text-[hsl(0,0%,95%)]/70 hover:text-[hsl(188,100%,50%)] hover:glow-cyan-text transition-all" onClick={() => setMenuOpen(false)}>
                {link}
              </a>
            ))}
            <a href="./assets/Ahmed_Tamer_CV.pdf" download className="mt-8 flex items-center gap-3 bg-[hsl(188,100%,50%)] text-black px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(0,229,255,0.4)]">
              <Download size={20} />
              Download CV
            </a>
          </div>
        )}
      </header>

      {/* SECTION 2: Hero */}
      <section className="relative h-screen flex flex-col justify-center px-7 md:px-12 lg:px-20 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-matrix opacity-20 animate-[grid-move_20s_linear_infinite]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(188,100%,50%)]/20 blur-[120px] rounded-full -z-10 animate-pulse" />

        <div className="relative z-10 max-w-4xl mt-16 group">
          <div data-aos="fade-down" className="inline-block border border-[hsl(188,100%,50%)]/50 text-[hsl(188,100%,50%)] uppercase tracking-widest text-xs px-5 py-2 rounded-full mb-8 bg-[hsl(188,100%,50%)]/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.2)]">
            Backend & Quality Engineer
          </div>
          <h1 data-aos="fade-up" data-aos-delay="200" className="text-5xl md:text-7xl lg:text-[90px] font-extrabold leading-[1.05] mb-8 tracking-tight">
            Engineered for <span className="text-gradient drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">precision.</span><br />
            Built to scale.
          </h1>
          <p data-aos="fade-up" data-aos-delay="400" className="text-lg md:text-2xl text-[hsl(0,0%,95%)]/70 mb-12 max-w-2xl font-light leading-relaxed">
            Hi, I'm <strong className="text-white font-bold text-2xl">Ahmed Tamer</strong> — Crafting fault-tolerant backend architectures and enforcing strict software quality standards.
          </p>
          <div data-aos="fade-up" data-aos-delay="600" className="flex flex-wrap items-center gap-6">
            <a href="#projects" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[hsl(188,100%,50%)] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] hover:-translate-y-1 group/btn">
              Explore Projects
              <ArrowDown size={20} className="group-hover/btn:animate-bounce" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 text-white/70 hover:text-[hsl(188,100%,50%)] hover:glow-cyan-text transition-all text-lg font-medium group/link">
              <Terminal size={22} className="group-hover/link:text-[hsl(188,100%,50%)] transition-colors" /> Let's Connect
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: About & Assets Images */}
      <section id="about" className="px-7 py-32 md:px-12 lg:px-20 max-w-7xl mx-auto relative border-t border-white/5">
        <div className="absolute right-0 top-1/2 w-1/2 h-1/2 bg-[hsl(188,100%,50%)]/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[hsl(188,100%,50%)] shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
              <span className="text-sm uppercase tracking-widest text-[hsl(188,100%,50%)] font-bold">Behind The Code</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
              Bridging theory with <br /><span className="text-gradient">production logic.</span>
            </h2>
            <div className="space-y-6 text-[hsl(0,0%,95%)]/70 text-lg leading-relaxed">
              <p>
                As a <strong className="text-white">Technical Ambassador at the Information Technology Institute (ITI)</strong>, I mentor over 100 students in the prestigious CS50 program, breaking down complex computer science fundamentals and fostering a deep understanding of algorithms.
              </p>
              <p>
                Currently pursuing my Bachelor's in Business Information Systems (BIS) with a <strong className="text-[hsl(188,100%,50%)] glow-cyan font-bold text-xl">3.79 GPA</strong>. My academic journey uniquely blends rigorous software engineering practices—further enhanced by my participation in the <strong className="text-white">DEPI software testing track</strong>—with strategic business insights.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[hsl(188,100%,50%)]/40 transition-all duration-500 hover:-translate-y-2 group">
                <div className="text-5xl font-black text-white mb-2 group-hover:text-[hsl(188,100%,50%)] group-hover:glow-cyan-text transition-all">3.79</div>
                <div className="text-sm text-white/50 uppercase tracking-widest font-semibold">Current GPA</div>
              </div>
              <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[hsl(188,100%,50%)]/40 transition-all duration-500 hover:-translate-y-2 group">
                <div className="text-5xl font-black text-white mb-2 group-hover:text-[hsl(188,100%,50%)] group-hover:glow-cyan-text transition-all">100+</div>
                <div className="text-sm text-white/50 uppercase tracking-widest font-semibold">Students Mentored</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex gap-4 h-[450px] md:h-[600px] relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-[hsl(188,100%,50%)]/20 blur-[100px] rounded-full -z-10 animate-pulse" />

            <div className="w-1/2 rounded-[2rem] border border-white/10 overflow-hidden relative translate-y-8 group hover:border-[hsl(188,100%,50%)]/50 transition-all duration-700 shadow-2xl hover:shadow-[0_0_40px_rgba(0,229,255,0.2)]">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10" />
              <img src="./assets/images/profile.jpg" alt="Ahmed Tamer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
            </div>

            <div className="w-1/2 flex flex-col gap-4">
              <div className="h-1/2 rounded-[2rem] border border-white/10 overflow-hidden bg-white/5 p-6 flex items-center justify-center group hover:bg-white/10 hover:border-[hsl(188,100%,50%)]/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]">
                <img src="./assets/images/iti.png" alt="ITI" className="object-contain w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-500" />
              </div>
              <div className="h-1/2 rounded-[2rem] border border-white/10 overflow-hidden bg-white/5 p-6 flex items-center justify-center group hover:bg-white/10 hover:border-[hsl(188,100%,50%)]/40 transition-all duration-500 hover:translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]">
                <img src="./assets/images/nlogo.png" alt="University Logo" className="object-contain w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Skills */}
      <section id="skills" className="relative py-32 bg-black border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[hsl(188,100%,50%)]/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-7 md:px-12 lg:px-20 relative z-10">
          <div className="text-center mb-24" data-aos="fade-up">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Technical <span className="text-[hsl(0,0%,95%)]/20">Arsenal</span></h2>
            <p className="text-[hsl(0,0%,95%)]/60 text-xl max-w-2xl mx-auto font-light">
              A comprehensive toolset combining strict architectural principles with robust problem-solving capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <div key={idx} data-aos="zoom-in-up" data-aos-delay={idx * 150} className="group bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-10 hover:bg-white/[0.04] hover:border-[hsl(188,100%,50%)]/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,229,255,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(188,100%,50%)]/5 rounded-full blur-[80px] -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <div className="p-5 rounded-3xl bg-black border border-white/10 group-hover:border-[hsl(188,100%,50%)]/50 transition-colors shadow-xl">
                    <category.icon className="w-8 h-8 text-[hsl(188,100%,50%)] group-hover:glow-cyan group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[hsl(188,100%,50%)] transition-colors">{category.title}</h3>
                    <p className="text-base text-[hsl(0,0%,95%)]/50 mt-2">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 bg-black/60 rounded-2xl p-4 border border-white/5 group-hover:border-white/10 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(188,100%,50%)]/80 drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]" />
                      <span className="text-white/80 text-sm font-semibold tracking-wide">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Projects */}
      <section id="projects" className="relative py-32 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
          <div className="flex items-center gap-4 mb-20" data-aos="fade-right">
            <div className="h-px w-12 bg-[hsl(188,100%,50%)] shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
            <span className="text-sm uppercase tracking-widest text-[hsl(188,100%,50%)] font-bold">Selected Works</span>
          </div>

          <div className="flex flex-col gap-8">
            {projectsData.map((project, i) => (
              <div key={i} data-aos="fade-up" className="group relative overflow-hidden bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-14 transition-all duration-700 hover:border-[hsl(188,100%,50%)]/40 hover:shadow-[0_0_60px_rgba(0,229,255,0.1)] flex flex-col md:flex-row md:items-center justify-between gap-10 transform hover:-translate-y-2">

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(188,100%,50%)]/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                <div className="absolute top-0 left-0 w-2 h-full bg-[hsl(188,100%,50%)] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500 shadow-[0_0_20px_rgba(0,229,255,0.8)]" />

                <div className="relative z-10 max-w-2xl">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 group-hover:text-[hsl(188,100%,50%)] group-hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.3)] transition-all duration-500">
                    {project.name}
                  </h3>
                  <p className="text-[hsl(0,0%,95%)]/60 text-lg leading-relaxed mb-8">
                    {project.desc}
                  </p>
                  <div className="flex items-center gap-4">
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white bg-white/10 hover:bg-[hsl(188,100%,50%)] hover:text-black px-6 py-3 rounded-full font-bold transition-all duration-300">
                      <Github size={18} /> View on GitHub
                    </a>
                  </div>
                </div>

                <a href={project.link} target="_blank" rel="noreferrer" className="relative z-10 w-20 h-20 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-[hsl(188,100%,50%)] group-hover:border-transparent group-hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all duration-500 hover:scale-110">
                  <ExternalLink className="w-8 h-8 text-white/50 group-hover:text-black transition-colors" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Contact & Footer */}
      <section id="contact" className="px-7 py-32 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div data-aos="zoom-in" className="relative rounded-[3rem] overflow-hidden border border-[hsl(188,100%,50%)]/30 bg-black group hover:border-[hsl(188,100%,50%)]/60 transition-colors duration-700">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[hsl(188,100%,50%)]/5 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.15),transparent_70%)] group-hover:scale-110 transition-transform duration-1000" />

          <div className="relative z-10 p-12 md:p-24 text-center max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-black border border-[hsl(188,100%,50%)]/30 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(0,229,255,0.2)] group-hover:shadow-[0_0_50px_rgba(0,229,255,0.6)] transition-all duration-700">
              <Zap className="w-10 h-10 text-[hsl(188,100%,50%)] animate-pulse" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-white group-hover:text-gradient transition-all duration-500">
              Ready to architect <br className="hidden md:block" /> the next system?
            </h2>
            <p className="text-xl text-[hsl(0,0%,95%)]/60 mb-12 max-w-2xl mx-auto font-light">
              Whether it's writing clean Java backend code, ensuring quality through rigorous testing, or solving complex algorithms. Let's talk.
            </p>

            <a
              href={gmailLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 bg-[hsl(188,100%,50%)] text-black px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:scale-105"
            >
              Email Me Directly
              <ArrowUpRight size={26} />
            </a>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-6 mt-16 pt-12 border-t border-white/10">
              <a href="https://github.com/ahmedtamer793" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[hsl(188,100%,50%)] hover:text-black hover:border-transparent hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all duration-300 hover:-translate-y-2">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ahmed-tamer22/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[hsl(188,100%,50%)] hover:text-black hover:border-transparent hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all duration-300 hover:-translate-y-2">
                <Linkedin size={24} />
              </a>
              <a href="https://wa.me/201092937629" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[hsl(188,100%,50%)] hover:text-black hover:border-transparent hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all duration-300 hover:-translate-y-2">
                <MessageCircle size={24} />
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}