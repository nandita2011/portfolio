"use client";

import React, { useState } from 'react';
import { 
  Target, 
  Trophy, 
  Star, 
  ArrowRight, 
  Menu, 
  X, 
  Zap, 
  Users, 
  Clock, 
  MapPin, 
  Phone,
  CheckCircle2,
  Award,
  TrendingUp,
  Atom
} from 'lucide-react';

/* --- UI COMPONENTS --- */

const ButtonPrimary = ({ children, className = "", ...props }) => (
  <button 
    className={`bg-red-600 hover:bg-slate-900 text-white font-black uppercase tracking-widest py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-red-600/30 ${className}`}
    {...props}
  >
    {children}
  </button>
);

/* --- MAIN SECTIONS --- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-red-600 p-2 rounded-lg shadow-lg">
            <Target className="text-white w-6 h-6" />
          </div>
          <div className="font-black text-2xl text-slate-900 tracking-tighter uppercase leading-none">
            SETU KUMAR <span className="text-red-600 italic">THAKUR</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-10 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em]">
          <button onClick={() => scrollTo('home')} className="hover:text-red-600 transition-colors">Home</button>
          <button onClick={() => scrollTo('expertise')} className="hover:text-red-600 transition-colors">Experience</button>
          <button onClick={() => scrollTo('batches')} className="hover:text-red-600 transition-colors">Batches</button>
          <button onClick={() => scrollTo('contact')} className="text-red-600 font-bold border-b-2 border-red-600 pb-1">Enrol 2025</button>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative bg-slate-950 pt-20 pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-red-600/10 text-red-500 text-[12px] font-black uppercase tracking-[0.3em] mb-8 border border-red-600/20">
            <Award className="w-4 h-4" /> NEET & JEE PHYSICS Mentor
          </div>
           <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase italic">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-orange-600">SETU. <br />KUMAR. <br />THAKUR.</span> <br/>
            
          </h1>
          {/* <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase italic">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Physics. </span> <br/>
            Mentor
          </h1> */}
          <p className="text-slate-400 text-xl font-medium max-w-lg leading-relaxed mb-10">
            <span className="text-white font-bold decoration-red-600">Senior Physics Lecturer at ALLEN Chennai</span>.
            <br />9+ years of expertise in mentoring NEET & JEE aspirants to achieve excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <ButtonPrimary onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
              Start Your Journey
            </ButtonPrimary>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl transition-all duration-700">
            <img 
              src="assets/PHOTO.jpeg" 
              alt="Setu Kumar Thakur" 
              className="w-full h-auto object-cover aspect-[4/5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <p className="text-red-500 font-black uppercase tracking-widest text-sm mb-1">Senior Physics Faculty</p>
              <p className="text-white text-3xl font-black italic uppercase">ALLEN Career Institute</p>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-32 h-32 border-t-4 border-r-4 border-red-600 opacity-50"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 border-b-4 border-l-4 border-red-600 opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

