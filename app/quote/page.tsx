"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Check, ChevronRight, ChevronLeft, Send, Sparkles, User, Building2, Clock3, } from "lucide-react";

interface FormData {
  firmName: string;
  contactName: string;
  email: string;
  currentWebsite: string;
  budgetRange: string;
  timeline: string;
  requirements: string[];
  additionalDetails: string;
}


export default function PricingQuotePage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firmName: "",
    contactName: "",
    email: "",
    currentWebsite: "",
    budgetRange: "",
    timeline: "",
    requirements: [],
    additionalDetails: "",
  });

  const totalSteps = 4;

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleRequirement = (req: string) => {
    const current = formData.requirements;
    if (current.includes(req)) {
      updateField("requirements", current.filter((r) => r !== req));
    } else {
      updateField("requirements", [...current, req]);
    }
  };

  const handleNext = () => {
    if (step < totalSteps) setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setIsSubmitted(true);
  };

  const requirementsOptions = [
    "Brand Identity & Logo",
    "Complete Website Redesign",
    "SEO Strategy & Local Optimization",
    "Content Writing for Accounting Specs",
    "Client Portal Integration",
    "Automated Onboarding Forms",
  ];

  return (
    <main className="min-h-screen bg-cream text-charcoal font-sans flex flex-col justify-between">
      
      {/* 1. Deep Charcoal Hero Banner — pt-44 safety margin clears the overlapping fixed global navigation */}
      <div className="px-8 lg:px-12 pt-44 pb-20 bg-charcoal text-caramel-light relative w-full">
        
    

        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: "rgba(201,118,58,0.15)", border: "1px solid rgba(201,118,58,0.25)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse bg-caramel" />
            Free · No obligation · 24h Turnaround
          </div>
          
          <h1 className="text-4xl lg:text-6xl leading-[1.06] tracking-tight font-(--font-serif-tech) text-white">
            Request a custom
            <br />
            <em className="text-caramel italic font-normal">website estimate</em>
          </h1>
        </div>
      </div>


      {/* 3. Interactive Split Section Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 max-w-350 w-full mx-auto flex-1 items-stretch py-12 lg:py-16 gap-8 lg:gap-12 px-4 sm:px-8">
        
        {/* Left Card: Value Deck Context */}
        <div className="lg:col-span-5 bg-charcoal p-8 lg:p-10 text-caramel-light flex flex-col justify-between rounded-2xl border border-caramel/10 shadow-lg">
          <div className="space-y-5 max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-caramel/10 border border-caramel/20 rounded-full text-[10px] uppercase font-bold tracking-widest text-caramel">
              <Sparkles size={10} />
              <span>Intake Desk</span>
            </div>
            
            <h2 className="text-xl lg:text-2xl font-bold tracking-tight leading-tight text-white">
              Why use our planner?
            </h2>
            
            <p className="text-xs text-white/70 leading-relaxed">
              We build hyper-focused websites, intuitive client portal environments, and automated onboarding structures custom-tailored for accounting practices across the UK.
            </p>

            <hr className="border-caramel/10 my-2" />

            <div className="space-y-4 pt-1">
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-white/5 rounded-lg border border-caramel/20 text-caramel mt-0.5 shrink-0">
                  <User size={14} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-wide uppercase text-caramel">Manual Review</h4>
                  <p className="text-xs text-white/60 leading-normal mt-0.5">Every strategy requirement sheet is inspected manually by a designer to build realistic pricing profiles.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2 bg-white/5 rounded-lg border border-caramel/20 text-caramel mt-0.5 shrink-0">
                  <Clock3 size={14} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-wide uppercase text-caramel">24hr Turnaround</h4>
                  <p className="text-xs text-white/60 leading-normal mt-0.5">Your complete multi-tiered project pricing proposal lands directly in your inbox next business day.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 text-[10px] text-caramel/50 space-y-0.5 border-t border-caramel/10 mt-8">
            <p>Caramel Web Studios is a trading title of Bytesphere Digital Ltd.</p>
            <p>Registered in England & Wales · Company No. 16844459</p>
          </div>
        </div>

        {/* Right Card: The App Wizard Step Layout Container */}
        <div className="lg:col-span-7 flex items-center justify-center">
          {isSubmitted ? (
            <div className="max-w-md w-full p-8 bg-caramel-light border border-caramel/30 rounded-2xl text-center shadow-md animate-fadeIn">
              <div className="w-14 h-14 bg-charcoal text-caramel rounded-full flex items-center justify-center mx-auto mb-6 border border-caramel/20">
                <Check size={26} />
              </div>
              <h2 className="text-xl font-bold tracking-tight mb-2 text-charcoal">Details Received!</h2>
              <p className="text-xs text-charcoal/80 leading-relaxed max-w-sm mx-auto">
                Thank you for reaching out. We look forward to looking over your details and will follow up with an initial quote by tomorrow.
              </p>
              <Link href="/" className="inline-block mt-6 px-5 py-2 text-xs font-bold text-white bg-charcoal rounded-lg hover:bg-charcoal-soft transition-all">
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="w-full bg-[#FDFBF7] border border-caramel/20 rounded-2xl shadow-xl overflow-hidden">
              
              {/* Form Frame Header Banner */}
              <div className="bg-charcoal p-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xs font-bold text-white tracking-widest uppercase">Project Planner</h2>
                  <p className="text-[10px] text-caramel tracking-wide mt-0.5">Step {step} of {totalSteps} — {step === 1 ? "Your Profile" : step === 2 ? "Services Needed" : step === 3 ? "Budget & Time" : "Final Notes"}</p>
                </div>
                <Building2 className="w-4 h-4 text-caramel" />
              </div>

              {/* Progress Tracker */}
              <div className="flex h-0.75 bg-caramel-light">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 transition-all duration-500 ${
                      i + 1 <= step ? "bg-caramel" : "bg-transparent"
                    }`}
                  />
                ))}
              </div>

              {/* Input Workspace Blocks */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
                
                {/* STEP 1: Identification profile */}
                {step === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="border-b border-caramel/10 pb-2">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal">About You</h3>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-1.5">Company Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., London Accountancy Partners"
                        value={formData.firmName}
                        onChange={(e) => updateField("firmName", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-caramel/20 bg-caramel-light focus:outline-none focus:border-caramel focus:bg-white text-xs text-charcoal transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-1.5">Contact Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.contactName}
                        onChange={(e) => updateField("contactName", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-caramel/20 bg-caramel-light focus:outline-none focus:border-caramel focus:bg-white text-xs text-charcoal transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="name@yourcompany.com"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-caramel/20 bg-caramel-light focus:outline-none focus:border-caramel focus:bg-white text-xs text-charcoal transition-all"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 2: Functional Scope Multi-Select */}
                {step === 2 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="border-b border-caramel/10 pb-2">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal">Project Requirements</h3>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-1.5">Current Website Link (If applicable)</label>
                      <input
                        type="text"
                        placeholder="www.yourcompany.com"
                        value={formData.currentWebsite}
                        onChange={(e) => updateField("currentWebsite", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-caramel/20 bg-caramel-light focus:outline-none focus:border-caramel focus:bg-white text-xs text-charcoal transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-2">What features do you need?</label>
                      <div className="grid grid-cols-1 gap-2 max-h-55 overflow-y-auto pr-1">
                        {requirementsOptions.map((option) => {
                          const selected = formData.requirements.includes(option);
                          return (
                            <button
                              type="button"
                              key={option}
                              onClick={() => toggleRequirement(option)}
                              className={`flex items-center justify-between p-3 rounded-lg border text-left text-xs font-medium transition-all ${
                                selected
                                  ? "bg-charcoal text-caramel border-caramel"
                                  : "bg-caramel-light text-charcoal border-caramel/10 hover:border-caramel/40"
                              }`}
                            >
                              <span>{option}</span>
                              <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${selected ? "bg-caramel border-caramel" : "border-charcoal/20"}`}>
                                {selected && <Check size={10} className="text-charcoal" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Commercial Allocation Thresholds */}
                {step === 3 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="border-b border-caramel/10 pb-2">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal">Budget & Timeline</h3>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-2">Estimated Budget Range</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          { value: "£3k - £5k", label: "Foundational Refresh" },
                          { value: "£5k - £10k", label: "Standard Growth Suite" },
                          { value: "£10k - £20k", label: "Premium Corporate Presence" },
                          { value: "£20k+", label: "Enterprise Custom Platform" },
                        ].map((budget) => {
                          const selected = formData.budgetRange === budget.value;
                          return (
                            <button
                              type="button"
                              key={budget.value}
                              onClick={() => updateField("budgetRange", budget.value)}
                              className={`p-2.5 rounded-lg border text-left flex flex-col transition-all ${
                                selected
                                  ? "bg-charcoal text-white border-caramel"
                                  : "bg-caramel-light text-charcoal border-caramel/10 hover:border-caramel"
                              }`}
                            >
                              <span className={`text-xs font-bold ${selected ? "text-caramel" : ""}`}>{budget.value}</span>
                              <span className="text-[9px] opacity-70 mt-0.5">{budget.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-2">When do you want to launch?</label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Within a month", "1 - 3 Months", "Flexible"].map((time) => {
                          const selected = formData.timeline === time;
                          return (
                            <button
                              type="button"
                              key={time}
                              onClick={() => updateField("timeline", time)}
                              className={`p-2.5 text-center text-xs font-medium rounded-lg border transition-all ${
                                selected
                                  ? "bg-charcoal text-caramel border-caramel"
                                  : "bg-caramel-light text-charcoal border-caramel/10 hover:border-caramel"
                              }`}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Strategy Data Summarization */}
                {step === 4 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="border-b border-caramel/10 pb-2">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal">Final Notes & Review</h3>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-1.5">Any links to websites you like or extra requests?</label>
                      <textarea
                        rows={3}
                        placeholder="Share any structural expectations or design examples you admire..."
                        value={formData.additionalDetails}
                        onChange={(e) => updateField("additionalDetails", e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-caramel/20 bg-caramel-light focus:outline-none focus:border-caramel focus:bg-white text-xs text-charcoal transition-all resize-none"
                      />
                    </div>
                    <div className="p-3.5 bg-caramel-light rounded-xl border border-caramel/20 text-xs text-charcoal/80 space-y-1.5">
                      <p>💼 <strong>Company:</strong> {formData.firmName || "Pending"}</p>
                      <p>✉️ <strong>Contact Email:</strong> {formData.email || "Pending"}</p>
                      <p>💰 <strong>Budget Tier:</strong> {formData.budgetRange || "Unselected"}</p>
                    </div>
                  </div>
                )}

                {/* Internal Card Action Steps */}
                <div className="flex items-center justify-between pt-3 border-t border-caramel/10">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 1}
                    className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg text-charcoal/50 hover:text-charcoal disabled:opacity-10 transition-all"
                  >
                    <ChevronLeft size={14} />
                    <span>Back</span>
                  </button>

                  {step < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex items-center gap-1.5 bg-charcoal hover:bg-charcoal-soft text-caramel text-xs font-medium py-2 px-4 rounded-lg transition-all border border-caramel/20"
                    >
                      <span>Continue</span>
                      <ChevronRight size={14} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center gap-1.5 bg-charcoal hover:bg-charcoal-soft text-caramel text-xs font-bold py-2 px-5 rounded-lg shadow-md transition-all border border-caramel/30"
                    >
                      <span>Submit Project Details</span>
                      <Send size={12} />
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

    </main>
  );
}