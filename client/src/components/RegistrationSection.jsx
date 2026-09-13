import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Check,
  CreditCard,
  Building2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  X,
  Send,
  HelpCircle,
} from 'lucide-react';

export default function RegistrationSection() {
  const [currency, setCurrency] = useState('INR'); // 'INR' or 'USD'
  const [selectedTier, setSelectedTier] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [registrationSubmitted, setRegistrationSubmitted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    affiliation: '',
    paperId: '',
    transactionRef: '',
    category: '',
  });

  const tiers = [
    {
      id: 'student',
      title: 'Student / Research Scholar',
      badge: 'Early Scholar',
      badgeStyle: 'bg-blue-100 text-blue-800 border-blue-200',
      priceINR: '4,000',
      priceUSD: '100',
      popular: false,
      description:
        'For full-time undergraduate, postgraduate, and PhD scholars presenting original research.',
      benefits: [
        'Oral / Poster Presentation slot (15 mins)',
        'Conference Delegate Kit, Badge & Proceedings USB',
        'Official IEEE / Conference Presentation Certificate',
        'Inclusion in Conference Proceedings indexing',
        'Networking lunches, high tea & banquet admission',
        'Access to all Keynote & Technical Tracks',
      ],
    },
    {
      id: 'faculty',
      title: 'Academician / Faculty',
      badge: 'Most Popular',
      badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300 font-bold',
      priceINR: '4,800',
      priceUSD: '120',
      popular: true,
      description:
        'For professors, lecturers, and academic researchers affiliated with recognized institutions.',
      benefits: [
        'Primary Author Paper Presentation slot (20 mins)',
        'Deluxe Conference Delegate Kit & Certificate of Honor',
        'Inclusion in official indexed proceedings & digital library',
        'Networking lunches, morning coffee & banquet access',
        'Eligibility for Best Paper & Session Chair awards',
        'Unlimited access to all technical tracks & workshops',
      ],
    },
    {
      id: 'industry',
      title: 'Industry Professional',
      badge: 'Corporate Track',
      badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      priceINR: '5,000',
      priceUSD: '125',
      popular: false,
      description:
        'For engineers, corporate scientists, tech founders, and R&D industry representatives.',
      benefits: [
        'Industry Track Paper / Technical Case Study presentation',
        'VIP Delegate Kit & Executive Certificate',
        'Exclusive Industry-Academia Networking Roundtables',
        'Full proceedings indexing & corporate citation attribution',
        'Priority seating at Keynotes & Plenary discussions',
        'All networking meals, lunches & executive banquet',
      ],
    },
    {
      id: 'attendee',
      title: 'Attendee / Listener',
      badge: 'Non-Presenting',
      badgeStyle: 'bg-purple-100 text-purple-800 border-purple-200',
      priceINR: '2,500',
      priceUSD: '60',
      popular: false,
      description:
        'For scholars, students, and practitioners attending technical sessions without presenting a paper.',
      benefits: [
        'Access to all 3 Tracks, Keynotes & Special Sessions',
        'Official Conference Participation / Attendee Certificate',
        'Conference Programme Schedule & Digital Abstract Book',
        'Interactive audience Q&A privileges in all sessions',
        'Networking lunches, morning tea & refreshment sessions',
      ],
    },
  ];

  const handleOpenRegister = (tier) => {
    setSelectedTier(tier);
    setFormData((prev) => ({ ...prev, category: tier.title }));
    setModalOpen(true);
    setRegistrationSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setRegistrationSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setRegistrationSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        affiliation: '',
        paperId: '',
        transactionRef: '',
        category: '',
      });
    }, 3500);
  };

  return (
    <section id="registration-page" className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 font-bold text-xs uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5 text-amber-600" />
            <span>Transparent Pricing & Registration</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-tight uppercase">
            Conference Registration Fees
          </h1>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Register for ICEEMCS 2027 to present your research, connect with top researchers, and gain indexed publication.
          </p>

          {/* Currency Toggle Switch */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex items-center bg-slate-200/80 p-1 rounded-xl border border-slate-300/80 shadow-xs">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === 'INR'
                    ? 'bg-[#0B192C] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                INR (₹) - Indian Authors
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-[#0B192C] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                USD ($) - International Authors
              </button>
            </div>
          </div>
        </div>

        {/* 4-Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-14">
          {tiers.map((tier) => {
            const isPopular = tier.popular;
            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-white border-2 border-amber-500 shadow-xl ring-4 ring-amber-500/10 lg:-translate-y-2'
                    : 'bg-white border border-slate-200 shadow-md hover:shadow-lg hover:-translate-y-1'
                } p-6 sm:p-7`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[11px] font-black uppercase px-3 py-0.5 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Recommended Tier
                  </div>
                )}

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${tier.badgeStyle}`}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  <h2 className="text-lg font-extrabold text-[#0B192C] leading-snug">
                    {tier.title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 min-h-[36px] leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Price Tag */}
                  <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-[#0B192C]">
                      {currency === 'INR' ? `₹${tier.priceINR}` : `$${tier.priceUSD}`}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      / author
                    </span>
                  </div>

                  {/* Bulleted Benefits */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Tier Benefits Include:
                    </p>
                    {tier.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="text-xs text-slate-700 font-medium leading-tight">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Register CTA Button */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => handleOpenRegister(tier)}
                    className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
                      isPopular
                        ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-black hover:scale-[1.02]'
                        : 'bg-[#0B192C] hover:bg-slate-800 text-white hover:scale-[1.02]'
                    }`}
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra Page & Add-ons Banner */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 sm:p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-bold">
              📄
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#0B192C]">
                Manuscript Page Policy & Extra Page Fee
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Standard registration covers up to <strong>6 pages</strong> per paper. Extra pages are charged at{' '}
                <strong className="text-amber-800">₹200 / $5 per page</strong> (maximum 2 extra pages permitted).
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-lg border border-amber-200 text-xs font-bold text-amber-900 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Inclusive of Publication Charges</span>
          </div>
        </div>

        {/* Venue & Deadlines Information Card */}
        <div className="bg-gradient-to-br from-[#08121f] via-[#0B192C] to-[#162744] rounded-2xl p-6 sm:p-10 text-white shadow-xl border border-slate-700/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Venue info */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-amber-400">
                <MapPin className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-extrabold text-white uppercase tracking-wide">
                  Conference Host & Venue
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                  CMR University, OMBR Campus, No. 5, Bhuvanagiri, Lakshmamma Layout, Banaswadi, Bengaluru, Karnataka 560043.
                </p>
                <span className="inline-block text-[11px] font-medium text-amber-400 pt-1">
                  Air-conditioned Auditorium & High-Tech Smart Seminar Halls
                </span>
              </div>
            </div>

            {/* Deadline info */}
            <div className="flex items-start gap-4 lg:border-l lg:border-white/10 lg:pl-8">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-bold">
                <Clock className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-extrabold text-white uppercase tracking-wide">
                  Important Registration Milestone
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Final Registration & Camera-Ready Paper Submission Deadline:
                </p>
                <div className="inline-block px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 font-black text-sm border border-amber-500/30 mt-1">
                  30th May 2027
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Modal Popup */}
      {modalOpen && selectedTier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Modal Header */}
            <div className="bg-[#0B192C] text-white p-5 sm:p-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400">
                  Registration Portal
                </span>
                <h3 className="text-lg font-extrabold">{selectedTier.title}</h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Fee: <span className="font-bold text-white">₹{selectedTier.priceINR}</span> (Indian Authors) / <span className="font-bold text-white">${selectedTier.priceUSD}</span> (International)
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-[80vh] overflow-y-auto space-y-4 text-xs sm:text-sm">
              {registrationSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Registration Submitted Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you for registering. A confirmation receipt and instructions have been queued for{' '}
                    <strong>{formData.email}</strong>. Our secretariat will verify your transaction details shortly.
                  </p>
                </div>
              ) : (
                <>
                  {/* Bank Account Wire Details Box */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0B192C]">
                      <Building2 className="w-4 h-4 text-amber-600" />
                      <span>Official NEFT / RTGS Wire Transfer Details</span>
                    </div>
                    <div className="text-[11px] text-slate-600 space-y-0.5 font-mono">
                      <p><strong>Account Name:</strong> CMR UNIVERSITY CONFERENCES</p>
                      <p><strong>Bank:</strong> State Bank of India (SBI)</p>
                      <p><strong>Account Number:</strong> 39820194820</p>
                      <p><strong>IFSC Code:</strong> SBIN0040523</p>
                      <p><strong>Branch:</strong> Kalyan Nagar, Bengaluru, India</p>
                    </div>
                  </div>

                  {/* Submission Form */}
                  <form onSubmit={handleFormSubmit} className="space-y-3.5 pt-1">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Author / Delegate Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Kumar"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="author@univ.edu"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Paper Submission ID
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. ICEEMCS-2027-042"
                          value={formData.paperId}
                          onChange={(e) => setFormData({ ...formData, paperId: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        University / Organization Affiliation *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. CMR Institute of Technology / NIT Surathkal"
                        value={formData.affiliation}
                        onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Bank Transaction / UTR / Reference ID *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. UTR-3498218942 / UPI Ref"
                        value={formData.transactionRef}
                        onChange={(e) =>
                          setFormData({ ...formData, transactionRef: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3 bg-[#0B192C] hover:bg-slate-900 text-amber-400 font-extrabold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Confirm & Submit Registration Details</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
