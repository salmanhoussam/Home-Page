import React from 'react';

function GeneralPrivacy() {
  return (
    <div dir="ltr" className="min-h-screen bg-[#090412] text-slate-300 font-sans p-8 md:p-20">
      <div className="max-w-4xl mx-auto bg-[#130924] p-10 rounded-3xl border border-purple-500/20 shadow-2xl relative">
        <a href="/" className="text-purple-400 hover:text-purple-300 text-sm font-bold mb-10 inline-block">
          ← Back to SalmanSaaS
        </a>
        
        <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-xs text-slate-500 mb-12 uppercase tracking-widest">Logic-Based Automation | 2026 Standards</p>

        <div className="space-y-8 text-slate-400 leading-relaxed">
          <section className="border-l-2 border-purple-500/30 pl-6">
            <h3 className="text-xl font-bold text-slate-100 mb-3">1. Information Collection</h3>
            <p>We collect information you explicitly provide by interacting with our chat buttons or menus. This includes your phone number, name, and specific service selections (e.g., table bookings or food orders).</p>
          </section>

          <section className="border-l-2 border-purple-500/30 pl-6">
            <h3 className="text-xl font-bold text-slate-100 mb-3">2. How Data is Processed</h3>
            <p>Our system uses pre-defined code logic to process your selections. No generative AI is used to analyze personal conversations. Your choices are stored in secured databases (Supabase/Railway) to fulfill your requests.</p>
          </section>

          <section className="border-l-2 border-purple-500/30 pl-6">
            <h3 className="text-xl font-bold text-slate-100 mb-3">3. Third-Party API Usage</h3>
            <p>Data is transmitted via the official <b>WhatsApp Business API (Meta)</b>. We do not sell or share your interaction history with any external marketing agencies.</p>
          </section>

          <section className="p-6 bg-purple-500/10 rounded-2xl border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-3">4. Right to Deletion</h3>
            <p>You can request the permanent removal of your booking or order history by contacting <b>support@salmansaas.com</b>. We process all deletion requests within 48 hours.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default GeneralPrivacy;