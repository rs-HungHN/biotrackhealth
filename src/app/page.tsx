"use client";

import React, { useState, useEffect } from "react";
import { Rate, ConfigProvider } from "antd";
import {
  Activity,
  Brain,
  Heart,
  ChevronRight,
  ShieldCheck,
  Dna,
  Target,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Stethoscope,
  FlaskConical,
  Zap,
  Award,
  Check,
  X
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
  const [analysisPhase, setAnalysisPhase] = useState("");
  const [progressPercent, setProgressPercent] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Analysis Loading Simulation
  useEffect(() => {
    if (isAnalyzing) {
      const phases = [
        "Mapping cardiovascular risk factors (ApoB, hs-CRP)...",
        "Assessing cellular aging & metabolic efficiency (HbA1c, Fasting Insulin)...",
        "Analyzing hormonal balance & adrenal health...",
        "Generating clinical action protocol & biomarker recommendations...",
      ];

      let currentPhaseIdx = 0;
      setAnalysisPhase(phases[0]);

      const interval = setInterval(() => {
        setProgressPercent((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsAnalyzing(false);
            setShowResult(true);
            return 100;
          }
          const next = prev + 1.25;
          const newIdx = Math.min(
            Math.floor((next / 100) * phases.length),
            phases.length - 1
          );
          if (newIdx !== currentPhaseIdx) {
            currentPhaseIdx = newIdx;
            setAnalysisPhase(phases[newIdx]);
          }
          return next;
        });
      }, 35);

      return () => clearInterval(interval);
    }
  }, [isAnalyzing]);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsAnalyzing(true);
      setProgressPercent(0);
    }
  };

  const isStepValid = () => {
    if (currentStep === 0) return answers.goal !== "";
    if (currentStep === 1) return answers.ageGroup !== "";
    if (currentStep === 2) return answers.tracking !== "";
    if (currentStep === 3) return answers.personalization > 0;
    return false;
  };

    const partnerLink = "https://partners.superpower.com/marcus-vance";

  const trackConversion = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-18012920683/epNWCJav1PMcEOu2nY1D",
        value: 1.0,
        currency: "VND",
      });
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#10b981",
          colorBgBase: "#090a0f",
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
              Clinical Assessment
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
        <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-10 flex flex-col items-center relative z-10">
          
          {/* Header Badge & Hero */}
          {!isAnalyzing && !showResult && (
            <div className="text-center mb-10 animate-fade-in max-w-2xl">
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
              
              <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
                Standard medical physicals only check 15–20 basic markers. Answer 4 quick questions to see which critical longevity & metabolic biomarkers you need to track.
              </p>
            </div>
          )}

          {/* Interactive Card Box */}
          <div id="quiz" className="w-full bg-[#11131a]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl shadow-black/60 relative overflow-hidden scroll-mt-10">
            
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
                      {answers.goal || "Longevity & Cellular Health"}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      <Zap className="w-4 h-4 text-cyan-400" /> Critical Biomarkers Missed
                    </div>
                    <div className="text-xl font-extrabold text-emerald-400">
                      80+ Untracked Biomarkers
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
                        Based on your profile, routine annual doctor visits fail to screen critical cardiovascular inflammation (ApoB, hs-CRP), cellular metabolic markers, and hormonal baselines. A comprehensive 100+ biomarker panel detects underlying risks 5–10 years before symptoms appear.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Real Clinical Assets Gallery */}
                <div className="mb-8">
                  <h4 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                    <FlaskConical className="w-5 h-5 text-emerald-400" />
                    Inside Your 100+ Biomarker Health Protocol
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group hover:border-slate-700 transition-all">
                      <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                        <img
                          src="/biomarkers_dashboard.png"
                          alt="100+ Biomarkers Dashboard"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h5 className="font-bold text-sm text-white">100+ Biomarkers Analyzed</h5>
                        <p className="text-xs text-slate-400 mt-1">Real-time status: Optimal, Needs Attention, or At-Risk with precision clinical ranges.</p>
                      </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group hover:border-slate-700 transition-all">
                      <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                        <img
                          src="/biological_age_score.png"
                          alt="Biological Age & Health Score"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h5 className="font-bold text-sm text-white">Biological Age & Health Score</h5>
                        <p className="text-xs text-slate-400 mt-1">Calculates your true internal biological age compared to your chronological age.</p>
                      </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group hover:border-slate-700 transition-all">
                      <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                        <img
                          src="/clinical_action_plan.png"
                          alt="Personalized Doctor Action Plan"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h5 className="font-bold text-sm text-white">Dedicated Physician Action Plan</h5>
                        <p className="text-xs text-slate-400 mt-1">Doctor-reviewed recommendations, custom supplementation, and lifestyle protocols.</p>
                      </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group hover:border-slate-700 transition-all">
                      <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                        <img
                          src="/blood_panel_kit.png"
                          alt="Lab Visit or At-Home Phlebotomy Kit"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h5 className="font-bold text-sm text-white">Flexible Blood Draw Options</h5>
                        <p className="text-xs text-slate-400 mt-1">Visit any certified partner lab or request a licensed phlebotomist to your home.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Comparison Table ($199 vs $499 Function Health vs Routine PCP) */}
                <div className="mb-8 rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden">
                  <div className="p-4 bg-slate-800/60 border-b border-slate-800 flex items-center justify-between">
                    <span className="font-bold text-sm text-white flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      Comprehensive Value Breakdown
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      Save Over $300/Year
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400 font-semibold bg-slate-950/40">
                          <th className="py-3 px-4">Feature / Metric</th>
                          <th className="py-3 px-3 text-center text-slate-500">Routine Checkup</th>
                          <th className="py-3 px-3 text-center text-slate-400">Function Health</th>
                          <th className="py-3 px-4 text-center text-emerald-400 font-bold bg-emerald-500/10 border-x border-emerald-500/20">
                            BioTrack / Superpower
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        <tr>
                          <td className="py-3 px-4 font-medium">Biomarkers Tested</td>
                          <td className="py-3 px-3 text-center text-slate-400">15 – 20 basic</td>
                          <td className="py-3 px-3 text-center text-slate-300">100+ markers</td>
                          <td className="py-3 px-4 text-center font-bold text-emerald-300 bg-emerald-500/10 border-x border-emerald-500/20">
                            100+ Full Panel
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Annual Cost</td>
                          <td className="py-3 px-3 text-center text-slate-400">$200–$800 co-pays</td>
                          <td className="py-3 px-3 text-center text-red-400 font-semibold">$499 / year</td>
                          <td className="py-3 px-4 text-center font-black text-emerald-400 bg-emerald-500/10 border-x border-emerald-500/20 text-base">
                            $199 / year
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Cardio Inflammation (ApoB, hs-CRP)</td>
                          <td className="py-3 px-3 text-center text-rose-500"><X className="w-4 h-4 mx-auto" /></td>
                          <td className="py-3 px-3 text-center text-emerald-400"><Check className="w-4 h-4 mx-auto" /></td>
                          <td className="py-3 px-4 text-center text-emerald-400 bg-emerald-500/10 border-x border-emerald-500/20">
                            <Check className="w-4 h-4 mx-auto font-bold" />
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Biological Age Calculation</td>
                          <td className="py-3 px-3 text-center text-rose-500"><X className="w-4 h-4 mx-auto" /></td>
                          <td className="py-3 px-3 text-center text-emerald-400"><Check className="w-4 h-4 mx-auto" /></td>
                          <td className="py-3 px-4 text-center text-emerald-400 bg-emerald-500/10 border-x border-emerald-500/20">
                            <Check className="w-4 h-4 mx-auto font-bold" />
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Doctor Action Plan & AI Concierge</td>
                          <td className="py-3 px-3 text-center text-slate-500">5 min rushed visit</td>
                          <td className="py-3 px-3 text-center text-slate-300">Wait 3–4 weeks</td>
                          <td className="py-3 px-4 text-center font-bold text-emerald-300 bg-emerald-500/10 border-x border-emerald-500/20">
                            24/7 Concierge + MD Plan
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">At-Home Phlebotomy Option</td>
                          <td className="py-3 px-3 text-center text-rose-500"><X className="w-4 h-4 mx-auto" /></td>
                          <td className="py-3 px-3 text-center text-slate-400">Limited states</td>
                          <td className="py-3 px-4 text-center font-bold text-emerald-300 bg-emerald-500/10 border-x border-emerald-500/20">
                            Available in 50 States
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Primary Action CTA Button */}
                <div className="space-y-3">
                  <a
                    id="cta-claim-protocol" onClick={trackConversion}
                    href={partnerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-black font-black text-lg sm:text-xl flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/25 hover:opacity-95 transition-all duration-200 transform hover:scale-[1.01]"
                  >
                    <span>Claim Your Full 100+ Biomarker Panel ($199/yr)</span>
                    <ArrowRight className="w-6 h-6" />
                  </a>
                  
                  <p className="text-center text-xs text-slate-400 font-medium">
                    Backed by 100% Satisfaction Guarantee • In-home Phlebotomy or 2,000+ Lab Visits across 50 US States
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
                      Select the primary objective guiding your personal biomarker monitoring.
                    </p>

                    <div className="space-y-3">
                      {[
                        { icon: Heart, title: "Cardiovascular & Heart Protection", desc: "Track ApoB, hs-CRP, and early vascular arterial plaque indicators" },
                        { icon: Activity, title: "Energy, Metabolic & Insulin Optimization", desc: "Eliminate afternoon brain fog, optimize HbA1c, and insulin sensitivity" },
                        { icon: Brain, title: "Hormone, Thyroid & Adrenal Vitality", desc: "Balance Free Testosterone, DHEA-S, Cortisol, and vital thyroid panels" },
                        { icon: Sparkles, title: "Comprehensive Longevity & Cellular Age", desc: "Calculate true biological age and cellular biological clock status" },
                      ].map((item) => (
                        <div
                          key={item.title}
                          onClick={() => setAnswers({ ...answers, goal: item.title })}
                          className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-4 ${
                            answers.goal === item.title
                              ? "border-emerald-400 bg-emerald-500/10 text-white shadow-lg shadow-emerald-500/10"
                              : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                          }`}
                        >
                          <div className={`p-2.5 rounded-xl ${
                            answers.goal === item.title ? "bg-emerald-400 text-black font-bold" : "bg-slate-800 text-slate-400"
                          }`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-base text-white">{item.title}</div>
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

                {/* Step 2: Age Bracket */}
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

          {/* Educational Trust Section (Visible on Main View) */}
          {!showResult && !isAnalyzing && (
            <div className="mt-16 w-full space-y-12 animate-fade-in">
              
              {/* Trust Badges */}
              <div className="w-full grid grid-cols-3 gap-4 text-center">
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

              {/* Head-to-Head Comparison Preview */}
              <div id="compare" className="rounded-3xl bg-[#11131a]/80 border border-slate-800 overflow-hidden shadow-xl scroll-mt-10">
                <div className="p-6 bg-slate-900/60 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-extrabold text-xl text-white">Why Proactive Health Enthusiasts Choose Superpower</h3>
                    <p className="text-xs text-slate-400 mt-1">Direct head-to-head comparison with traditional doctors and high-priced alternatives.</p>
                  </div>
                  <span className="self-start sm:self-auto text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    Save $300 vs Function Health
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 font-semibold bg-slate-950/40">
                        <th className="py-3.5 px-5">Standard of Care</th>
                        <th className="py-3.5 px-4 text-center text-slate-500">Routine Checkup</th>
                        <th className="py-3.5 px-4 text-center text-slate-400">Function Health</th>
                        <th className="py-3.5 px-5 text-center text-emerald-400 font-bold bg-emerald-500/10 border-x border-emerald-500/20">
                          BioTrack / Superpower
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      <tr>
                        <td className="py-3.5 px-5 font-medium">Biomarkers Tested</td>
                        <td className="py-3.5 px-4 text-center text-slate-400">15 – 20 markers</td>
                        <td className="py-3.5 px-4 text-center text-slate-300">100+ markers</td>
                        <td className="py-3.5 px-5 text-center font-bold text-emerald-300 bg-emerald-500/10 border-x border-emerald-500/20">
                          100+ Full Panel
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-5 font-medium">Membership Price</td>
                        <td className="py-3.5 px-4 text-center text-slate-400">$200–$800 co-pays</td>
                        <td className="py-3.5 px-4 text-center text-red-400 font-bold">$499 / year</td>
                        <td className="py-3.5 px-5 text-center font-black text-emerald-400 bg-emerald-500/10 border-x border-emerald-500/20 text-base">
                          $199 / year
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-5 font-medium">Cardiovascular ApoB & hs-CRP</td>
                        <td className="py-3.5 px-4 text-center text-rose-500"><X className="w-4 h-4 mx-auto" /></td>
                        <td className="py-3.5 px-4 text-center text-emerald-400"><Check className="w-4 h-4 mx-auto" /></td>
                        <td className="py-3.5 px-5 text-center text-emerald-400 bg-emerald-500/10 border-x border-emerald-500/20">
                          <Check className="w-4 h-4 mx-auto font-bold" />
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-5 font-medium">Biological Age Calculation</td>
                        <td className="py-3.5 px-4 text-center text-rose-500"><X className="w-4 h-4 mx-auto" /></td>
                        <td className="py-3.5 px-4 text-center text-emerald-400"><Check className="w-4 h-4 mx-auto" /></td>
                        <td className="py-3.5 px-5 text-center text-emerald-400 bg-emerald-500/10 border-x border-emerald-500/20">
                          <Check className="w-4 h-4 mx-auto font-bold" />
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-5 font-medium">Physician Action Plan & Chat</td>
                        <td className="py-3.5 px-4 text-center text-slate-500">Rushed 5-min visit</td>
                        <td className="py-3.5 px-4 text-center text-slate-400">3–4 weeks delay</td>
                        <td className="py-3.5 px-5 text-center font-bold text-emerald-300 bg-emerald-500/10 border-x border-emerald-500/20">
                          24/7 AI + MD Plan
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-slate-900/80 border-t border-slate-800 text-center">
                  <a
                    href={partnerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackConversion} className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold text-sm transition-colors"
                  >
                    <span>View Full 100+ Biomarker Panel Details on Superpower</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Visual Feature Grid with Air Assets */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-black text-white">Clinical Longevity Architecture</h3>
                  <p className="text-sm text-slate-400 mt-2">Comprehensive prevention powered by top CLIA/CAP laboratories across the United States.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-3xl bg-[#11131a]/90 border border-slate-800 overflow-hidden group hover:border-emerald-500/30 transition-all shadow-lg">
                    <div className="relative h-60 w-full bg-slate-950 overflow-hidden">
                      <img
                        src="/biomarkers_dashboard.png"
                        alt="Superpower 100+ Biomarkers Dashboard" id="biomarkers"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">Precision Analytics</div>
                      <h4 className="text-lg font-bold text-white mb-2">100+ Advanced Biomarkers</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Go far beyond basic CBC tests. Track ApoB, hs-CRP, metabolic panels, hormones, and nutrient baselines in one clinical dashboard.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl bg-[#11131a]/90 border border-slate-800 overflow-hidden group hover:border-emerald-500/30 transition-all shadow-lg">
                    <div className="relative h-60 w-full bg-slate-950 overflow-hidden">
                      <img
                        src="/biological_age_score.png"
                        alt="Biological Age and Health Score" id="biological-age"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">Longevity Metrics</div>
                      <h4 className="text-lg font-bold text-white mb-2">Biological Age Calculation</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Discover your cellular aging speed. Identify biological clock discrepancies to take targeted action before chronic conditions manifest.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl bg-[#11131a]/90 border border-slate-800 overflow-hidden group hover:border-emerald-500/30 transition-all shadow-lg">
                    <div className="relative h-60 w-full bg-slate-950 overflow-hidden">
                      <img
                        src="/clinical_action_plan.png"
                        alt="Clinical Doctor Action Plan" id="action-plan"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">Doctor Reviewed</div>
                      <h4 className="text-lg font-bold text-white mb-2">Personalized Action Protocol</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Every report includes personalized recommendations from licensed medical physicians with evidence-based lifestyle & nutrition steps.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl bg-[#11131a]/90 border border-slate-800 overflow-hidden group hover:border-emerald-500/30 transition-all shadow-lg">
                    <div className="relative h-60 w-full bg-slate-950 overflow-hidden">
                      <img
                        src="/blood_panel_kit.png"
                        alt="Blood Draw Kit and Lab Network" id="in-home"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">Frictionless Experience</div>
                      <h4 className="text-lg font-bold text-white mb-2">In-Home or Lab Blood Draws</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Enjoy the luxury of an at-home phlebotomist visit or drop by any of 2,000+ certified partner lab locations nationwide across 50 US states.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="w-full max-w-5xl mx-auto px-6 py-8 border-t border-slate-800/60 text-center text-xs text-slate-500 relative z-10">
          <div className="flex justify-center gap-6 mb-3 text-slate-400">
            <a href="https://biotrackhealth.tech" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="https://biotrackhealth.tech" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="mailto:contact@biotrackhealth.tech" className="hover:text-emerald-400 transition-colors">contact@biotrackhealth.tech</a>
          </div>
          <p>© {new Date().getFullYear()} BioTrack Health. All rights reserved. Not intended as medical diagnosis or treatment advice.</p>
        </footer>
      </div>
    </ConfigProvider>
  );
}