const SuccessStats = () => {
  const stats = [
    { icon: <Users />, value: "5000+", label: "Students Mentored" },
    { icon: <TrendingUp />, value: "9+ Years", label: "Experience" },
    { icon: <Star />, value: "Top 100", label: "Ranks Produced" },
    { icon: <Trophy />, value: "100%", label: "Course Mastery" },
  ];

  return (
    <div className="bg-slate-900 border-y border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-red-600 flex justify-center mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-white text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const ExperienceGrid = () => {
  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black text-slate-950 mb-8 uppercase italic tracking-tighter">
              Mentoring the <span className="text-red-600 underline">Next Generation</span> Doctors & Engineers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { t: "Physics Core Foundations", d: "Breaking down complex concept and laws of physics into simple, visual concepts." },
                { t: "NEET/JEE Focused Methodology", d: "Targeted problem-solving techniques developed over 9 years for NEET & JEE." },
                { t: "Time-Management Secrets", d: "Learning how to tackle Physics sections in under 45 minutes with maximum accuracy." },
                { t: "Advanced NTA Analytics", d: "Solving expected question patterns based on rigorous analysis of previous years." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:bg-white transition-all">
                  <CheckCircle2 className="text-red-600 w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase text-xs tracking-widest text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-950 rounded-[2rem] p-10 text-white shadow-2xl">
             <div className="p-3 bg-red-600 inline-block rounded-xl mb-6">
               <Zap className="w-8 h-8 text-white" />
             </div>
             <h3 className="text-3xl font-black italic uppercase mb-6 leading-tight">Background</h3>
             <ul className="space-y-6">
               <li className="flex flex-col">
                   <span className="text-red-500 text-[10px] font-black uppercase tracking-widest">Specialization</span>
                   <span className="font-bold text-xl leading-snug">NEET <br /> JEE Main<br />JEE Advance</span>
                </li>
                <li className="flex flex-col">
                   <span className="text-red-500 text-[10px] font-black uppercase tracking-widest">Current Role</span>
                   <span className="font-bold text-xl leading-snug">Senior Physics Lecturer <br/>ALLEN Chennai</span>
                </li>
                <li className="flex flex-col">
                   <span className="text-red-500 text-[10px] font-black uppercase tracking-widest">Previous Experience</span>
                   <span className="font-bold text-xl leading-snug">Senior Physics Lecturer <br/>Aakash Institute</span>
                </li>
               
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const AdmissionForm = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
           <div className="bg-slate-950 p-12 text-white md:w-2/5 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-red-600/10 blur-3xl rounded-full"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-black uppercase italic mb-6">Enrol <br/><span className="text-red-600 text-5xl">2026</span></h3>
                <p className="text-slate-400 mb-10 text-lg">Limited intake for specialized mentorship batches. Secure your seat today.</p>
              </div>
              <div className="space-y-8 relative z-10">
                 <div className="flex items-center gap-4 group">
                    <div className="bg-red-600 p-3 rounded-xl group-hover:scale-110 transition-transform"><MapPin className="w-5 h-5"/></div>
                    <span className="text-sm font-bold uppercase tracking-widest">Chennai, Tamil Nadu</span>
                 </div>
                 <div className="flex items-center gap-4 group">
                    <div className="bg-red-600 p-3 rounded-xl group-hover:scale-110 transition-transform"><Phone className="w-5 h-5"/></div>
                    <span className="text-sm font-bold uppercase tracking-widest">+91 8961822513</span>
                 </div>
              </div>
           </div>
           <div className="p-12 md:w-3/5">
              <h4 className="text-2xl font-black uppercase italic mb-8">Admission Inquiry</h4>
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                    <input type="text" className="w-full border-b-2 border-slate-200 focus:border-red-600 outline-none py-2 font-bold text-slate-900 bg-transparent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Aspirant Type</label>
                    <select className="w-full border-b-2 border-slate-200 focus:border-red-600 outline-none py-2 font-bold text-slate-900 bg-transparent">
                      <option>NEET Aspirant</option>
                      <option>JEE Main / Advanced</option>
                      <option>Foundation (11th/12th)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mobile Number</label>
                    <input type="tel" className="w-full border-b-2 border-slate-200 focus:border-red-600 outline-none py-2 font-bold text-slate-900 bg-transparent" />
                </div>
                <ButtonPrimary className="w-full mt-6">Request Callback</ButtonPrimary>
              </form>
           </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <main className="min-h-screen font-sans text-slate-900 bg-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <SuccessStats />
      
      {/* Brand Credibility Scroller */}
      <div className="bg-red-600 py-6 overflow-hidden border-y-4 border-slate-950">
        <div className="flex justify-around items-center gap-12 whitespace-nowrap">
          {[1,2,3].map(i => (
            <div key={i} className="flex items-center gap-8 text-white font-black uppercase tracking-[0.4em] text-xs">
              <span></span>
              <Atom className="w-4 h-4" />
               <span></span>
              <Atom className="w-4 h-4" />
             
              <span>JEE ADVANCE</span>
              <Atom className="w-4 h-4" />
              <span>Allen Institute Chennai</span>
              <Atom className="w-4 h-4" />
              <span>NEET</span>
              <Atom className="w-4 h-4" />
              <span>9+ Years Experience</span>
              <Atom className="w-4 h-4" />
              <span>JEE MAINS</span>
              <Atom className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>

      <ExperienceGrid />

      {/* Specialty Sections */}
      <section id="batches" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black uppercase italic text-slate-950 tracking-tighter">Premier <span className="text-red-600">Curriculum</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">Targeted Physics training for 2026-27</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="group bg-slate-950 p-12 rounded-[2.5rem] border border-white/5 hover:border-red-600 transition-all shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl"></div>
                <Trophy className="w-12 h-12 text-red-600 mb-8" />
                <h3 className="text-2xl font-black uppercase italic mb-4 text-white">JEE Advanced Focus</h3>
                <p className="text-slate-400 font-medium mb-8 leading-relaxed">Deep conceptual derivation and high-order thinking problems tailored for IIT aspirants.</p>
                <div className="text-red-600 font-black uppercase tracking-widest text-[10px] flex items-center gap-2 cursor-pointer group-hover:translate-x-2 transition-transform">
                  Batch Details <ArrowRight className="w-4 h-4" />
                </div>
             </div>
             <div className="group bg-slate-50 p-12 rounded-[2.5rem] border border-slate-200 hover:border-red-600 transition-all shadow-xl">
                <Target className="w-12 h-12 text-red-600 mb-8" />
                <h3 className="text-2xl font-black uppercase italic mb-4 text-slate-900">NEET Speed Drills</h3>
                <p className="text-slate-500 font-medium mb-8 leading-relaxed">Accuracy-centric training designed to solve NEET Physics questions in record time with zero errors.</p>
                <div className="text-red-600 font-black uppercase tracking-widest text-[10px] flex items-center gap-2 cursor-pointer group-hover:translate-x-2 transition-transform">
                  Batch Details <ArrowRight className="w-4 h-4" />
                </div>
             </div>
          </div>
        </div>
      </section>

      <AdmissionForm />

      <footer className="py-16 bg-slate-950 text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="bg-red-600 p-2 rounded-lg">
              <Target className="text-white w-5 h-5" />
            </div>
            <div className="font-black text-xl text-white tracking-tighter uppercase">
              SETU KUMAR <span className="text-red-600 italic">THAKUR</span>
            </div>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">
            Senior Physics Lecturer | Allen Chennai | Ex-Aakash | 9+ Years Mentorship
          </p>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;