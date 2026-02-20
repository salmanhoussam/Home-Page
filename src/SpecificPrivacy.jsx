import React from 'react';

function SpecificPrivacy() {
  return (
    <div dir="ltr" className="min-h-screen bg-[#090412] text-slate-300 font-sans p-8 md:p-20">
      <div className="max-w-3xl mx-auto bg-[#130924] p-10 rounded-3xl border border-purple-500/20 shadow-2xl">
        <a href="/" className="text-purple-400 hover:text-purple-300 text-sm font-bold mb-8 inline-block">← Back to Home</a>
        
        <h1 className="text-3xl font-bold text-slate-100 mb-6">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-8">Last updated: February 2026</p>

        <div className="space-y-6 text-slate-400 leading-relaxed text-sm">
          <p>These Terms of Service govern your use of SalmanSaaS software solutions, including our booking systems and interactive menus.</p>
          
          <h2 className="text-xl font-bold text-slate-200 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By using our services or interacting with our WhatsApp bot, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.</p>

          <h2 className="text-xl font-bold text-slate-200 mt-8 mb-4">2. Acceptable Use</h2>
          <p>Our services rely on the WhatsApp Business API. You agree not to use our system for sending spam, abusive messages, or any content that violates Meta's Commerce and Business Policies.</p>

          <h2 className="text-xl font-bold text-slate-200 mt-8 mb-4">3. Service Availability</h2>
          <p>While we strive for 100% uptime using reliable servers, SalmanSaaS is not liable for temporary downtimes caused by third-party providers (such as Meta, Cloudflare, or hosting platforms).</p>

          <h2 className="text-xl font-bold text-slate-200 mt-8 mb-4">4. Modifications</h2>
          <p>We reserve the right to modify or replace these Terms at any time. Continued use of the service after any changes constitutes acceptance of the new Terms.</p>
        </div>
      </div>
    </div>
  );
}

export default SpecificPrivacy;