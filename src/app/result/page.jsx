"use client";

import React from "react";
import Link from "next/link";
import { Trophy, Star, Medal, ArrowLeft, GraduationCap, CheckCircle2, Award } from "lucide-react";

const nanditaResults = [
  {
    exam: "Class 9 Mid-Term Examinations",
    score: "96.4%",
    rank: "Rank 1 (Section & Grade)",
    year: "2025-2026",
    badge: "School Topper",
    subjects: [
      { name: "Mathematics", score: "99/100" },
      { name: "Physics & Chemistry", score: "96/100" },
      { name: "Computer Applications", score: "98/100" },
      { name: "English Language & Lit", score: "94/100" },
      { name: "Social Science", score: "95/100" },
    ],
  },
  {
    exam: "Inter-School Science Olympiad",
    score: "98.8 Percentile",
    rank: "State Rank 3 • Gold Medalist",
    year: "2025",
    badge: "Gold Medal",
    subjects: [
      { name: "Theoretical Physics", score: "High Distinction" },
      { name: "Applied Chemistry", score: "Gold Tier" },
      { name: "Logical Problem Solving", score: "Top 1%" },
    ],
  },
  {
    exam: "National Cyber Olympiad (NCO)",
    score: "97.5 Percentile",
    rank: "Distinction Award",
    year: "2025",
    badge: "Distinction",
    subjects: [
      { name: "Algorithm Design", score: "A+" },
      { name: "Python / Logic", score: "A+" },
      { name: "Cyber Ethics", score: "A" },
    ],
  },
];

export default function NanditaResultsPage() {
  return (
    <main className="min-h-screen bg-[#080c14] text-slate-100 font-sans py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Navigation Back */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs font-bold text-slate-300 hover:text-white hover:border-indigo-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Main Portfolio
          </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-widest text-xs">
              <GraduationCap className="w-4 h-4" /> Loyola School • Academic Standing
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-black text-white">
              Nandita Behera's <span className="gradient-text-gold">Academic Record</span>
            </h1>
            <p className="text-slate-400 text-sm">
              Official scorecards, Olympiad standings, and academic achievements in Class 9 at Loyola School.
            </p>
          </div>

          <div className="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-2xl flex items-center gap-4">
            <Trophy className="text-amber-400 w-10 h-10" />
            <div>
              <p className="text-2xl font-black text-white">96.4%</p>
              <p className="text-[10px] uppercase font-bold text-slate-400">Current Cumulative GPA</p>
            </div>
          </div>
        </div>

        {/* Results Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nanditaResults.map((item, i) => (
            <div
              key={i}
              className="glass-card p-6 rounded-3xl border border-white/10 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
                    {item.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{item.year}</span>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-white">{item.exam}</h3>
                  <p className="text-amber-400 text-xl font-black mt-1 tracking-tight">{item.score}</p>
                  <p className="text-xs font-semibold text-slate-300 mt-0.5">{item.rank}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Subject Breakdown:</p>
                  {item.subjects.map((sub, sIdx) => (
                    <div key={sIdx} className="flex justify-between text-xs text-slate-300">
                      <span>{sub.name}</span>
                      <span className="font-bold text-emerald-400">{sub.score}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Certified Record
                </span>
                <span>Loyola School</span>
              </div>
            </div>
          ))}
        </div>

        {/* Commendation Note */}
        <div className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 text-center space-y-3">
          <Award className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="font-heading text-xl font-bold text-white">Loyola School Honor Roll</h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
            Consistently placed in the top tier of Standard 9 at Loyola School for academic discipline, STEM excellence, active participation in clubs, and exemplary conduct.
          </p>
        </div>
      </div>
    </main>
  );
}