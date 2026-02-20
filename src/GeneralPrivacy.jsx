import React from 'react';

function GeneralPrivacy() {
  return (
    <div dir="ltr" className="min-h-screen bg-[#090412] text-slate-300 font-sans p-8 md:p-20">
      <div className="max-w-3xl mx-auto bg-[#130924] p-10 rounded-3xl border border-purple-500/20 shadow-2xl">
        <a href="/" className="text-purple-400 hover:text-purple-300 text-sm font-bold mb-8 inline-block">← Back to Home</a>
        
        <h1 className="text-3xl font-bold text-slate-100 mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8">Last updated: February 2026</p>

        <div className="space-y-6 text-slate-400 leading-relaxed text-sm">
          <p>Welcome to SalmanSaaS. This Privacy Policy explains how we collect, use, and protect your information when you use our services, including our WhatsApp-based booking systems and online menus.</p>
          
          <h2 className="text-xl font-bold text-slate-200 mt-8 mb-4">1. Information We Collect</h2>
          <p>When you interact with our WhatsApp bot or booking system, we may collect basic information necessary to provide the service, such as your phone number, name, and booking details.</p>

          <h2 className="text-xl font-bold text-slate-200 mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the collected data strictly to process your bookings, manage your orders, and communicate with you via WhatsApp regarding your requested services.</p>

          <h2 className="text-xl font-bold text-slate-200 mt-8 mb-4">3. Data Sharing and Third Parties</h2>
          <p>We do not sell or share your personal data with third parties. Data is processed securely utilizing trusted cloud providers (like Supabase and Railway) and the official WhatsApp Business API provided by Meta.</p>

          <h2 className="text-xl font-bold text-slate-200 mt-8 mb-4">4. Data Deletion Request</h2>
          <p>You have the right to request the deletion of your personal data. To do so, please contact us directly via our official WhatsApp number, and your data will be removed from our databases.</p>
        </div>
      </div>
    </div>
  );
}

export default GeneralPrivacy;