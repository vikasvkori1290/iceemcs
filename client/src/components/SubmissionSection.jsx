import React from 'react';
import { MapPin } from 'lucide-react';

export default function SubmissionSection() {
  const criteriaList = [
    {
      prefix: '',
      text: 'All papers must be submitted through CMT system (link will be updated soon) only. The Papers will be not considered for even review process if submitted in any other way than CMT system.',
    },
    {
      prefix: 'Submission criteria:',
      text: 'All submitted papers must be follow IEEE conference paper templates. Only PDF formatted submitted manuscripts are considered for further procedure.',
    },
    {
      prefix: 'Scrutiny criteria:',
      text: 'Once paper received through CMT system, the technical program committee will take decision based on scope, plagiarism (Plagiarism must be below 15%), format, etc,. for further procedure.',
    },
    {
      prefix: 'Review criteria:',
      text: 'All papers passed in scrutiny stage, those papers will be sent for review. Every paper will be reviewed by at least three independent reviewers.',
    },
    {
      prefix: 'Acceptance criteria:',
      text: 'Based on review results, the technical program committee will recommend the papers for acceptance/reject/further review. The chair will take final decision.',
    },
    {
      prefix: 'Camera ready paper:',
      text: 'A separate mail will be received by authors of all accepted paper.',
    },
    {
      prefix: 'Presentation criteria:',
      text: 'All papers must be presented physically (as conference is only under Physical mode) at the conference event to be considered for possible publication.',
    },
  ];

  return (
    <section
      id="submission-page"
      className="relative w-full min-h-175 flex items-center bg-ocean-deep overflow-hidden py-16 sm:py-24"
    >
      {/* Circuit Board / Motherboard Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
          alt="Circuit Background"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-125"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ocean-deep/95 via-ocean-deep/80 to-ocean-deep/95" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="max-w-4xl">
          {/* Section Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-wide uppercase mb-10 sm:mb-14 bg-linear-to-r from-white via-ocean-ice to-ocean-cyan bg-clip-text text-transparent">
            SUBMISSION GUIDELINES
          </h1>

          {/* Guidelines / Criteria List */}
          <div className="space-y-6 sm:space-y-8">
            {criteriaList.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 sm:gap-4 text-white text-sm sm:text-base lg:text-[17px] leading-relaxed"
              >
                {/* MapPin / Pointer Outline Icon */}
                <div className="shrink-0 mt-1 text-ocean-cyan">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                </div>

                {/* Content */}
                <p className="font-normal text-white/95">
                  {item.prefix && (
                    <strong className="font-bold text-ocean-sky mr-1.5">
                      {item.prefix}
                    </strong>
                  )}
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
