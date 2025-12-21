import React from 'react';
import { Trophy, Star, Medal } from 'lucide-react';

const toppers = [
  {
    name: "Aditya Vardhan",
    rank: "AIR 142",
    score: "705/720",
    exam: "NEET 2024",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya", // Placeholder student avatar
  },
  {
    name: "Sanya Kumari",
    rank: "AIR 856",
    score: "99.85 %ile",
    exam: "JEE Advanced",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanya",
  },
  {
    name: "Rohan Mehra",
    rank: "AIR 1205",
    score: "685/720",
    exam: "NEET 2024",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
  },
  {
    name: "Priya Das",
    rank: "AIR 2104",
    score: "99.12 %ile",
    exam: "JEE Main",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  }
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-24 bg-slate-950 text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-red-500 font-black uppercase tracking-widest text-xs mb-4">
              <Trophy className="w-4 h-4" /> Hall of Fame
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Results</span>
            </h2>
          </div>
          <div className="bg-red-600/10 border border-red-600/20 p-4 rounded-2xl flex items-center gap-4">
            <Medal className="text-red-500 w-10 h-10" />
            <div>
              <p className="text-2xl font-black">500+</p>
              <p className="text-[10px] uppercase font-bold text-slate-400">Total Selections</p>
            </div>
          </div>
        </div>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {toppers.map((student, i) => (
            <div 
              key={i} 
              className="group relative bg-slate-900 border border-white/5 rounded-[2rem] p-8 hover:border-red-600/50 transition-all duration-500"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-red-600 transition-colors">
                  <img src={student.image} alt={student.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">
                  {student.exam}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">{student.name}</h3>
                <div className="text-red-500 text-2xl font-black mb-2 tracking-tighter italic">
                  {student.rank}
                </div>
                <div className="bg-white/5 rounded-xl py-2 px-4 inline-block">
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Score</p>
                  <p className="text-white font-black">{student.score}</p>
                </div>
              </div>
              
              {/* Decorative Corner Icon */}
              <Star className="absolute top-4 right-4 w-4 h-4 text-slate-800 group-hover:text-red-600/30 transition-colors" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 italic">
            Be the next name in our success story
          </p>
          <button className="text-red-600 font-black uppercase text-sm flex items-center gap-2 mx-auto hover:gap-4 transition-all">
            View All Past Results <Star className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;