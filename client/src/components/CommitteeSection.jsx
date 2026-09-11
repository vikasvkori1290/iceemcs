import React from 'react';

export default function CommitteeSection() {
  const chiefPatrons = [
    {
      name: 'Dr. K. C. Ramamurthy, IPS (Retd.)',
      role: 'Chairman, CMR Group of Institutions.',
    },
    {
      name: 'Dr. Sabitha Ramamurthy',
      role: 'Chancellor, CMR University, Bengaluru.',
    },
    {
      name: 'Shri. Jayadeep K R Reddy',
      role: 'Pro-Chancellor, CMR University, Bengaluru.',
    },
    {
      name: 'Dr. Tristha Ramamurthy',
      role: 'Provost, CMR University, Bengaluru.',
    },
    {
      name: 'Smt. Shreya Reddy',
      role: 'Director, Finance & Admin, CMR Group of Institutions.',
    },
  ];

  const committees = [
    {
      title: 'Patrons',
      members: [
        {
          name: 'Dr. H. B. Raghavendra',
          role: 'Vice Chancellor,\nCMR University, Bengaluru.',
        },
        {
          name: 'Dr. Praveen R',
          role: 'Pro Vice Chancellor,\nCMR University, Bengaluru.',
        },
        {
          name: 'Dr. K. E. Prakash',
          role: 'Registrar,\nCMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'General Chair',
      members: [
        {
          name: 'Dr. N. Kannan',
          role: 'Dean, Lakeside Campus Director,\nSchool of Engineering and Technology (SOET), CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Honorary Chairs',
      members: [
        {
          name: 'Dr. S P Manikandan',
          role: 'Deputy Director,\nSchool of Engineering and Technology, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Kiran Kumari Patil',
          role: "President of the Institution's Innovation Council (IIC), CMR University, Bengaluru.",
        },
      ],
    },
    {
      title: 'Program Chairs',
      members: [
        {
          name: 'Dr. Mallikarjun Kodabagi',
          role: 'Professor & Director IQAC,\nCMR University, Bengaluru.',
        },
        {
          name: 'Dr. Balachandra Pattanaik',
          role: 'Vice-Chair,\nIEEE Ethiopia Subsection.',
        },
      ],
    },
    {
      title: 'Conference Chairs',
      members: [
        {
          name: 'Dr. K V Prasad',
          role: 'Professor & Head,\nDept. of ECE, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Om Prakash Chandermohan',
          role: 'Associate Professor,\nSchool of Management, OMBR Campus, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Organizing Chairs',
      members: [
        {
          name: 'Dr. Bhagavant Kalyanrao Deshpande',
          role: 'Professor and HOD,\nDept. of CSE (AI&ML), CMR University, Bengaluru.',
        },
        {
          name: 'Dr. D. N. Punith Kumar',
          role: 'Associate Professor & Head,\nDept. of BSC, and Humanities, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Conveners',
      members: [
        {
          name: 'Dr. Rubini P',
          role: 'Professor & Head,\nDept. of CSE, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Brijesh Mishra',
          role: 'Associate Professor,\nDept. of ECE, CMR University Bengaluru.',
        },
      ],
    },
    {
      title: 'Coordinators',
      members: [
        {
          name: 'Dr. Mohammed Abdul Mateen',
          role: 'Associate Professor & Head,\nDept. of ME, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Sudharshan Babu Pandava',
          role: 'Associate Professor,\nDept. of CS & Technology, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Presentation Chair',
      members: [
        {
          name: 'Dr. K. P. Agrawal',
          role: 'Professor,\nDept. of AI & ML, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Steering Committee',
      members: [
        {
          name: 'Dr. G Glan Devadhas',
          role: 'Director,\nResearch and Innovation (DORI), CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Andrews Samraj',
          role: 'Professor,\nDept. CSE, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Publicity Committee',
      members: [
        {
          name: 'Dr. Sharmila Ragaventhiran',
          role: 'Assistant Professor,\nDept. of CSE, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Amrita Singh',
          role: 'Assistant Professor,\nDept. of ECE, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Technical Program Committee Co-Chair',
      members: [
        {
          name: 'Dr. Pushpa Mala S',
          role: 'Treasurer: IEEE WiE,\nEXECOM Member: IEEE Bangalore Section.',
        },
      ],
    },
    {
      title: 'Technical Program Committee Chairs',
      members: [
        {
          name: 'Dr. Ravi Kumar Saidala',
          role: 'Associate Professor,\nDept. of CSE – DS, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Prachi Gupta',
          role: 'Assistant Professor,\nDept. of ECE, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Technical Program Committee',
      members: [
        {
          name: 'Dr. Abdul Azeez',
          role: 'Associate Professor,\nSecretary, IEEE ITS Society, Bangalore Section.',
        },
        {
          name: 'Dr. S K Hiremath',
          role: 'Associate Professor,\nSchool of Engineering & Technology, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. S Elango',
          role: 'Associate Professor,\nDept. of AI&ML, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Advisory Committee (CMRU)',
      members: [
        {
          name: 'Prof. Rajat Bhatnagar',
          role: 'Professor of practice,\nDept. of CSE, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Parameswaran T',
          role: 'Professor,\nDept. of CSE, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Vijaya Bharathi M',
          role: 'Associate Professor,\nDept. of ECE, School of Engineering and Technology, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Advisory Committee (Outside CMRU)',
      members: [
        {
          name: 'Dr. Prasuna VNP',
          role: 'Atria Institute of Technology, Bengaluru.',
        },
        {
          name: 'Dr. Abdul Azeez',
          role: 'Secretary, IEEE ITS society, Bangalore Section.',
        },
        {
          name: 'Dr. Priya Nandihal',
          role: 'Dayananda Sagar Academy of Technology and Management, Bengaluru.',
        },
        {
          name: 'Dr. Ranjit K. N',
          role: 'Maharaja Institute of Technology Thandavapura, Mysuru.',
        },
        {
          name: 'Dr. Kiran A Gupta',
          role: 'Dayananda Sagar College of Engineering, Bengaluru.',
        },
        {
          name: 'Dr. Basanti Ghanti',
          role: 'Sharnbasva University, Kalaburagi.',
        },
      ],
    },
    {
      title: 'Finance and Audit Committee',
      members: [
        {
          name: 'Dr. Rubini P',
          role: 'Professor & Head,\nDept. of CSE, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Shweta Gupta',
          role: 'Associate Professor,\nDept. of AI&ML, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Registration Committee',
      members: [
        {
          name: 'Dr. V N Sudheer',
          role: 'Associate Professor,\nEnglish under School of Liberal Studies/DCCC, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Prajwala',
          role: "Active Member in Institution’s Innovation Council (IIC), CMR University, Bengaluru.",
        },
      ],
    },
    {
      title: 'Copyrights Committee',
      members: [
        {
          name: 'Dr. N Pankajam',
          role: 'Assistant Professor,\nDept. of BS & Humanities, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Accommodation and Transport',
      members: [
        {
          name: 'Dr. Prabhakar K',
          role: 'Assistant Professor,\nDept. of CSE (AI&ML), CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Kiran G',
          role: 'Assistant Professor,\nDept. of ECE, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Publication and Editorial Committee',
      members: [
        {
          name: 'Dr. Om Prakash Chandermohan',
          role: 'Associate Professor,\nSchool of Management, OMBR Campus, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Brijesh Mishra',
          role: 'Associate Professor,\nDept. of ECE, CMR University Bengaluru.',
        },
        {
          name: 'Dr. Gyanappa A Walikar',
          role: 'Associate Professor,\nDept. of CSE, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Anup P Athresh',
          role: 'Associate Professor,\nDept. of ME, SOET, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'VISA/Foreign Affairs Committee',
      members: [
        {
          name: 'Dr. L. Arokia Jesu Prabhu',
          role: 'Associate Professor,\nDept. of CSE, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Jayarajan K',
          role: 'Associate Professor,\nDept. of CSE, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Certificate Committee',
      members: [
        {
          name: 'Dr. Sreevidya Varma',
          role: 'Associate Professor,\nDept. of BS&H, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Motahar Sk',
          role: 'Assistant Professor,\nDept. of BS & Humanities, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Plagiarism and Scope of Conference Committee',
      members: [
        {
          name: 'Dr. Naveen Joshi',
          role: 'Assistant Professor,\nDept. of BS & Humanities, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Vishwanath Savanur',
          role: 'Assistant Professor,\nDept. of BS & and Humanities, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Web Development Committee',
      members: [
        {
          name: 'Mr. Rohit Kumar',
          role: 'Faculty Member,\nDept. of CSE, CMR University, Bengaluru.',
        },
        {
          name: 'Mrs. Hanydas S H',
          role: 'Assistant Professor,\nDept. of IT, CMR University, Bengaluru.',
        },
      ],
    },
  ];

  return (
    <section id="committee" className="py-16 sm:py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center text-gray-900 tracking-tight mb-16">
          Our Committees
        </h1>

        {/* 1. Chief Patron - Top Featured Section */}
        <div className="mb-14 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-[#c68a2c] mb-6 tracking-wide">
            Chief Patron
          </h2>
          <div className="space-y-2 text-sm sm:text-base leading-relaxed text-gray-800">
            {chiefPatrons.map((patron, idx) => (
              <p key={idx} className="flex flex-wrap items-baseline gap-x-1.5">
                <span className="font-bold text-gray-950">{patron.name},</span>
                <span className="text-gray-700">{patron.role}</span>
              </p>
            ))}
          </div>
        </div>

        {/* 2. 3-Column Balanced Grid for All Committees */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 items-start">
          {committees.map((committee, idx) => (
            <div key={idx} className="flex flex-col space-y-4">
              {/* Committee Title */}
              <h3 className="text-xl sm:text-[22px] font-bold text-[#c68a2c] tracking-wide leading-snug">
                {committee.title}
              </h3>

              {/* Members List */}
              <div className="space-y-4">
                {committee.members.map((member, mIdx) => (
                  <div key={mIdx} className="space-y-1">
                    <p className="font-bold text-gray-950 text-sm sm:text-base leading-snug">
                      {member.name}
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm whitespace-pre-line leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

