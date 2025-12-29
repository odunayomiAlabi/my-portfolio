"use client"
import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react';

// Main Portfolio Component
export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // CUSTOMIZE THIS SECTION WITH YOUR INFO
  const personalInfo = {
    name: "Odunayomi Alabi",
    title: "Frontend Developer",
    email: "odunayomialabi@gmail.com",
    github: "https://github.com/odunayomiAlabi",
    linkedin: "https://linkedin.com/in/odunayo-alabi",
    bio: "I'm a passionate frontend developer with 2 years of experience building responsive and user-friendly web and mobile applications. I love turning complex problems into simple, beautiful interfaces that users enjoy interacting with."
  };

  // CUSTOMIZE YOUR PROJECTS HERE
  const projects = [
    {
      title: "Rollpay Admin Dashboard",
      description: "Built a comprehensive admin dashboard for managing projects, payments, and taxes. Implemented real-time data updates and interactive charts for analytics.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "React Query", "Zustand"],
      liveUrl: "https://rollpay-admin-web.vercel.app/app",
    },
    {
      title: "FilmMakers Mart",
      description: "Built a marketplace platform for filmmakers to buy and sell equipment, featuring user authentication, product listings, and secure payment processing.",
      technologies: ["Next.js", "React", "Redux", "Styled Components", "REST API", "Node.js"],
      liveUrl: "https://fmm-client-dev.vercel.app/",
      // githubUrl: "https://github.com/yourusername/project2", 
    },
    {
      title: "Montessori App",
      description: "Developed a responsive web application that provides educational resources and interactive activities for children based on Montessori principles. Implemented a user-friendly interface with engaging content and interactive features.",
      technologies: ["React", "Android Studio", "XCode", "React Native", "Expo"],
      liveUrl: "",
      // githubUrl: "https://github.com/yourusername/project3",
    },
    // {
    //   title: "Portfolio Generator",
    //   description: "Built a tool that helps developers create their portfolio websites through a simple form interface, with multiple template options and instant preview.",
    //   technologies: ["Next.js", "React", "Tailwind CSS"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/yourusername/project4",
    // }
  ];

  // CUSTOMIZE YOUR SKILLS HERE
  const skills = {
    frontend: ["React Native", "Next.js", "TypeScript", "Zustand", "React Query", "Tailwind CSS", "Redux", "Node.js"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Chrome DevTools", "npm/yarn"],
    other: ["Responsive Design", "RESTful APIs", "User Experience (UX)", "Performance Optimization"]
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">
              {personalInfo.name}
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition">Contact</button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <button onClick={() => scrollToSection('home')} className="block py-2 text-gray-700 hover:text-blue-600">Home</button>
              <button onClick={() => scrollToSection('about')} className="block py-2 text-gray-700 hover:text-blue-600">About</button>
              <button onClick={() => scrollToSection('projects')} className="block py-2 text-gray-700 hover:text-blue-600">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="block py-2 text-gray-700 hover:text-blue-600">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="block py-2 text-gray-700 hover:text-blue-600">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm {personalInfo.name}
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-600 mb-8">
            {personalInfo.title}
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            {personalInfo.bio}
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              I'm a frontend developer with 2 years of professional experience creating engaging web and mobile applications. 
              My journey in web development started with a curiosity about how websites work, and it has grown into 
              a passion for building intuitive user interfaces.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I specialize in React and Next.js, and I'm constantly learning new technologies to stay current with 
              industry trends. I believe in writing clean, maintainable code and creating experiences that users love.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me reading tech blogs, or 
              exploring new frameworks. I'm currently deepening my knowledge in TypeScript and performance optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">My Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition border-l-4 border-blue-600">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-2 md:ml-6">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 transition font-medium whitespace-nowrap"
                      >
                        <ExternalLink size={18} className="mr-1" />
                        Live Demo
                      </a>
                    )}
                    {/* {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-gray-900 transition font-medium whitespace-nowrap"
                      >
                        <Github size={18} className="mr-1" />
                        Code
                      </a>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
              <div className="space-y-2">
                {skills.frontend.map((skill, i) => (
                  <div key={i} className="text-gray-700">{skill}</div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tools</h3>
              <div className="space-y-2">
                {skills.tools.map((skill, i) => (
                  <div key={i} className="text-gray-700">{skill}</div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Other</h3>
              <div className="space-y-2">
                {skills.other.map((skill, i) => (
                  <div key={i} className="text-gray-700">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-12">
            I'm currently open to new opportunities and interesting projects. 
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              title="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
              title="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 {personalInfo.name}. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}