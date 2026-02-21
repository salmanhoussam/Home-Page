import React from 'react';

function SpecificPrivacy() {
  return (
    <div dir="ltr" className="min-h-screen bg-[#090412] text-slate-300 font-sans p-8 md:p-20">
      <div className="max-w-4xl mx-auto bg-[#130924] p-10 rounded-3xl border border-purple-500/20 shadow-2xl relative">
        <a href="/" className="text-purple-400 hover:text-purple-300 text-sm font-bold mb-10 inline-block">
          ← Back to Home
        </a>
        
        <h1 className="text-4xl font-bold text-white mb-6">Terms of Service</h1>
        <p className="text-xs text-slate-500 mb-12 uppercase tracking-widest">Interactive Automation Terms | 2026</p>

        <div className="space-y-8 text-slate-400 leading-relaxed">
          <section className="border-l-2 border-slate-500/30 pl-6">
            <h3 className="text-xl font-bold text-slate-100 mb-3">1. Service Description</h3>
            <p>SalmanSaaS provides an automated interface via WhatsApp buttons and menus to facilitate digital orders and bookings. The system responds based on hard-coded logic and structured data retrieval.</p>
          </section>

          <section className="border-l-2 border-slate-500/30 pl-6">
            <h3 className="text-xl font-bold text-slate-100 mb-3">2. User Interactions</h3>
            <p>By clicking on chat buttons or selecting menu items, you agree to trigger the associated automated workflows. Users are responsible for the accuracy of information entered through these interactive components.</p>
          </section>

          <section className="border-l-2 border-slate-500/30 pl-6">
            <h3 className="text-xl font-bold text-slate-100 mb-3">3. Opt-in & Messaging</h3>
            <p>Interaction starts only when the user initiates a conversation or clicks a "Get Started" button. We follow a strict anti-spam policy and only send updates related to your specific transactions.</p>
          </section>

          <section className="p-6 bg-slate-100/5 rounded-2xl border border-slate-500/20 text-center">
            <p className="italic text-sm">"Simplified automation for a faster business experience."</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SpecificPrivacy;