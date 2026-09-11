"use client";

import React, { useState, useEffect } from "react";
import { Rate, Spin, ConfigProvider } from "antd";
import {
  Activity,
  Brain,
  Heart,
  ChevronRight,
  ShieldCheck,
  Dna,
  PieChart,
  Target,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Stethoscope,
  FlaskConical,
  Zap,
  Award,
  ChevronDown
} from "lucide-react";

export default function BioTrackHealthPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    goal: "",
    ageGroup: "",
    tracking: "",
    personalization: 5,
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [analysisPhase, setAnalysisPhase] = useState("Calibrating biomarker benchmarks...");

  // AI Analysis simulation
  useEffect(() => {
    if (isAnalyzing) {
      const interval = setInterval(() => {
        setProgressPercent((prev) => {
          if (prev === 25) setAnalysisPhase("Matching age & metabolic profiles...");
          if (prev === 60) setAnalysisPhase("Cross-referencing 100+ diagnostic panels...");
          if (prev === 85) setAnalysisPhase("Finalizing personalized protocol...");
          if (prev >= 100) {
            clearInterval(interval);
            setIsAnalyzing(false);
            setShowResult(true);
            return 100;
          }
          return prev + 5;
        });
      }, 90);
      return () => clearInterval(interval);
    }
  }, [isAnalyzing]);

  const handleNext = () => {
    if (currentStep === 3) {
      setIsAnalyzing(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const isStepValid = () => {
    if (currentStep === 0) return answers.goal !== "";
    if (currentStep === 1) return answers.ageGroup !== "";
    if (currentStep === 2) return answers.tracking !== "";
    if (currentStep === 3) return answers.personalization > 0;
    return true;
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#10b981", // Emerald accent
          colorText: "#f1f5f9",
          fontFamily: "var(--font-geist-sans), sans-serif",
          borderRadius: 12,
        },
      }}
    >
      <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col items-center selection:bg-emerald-500/20 selection:text-emerald-400">
        
        {/* Glow ambient background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]" />
          <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
        </div>

        {/* Navigation Bar */}
        <header className="w-full max-w-5xl mx-auto px-6 py-6 flex justify-between items-center relative z-10 border-b border-slate-800/60">
          <div className="flex items-center gap-3 font-extrabold text-2xl tracking-tight">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-black font-black shadow-lg shadow-emerald-500/20">
              <Dna className="w-5 h-5 text-black" />
            </div>
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              BioTrack<span className="text-emerald-400 font-medium">Health</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              AI Diagnostic
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>CLIA & CAP Certified Labs</span>
            </div>
            <span className="text-slate-700">•</span>
            <span>HIPAA Compliant</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-10 flex flex-col items-center relative z-10">
          
          {/* Header Badge & Hero */}
          {!isAnalyzing && !showResult && (
            <div className="text-center mb-10 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-300 text-xs font-semibold tracking-wide shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>60-Second Clinical Assessment</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-5 leading-[1.15]">
                Unlock What Your Routine <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Blood Test Misses.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
                Standard medical physicals only check 20-30 basic markers. Answer 4 quick questions to see which critical longevity & metabolic biomarkers you need to track.
              </p>
            </div>
          )}

          {/* Interactive Card Box */}
          <div className="w-full bg-[#11131a]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl shadow-black/60 relative overflow-hidden">
            
            {/* Step Indicators */}
            {!isAnalyzing && !showResult && (
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  <span>Step {currentStep + 1} of 4</span>
                  <span className="text-emerald-400">{((currentStep + 1) / 4) * 100}% Complete</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / 4) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {isAnalyzing ? (
              /* Loading Analysis State */
              <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full border-4 border-slate-800 border-t-emerald-400 animate-spin flex items-center justify-center">
                    <Activity className="w-8 h-8 text-emerald-400 animate-pulse" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Analyzing Your Biomarker Profile
                </h3>
                <p className="text-sm text-emerald-400/90 font-medium h-6">
                  {analysisPhase}
                </p>
                <div className="w-72 h-2 bg-slate-800 rounded-full mt-6 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-100 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            ) : showResult ? (
              /* High-Converting Diagnostic Results */
              <div className="animate-fade-in-up">
                <div className="text-center mb-8">
                  <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
                    <Award className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    Your Personalized Biomarker Roadmap
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base mt-2">
                    Evaluated against clinical databases for optimal longevity & cellular performance.
                  </p>
                </div>

                {/* Score & Match Highlight */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      <Target className="w-4 h-4 text-emerald-400" /> Focus Category
                    </div>
                    <div className="text-xl font-extrabold text-white">
                      {answers.goal}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      <Zap className="w-4 h-4 text-cyan-400" /> Critical Biomarkers Missed
                    </div>
                    <div className="text-xl font-extrabold text-emerald-400">
                      70+ Untracked Biomarkers
                    </div>
                  </div>
                </div>

                {/* Clinical Warning Box */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-emerald-500/20 mb-8 relative">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base mb-1">
                        Comprehensive Full-Body Panel Recommended
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Based on your profile, routine annual tests fail to screen critical cardiovascular inflammation (ApoB, hs-CRP) and cellular metabolic markers. We recommend a full 100+ biomarker panel to detect risks 5-10 years before symptoms appear.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="space-y-3">
                  <a
                    id="cta-claim-protocol"
                    href="https://partners.superpower.com/marcus-vance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-black font-extrabold text-lg flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/25 hover:opacity-95 transition-all duration-200 transform hover:scale-[1.01]"
                  >
                    <span>Claim Your Full 100+ Biomarker Panel ($199/yr)</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  
                  <p className="text-center text-xs text-slate-500 font-medium">
                    Backed by 100% Satisfaction Guarantee • In-home Phlebotomy or Lab Visits across 50 US States
                  </p>
                </div>
              </div>
            ) : (
              /* Quiz Steps */
              <div>
                {/* Step 1: Goal */}
                {currentStep === 0 && (
                  <div className="animate-fade-in-right">
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">
                      What is your #1 health & longevity priority?
                    </h3>
                    <p className="text-slate-400 text-sm mb-6">
                      Select the primary area you want to benchmark and optimize.
                    </p>
                    
                    <div className="space-y-3">
                      {[
                        {
                          title: "Longevity & Cellular Aging",
                          desc: "Screen cardiovascular health, biological age, and inflammation",
                          icon: <Heart className="w-5 h-5" />,
                        },
                        {
                          title: "Peak Energy & Metabolic Health",
                          desc: "Optimize thyroid, fasting insulin, HbA1c, and vitality",
                          icon: <Zap className="w-5 h-5" />,
                        },
                        {
                          title: "Cognitive & Brain Performance",
                          desc: "Track neuro-markers, sleep architecture, and stress cortisol",
                          icon: <Brain className="w-5 h-5" />,
                        },
                        {
                          title: "Hormone & Physical Optimization",
                          desc: "Total/Free Testosterone, DHEA, IGF-1, and body composition",
                          icon: <Activity className="w-5 h-5" />,
                        },
                      ].map((item) => (
                        <div
                          key={item.title}
                          onClick={() => setAnswers({ ...answers, goal: item.title })}
                          className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-4 ${
                            answers.goal === item.title
                              ? "border-emerald-400 bg-emerald-500/10 text-white shadow-md shadow-emerald-500/10"
                              : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700"
                          }`}
                        >
                          <div className={`p-2.5 rounded-xl ${
                            answers.goal === item.title ? "bg-emerald-400 text-black" : "bg-slate-800 text-slate-400"
                          }`}>
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-base sm:text-lg text-white">{item.title}</div>
                            <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                          </div>
                          {answers.goal === item.title && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Age Group */}
                {currentStep === 1 && (
                  <div className="animate-fade-in-right">
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">
                      What is your age bracket?
                    </h3>
                    <p className="text-slate-400 text-sm mb-6">
                      Biomarker reference ranges shift significantly across life stages.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {["20 – 34", "35 – 49", "50 – 64", "65+"].map((age) => (
                        <div
                          key={age}
                          onClick={() => setAnswers({ ...answers, ageGroup: age })}
                          className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                            answers.ageGroup === age
                              ? "border-emerald-400 bg-emerald-500/10 text-white"
                              : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700"
                          }`}
                        >
                          <span className="font-bold text-lg">{age} years old</span>
                          {answers.ageGroup === age && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Current Tracking Frequency */}
                {currentStep === 2 && (
                  <div className="animate-fade-in-right">
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">
                      How often do you test your comprehensive blood panels?
                    </h3>
                    <p className="text-slate-400 text-sm mb-6">
                      Understanding your baseline helps recommend optimal testing frequency.
                    </p>

                    <div className="space-y-3">
                      {[
                        { title: "Only when sick or prescribed by regular doctor", sub: "Standard annual checkup with basic CBC/CMP" },
                        { title: "Once every 1–2 years", sub: "Basic lipid and glucose check" },
                        { title: "Quarterly or semi-annually", sub: "Active biohacker or preventative healthcare tracking" },
                        { title: "Never had an in-depth blood test", sub: "No benchmark data recorded yet" }
                      ].map((freq) => (
                        <div
                          key={freq.title}
                          onClick={() => setAnswers({ ...answers, tracking: freq.title })}
                          className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                            answers.tracking === freq.title
                              ? "border-emerald-400 bg-emerald-500/10 text-white"
                              : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700"
                          }`}
                        >
                          <div>
                            <div className="font-bold text-base text-white">{freq.title}</div>
                            <div className="text-xs text-slate-400 mt-0.5">{freq.sub}</div>
                          </div>
                          {answers.tracking === freq.title && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-3" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Personalization Rating */}
                {currentStep === 3 && (
                  <div className="animate-fade-in-right">
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">
                      Importance of doctor-led preventative action plans
                    </h3>
                    <p className="text-slate-400 text-sm mb-6">
                      How valuable is having a dedicated medical care team analyze your 100+ markers?
                    </p>

                    <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col items-center justify-center">
                      <Rate
                        className="text-4xl sm:text-5xl text-emerald-400 flex gap-3"
                        value={answers.personalization}
                        onChange={(val) => setAnswers({ ...answers, personalization: val })}
                      />
                      <span className="text-sm font-semibold text-slate-400 mt-4">
                        {answers.personalization === 5 ? "Critical (Proactive Prevention)" : "Important"}
                      </span>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    disabled={currentStep === 0}
                    className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
                      currentStep === 0 ? "opacity-30 cursor-not-allowed text-slate-600" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className={`py-3 px-7 rounded-xl font-bold text-base flex items-center gap-2 transition-all ${
                      isStepValid()
                        ? "bg-gradient-to-r from-emerald-400 to-cyan-400 text-black hover:opacity-90 shadow-lg shadow-emerald-500/20"
                        : "bg-slate-800 text-slate-500 cursor-not-allowed"
                    }`}
                  >
                    <span>{currentStep === 3 ? "Generate Protocol" : "Next"}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Social Proof & Scientific Backing */}
          {!showResult && !isAnalyzing && (
            <div className="mt-12 w-full grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-xl sm:text-2xl font-black text-white">100+</div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-1">Biomarkers Tested</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">50 States</div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-1">Nationwide Coverage</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-xl sm:text-2xl font-black text-cyan-400">CLIA/CAP</div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-1">Certified Labs</div>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="w-full max-w-5xl mx-auto px-6 py-8 border-t border-slate-800/60 text-center text-xs text-slate-500 relative z-10">
          <p>© {new Date().getFullYear()} BioTrack Health. All rights reserved. Not intended as medical diagnosis or treatment advice.</p>
        </footer>
      </div>

      {/* Global Style overrides */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(16px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.35s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.4s ease-out forwards; }
      `}</style>
    </ConfigProvider>
  );
}
