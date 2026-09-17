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
  FileText,
  BadgeCheck,
  Ticket,
  GraduationCap,
  Briefcase,
  User,
  Users,
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

  const categories = [
    {
      id: 'student',
      title: 'Student / Research Scholar',
      passType: 'Student Author Pass',
      icon: GraduationCap,
      priceINR: '4,000',
      priceUSD: '100',
      eligibility: 'Full-time UG, PG, and PhD Scholars with valid institutional ID',
      inclusions: [
        'Oral presentation slot in technical session (Physical mode)',
        'Inclusion of 1 accepted paper in conference proceedings',
        'Official Certificate of Paper Presentation',
        'Conference delegate kit, badge & digital materials',
        'Access to keynotes, workshops & technical tracks',
        'Lunch, high-tea & networking sessions for 2 days',
      ],
    },
    {
      id: 'faculty',
      title: 'Academician / Faculty',
      passType: 'Faculty Author Pass',
      icon: BadgeCheck,
      priceINR: '4,800',
      priceUSD: '120',
      eligibility: 'Professors, Assistant Professors, and University Researchers',
      inclusions: [
        'Oral presentation slot in technical session (Physical mode)',
        'Inclusion of 1 accepted paper in conference proceedings',
        'Official Certificate of Paper Presentation',
        'Deluxe conference delegate kit & memento',
        'Full access to all keynote sessions & technical tracks',
        'Networking lunches, high-tea & official conference banquet',
      ],
    },
    {
      id: 'industry',
      title: 'Industry Professional',
      passType: 'Corporate Author Pass',
      icon: Briefcase,
      priceINR: '5,000',
      priceUSD: '125',
      eligibility: 'Engineers, R&D Scientists, and Corporate Technologists',
      inclusions: [
        'Oral presentation slot in industry technical track',
        'Inclusion of 1 accepted paper in conference proceedings',
        'Certificate of Presentation & Corporate Participation',
        'Executive delegate kit & conference proceedings USB',
        'Exclusive Industry-Academia Networking Roundtables',
        'All networking meals, coffee breaks & conference banquet',
      ],
    },
    {
      id: 'attendee',
      title: 'Attendee / Listener',
      passType: 'Delegate Observer Pass',
      icon: User,
      priceINR: '2,500',
      priceUSD: '60',
      eligibility: 'Scholars, students, or practitioners attending without paper presentation',
      inclusions: [
        'Full admission to all keynote speeches & technical tracks',
        'Official Certificate of Conference Participation',
        'Conference program schedule & abstract book',
        'Interactive audience Q&A privileges across all tracks',
        'Lunch, high-tea & refreshment sessions for 2 days',
      ],
    },
  ];

  const handleOpenRegister = (cat) => {
    setSelectedTier(cat);
    setFormData((prev) => ({ ...prev, category: cat.title }));
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
        
        {/* 1. Academic Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-ocean-ice text-ocean-deep border border-ocean-sky/60 font-bold text-xs uppercase tracking-wider">
            <Ticket className="w-3.5 h-3.5 text-ocean-blue" />
            <span>Author & Delegate Pass Schedule</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ocean-deep tracking-tight uppercase">
            Conference Registration Fees
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Fixed one-time conference registration fee for accepted authors and attendees. All fees cover physical conference admission, presentation privileges, delegate kits, and publication indexing.
          </p>

          {/* Currency Toggle Switch */}
          <div className="pt-2 flex items-center justify-center">
            <div className="inline-flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-2xs">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === 'INR'
                    ? 'bg-ocean-deep text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🇮🇳 Indian Authors (INR ₹)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-ocean-deep text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🌐 International Authors (USD $)
              </button>
            </div>
          </div>
        </div>

        {/* 2. One-Time Payment Assurance Strip */}
        <div className="mb-10 bg-white border border-slate-200/90 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-2" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                Fixed One-Time Fee Policy
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500">
                Single non-recurring payment per registered paper or delegate pass. No hidden processing charges.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-ocean-blue">
            <span>Mode: Physical Presentation at CMR University</span>
          </div>
        </div>

        {/* 3. Delegate Pass Category Cards (Replaced SaaS pricing table) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-14">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-ocean-blue/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Top Accent Strip */}
                  <div className="h-1.5 w-full bg-linear-to-r from-ocean-deep via-ocean-blue to-ocean-cyan" />

                  <div className="p-6 pb-4">
                    {/* Pass Badge & Icon */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-ocean-deep bg-ocean-ice px-2.5 py-1 rounded-md">
                        {cat.passType}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-ocean-blue flex items-center justify-center">
                        <IconComponent className="w-4 h-4 stroke-2" />
                      </div>
                    </div>

                    <h2 className="text-lg font-black text-ocean-deep leading-snug">
                      {cat.title}
                    </h2>
                    <p className="text-[11px] text-slate-500 mt-1 min-h-8 leading-relaxed">
                      {cat.eligibility}
                    </p>

                    {/* One-time Fee Display */}
                    <div className="my-4 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        One-Time Registration Fee
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-black text-ocean-deep">
                          {currency === 'INR' ? `₹${cat.priceINR}` : `$${cat.priceUSD}`}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          / paper
                        </span>
                      </div>
                    </div>

                    {/* Inclusions List */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Pass Inclusions:
                      </p>
                      {cat.inclusions.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-3.5 h-3.5 rounded-full bg-ocean-ice text-ocean-blue flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-3" />
                          </div>
                          <span className="text-[11px] text-slate-700 font-medium leading-tight">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Register CTA */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleOpenRegister(cat)}
                    className="w-full py-2.5 rounded-xl bg-ocean-deep hover:bg-ocean-blue text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    <span>Register for this Category</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Official Academic Fee Schedule Matrix (IEEE Conference Standard) */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 mb-12">
          <div className="mb-6 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-ocean-blue">
              Summary Matrix
            </span>
            <h3 className="text-xl font-black text-ocean-deep">
              Official Conference Registration Fee Schedule
            </h3>
            <p className="text-xs text-slate-500">
              Complete fee breakdown across Indian and International author categories.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-ocean-deep text-white border-b border-slate-200">
                  <th className="p-3.5 font-bold uppercase tracking-wider">Registration Category</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider">Indian Delegates (INR)</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider">Foreign Delegates (USD)</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider">Presentation Slot</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider">Proceedings</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {categories.map((cat, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 font-bold text-slate-900">
                      <div>{cat.title}</div>
                      <span className="text-[10px] font-normal text-slate-500">{cat.passType}</span>
                    </td>
                    <td className="p-3.5 font-extrabold text-ocean-deep">
                      ₹{cat.priceINR}
                    </td>
                    <td className="p-3.5 font-extrabold text-ocean-blue">
                      ${cat.priceUSD}
                    </td>
                    <td className="p-3.5 font-medium">
                      {cat.id === 'attendee' ? 'Observer Only' : 'Oral Presentation (15–20 Mins)'}
                    </td>
                    <td className="p-3.5 font-medium">
                      {cat.id === 'attendee' ? 'Digital Abstracts' : 'Full Proceedings Indexing'}
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => handleOpenRegister(cat)}
                        className="px-3 py-1.5 bg-ocean-ice text-ocean-deep hover:bg-ocean-blue hover:text-white rounded-lg font-bold text-[11px] transition-colors cursor-pointer"
                      >
                        Register
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Manuscript Page Policy Banner */}
        <div className="bg-ocean-ice/50 border border-ocean-sky/60 rounded-2xl p-5 sm:p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-ocean-blue text-white flex items-center justify-center shrink-0 font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-ocean-deep">
                Manuscript Page Limit & Extra Page Surcharge
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Standard registration covers up to <strong>6 pages</strong> per paper. Additional pages are charged at{' '}
                <strong className="text-ocean-blue font-bold">₹200 / $5 per page</strong> (maximum 2 extra pages allowed).
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-lg border border-ocean-sky/60 text-xs font-bold text-ocean-deep shadow-2xs shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Inclusive of Publication Charges</span>
          </div>
        </div>

        {/* 6. Venue & Deadlines Information Card */}
        <div className="bg-linear-to-br from-ocean-deep via-[#021f45] to-ocean-blue rounded-2xl p-6 sm:p-10 text-white shadow-xl border border-ocean-blue/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Venue info */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-ocean-cyan">
                <MapPin className="w-6 h-6 stroke-2" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-extrabold text-white uppercase tracking-wide">
                  Conference Host & Venue
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-md">
                  CMR University, OMBR Campus, No. 5, Bhuvanagiri, Lakshmamma Layout, Banaswadi, Bengaluru, Karnataka 560043.
                </p>
                <span className="inline-block text-[11px] font-medium text-ocean-sky pt-1">
                  Air-conditioned Auditorium & High-Tech Smart Seminar Halls
                </span>
              </div>
            </div>

            {/* Deadline info */}
            <div className="flex items-start gap-4 lg:border-l lg:border-white/10 lg:pl-8">
              <div className="w-12 h-12 rounded-xl bg-ocean-cyan text-ocean-deep flex items-center justify-center shrink-0 font-bold">
                <Clock className="w-6 h-6 stroke-2" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-extrabold text-white uppercase tracking-wide">
                  Important Registration Milestone
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Final Registration & Camera-Ready Paper Submission Deadline:
                </p>
                <div className="inline-block px-3 py-1 rounded-md bg-white/15 text-ocean-sky font-black text-sm border border-ocean-cyan/30 mt-1">
                  30th May 2027
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Registration Modal Popup */}
      {modalOpen && selectedTier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Modal Header */}
            <div className="bg-ocean-deep text-white p-5 sm:p-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-ocean-cyan">
                  Official Registration Portal
                </span>
                <h3 className="text-lg font-extrabold">{selectedTier.title}</h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  One-time Fee: <span className="font-bold text-white">₹{selectedTier.priceINR}</span> (Indian) / <span className="font-bold text-white">${selectedTier.priceUSD}</span> (International)
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
                    <Check className="w-8 h-8 stroke-3" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Registration Submitted Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you for registering. A confirmation receipt and presentation schedule instructions have been queued for{' '}
                    <strong>{formData.email}</strong>. Our secretariat will verify your transaction details shortly.
                  </p>
                </div>
              ) : (
                <>
                  {/* Bank Account Wire Details Box */}
                  <div className="bg-ocean-ice/40 p-4 rounded-xl border border-ocean-sky/60 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-ocean-deep">
                      <Building2 className="w-4 h-4 text-ocean-blue" />
                      <span>Official NEFT / RTGS Wire Transfer Details</span>
                    </div>
                    <div className="text-[11px] text-slate-700 space-y-0.5 font-mono">
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
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-ocean-blue focus:bg-white"
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
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-ocean-blue focus:bg-white"
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
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-ocean-blue focus:bg-white"
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
                        placeholder="e.g. CMR University / NIT Surathkal"
                        value={formData.affiliation}
                        onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-ocean-blue focus:bg-white"
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
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-ocean-blue focus:bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3 bg-linear-to-r from-ocean-blue to-ocean-cyan hover:from-ocean-deep hover:to-ocean-blue text-white font-extrabold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
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
