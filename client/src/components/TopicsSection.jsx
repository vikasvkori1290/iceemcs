import React from 'react';

export default function TopicsSection({ onNavigate }) {
  const topicsData = [
    {
      title: 'Electrical Topics:',
      topics: [
        '1. Smart Power Systems and Sustainable Energy Technologies',
        '2. Renewable Energy, Smart Grids and Energy Management Systems',
        '3. Power Electronics, Electrical Machines and Intelligent Drives',
        '4. Artificial Intelligence Applications in Electrical and Energy Systems',
        '5. Advanced Electrical Engineering and Emerging Energy Technologies',
        '6. Electric Vehicles, Energy Storage and Charging Infrastructure',
        '7. Intelligent Control, Automation and Industrial Electrical Systems',
        '8. Electrical Power Systems, Protection and Modern Grid Technologies',
        '9. Computational Intelligence and Optimization Techniques in Electrical Engineering',
        '10. Next-Generation Electrical Systems, Digital Energy and Smart Infrastructure',
      ],
    },
    {
      title: 'Electronics Topics:',
      topics: [
        '1. Advanced Electronics and Intelligent Communication Systems',
        '2. VLSI, Embedded Systems and Semiconductor Technologies',
        '3. Artificial Intelligence Applications in Electronics and Communication Engineering',
        '4. Next-Generation Communication Networks and Wireless Technologies',
        '5. Internet of Things (IoT), Sensor Networks and Smart Electronics',
        '6. Signal Processing, Image Processing and Computer Vision Technologies',
        '7. RF, Microwave, Antenna and Satellite Communication Systems',
        '8. Electronic Systems Design, Automation and Emerging Technologies',
        '9. Nanoelectronics, Photonics and Optoelectronic Systems',
        '10. Intelligent Electronic Devices, Robotics and Automation',
      ],
    },
    {
      title: 'Management Topics:',
      topics: [
        '1. Business Management and Organizational Excellence',
        '2. Strategic Management and Business Innovation',
        '3. Digital Transformation and Smart Business Management',
        '4. Entrepreneurship, Innovation and Startup Ecosystems',
        '5. Finance, Accounting and Financial Technologies (FinTech)',
        '6. Marketing, Consumer Behaviour and Digital Commerce',
        '7. Human Resource Management, Leadership and Organizational Development',
        '8. Operations, Supply Chain and Logistics Management',
        '9. Business Analytics, Data-Driven Decision Making and Information Systems',
        '10. Sustainable Business Practices, Corporate Governance and Social Responsibility',
      ],
    },
    {
      title: 'Computer Science Topics:',
      topics: [
        '1. Artificial Intelligence, Machine Learning and Data Science',
        '2. Computer Science, Computing Technologies and Intelligent Systems',
        '3. Software Engineering, Cloud Computing and Distributed Systems',
        '4. Cyber Security, Blockchain and Digital Forensics',
        '5. Internet of Things (IoT), Edge Computing and Smart Applications',
        '6. Data Analytics, Big Data and Business Intelligence',
        '7. Computer Networks, Wireless Communication and Future Internet Technologies',
        '8. Human-Computer Interaction, Multimedia and Computer Vision',
        '9. Advanced Computing, Algorithms and Emerging Information Technologies',
        '10. Intelligent Computing, Automation and Digital Transformation',
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Banner with Soldering Tech Background */}
      <div className="relative w-full h-44 sm:h-52 md:h-60 overflow-hidden bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80"
          alt="Conference Banner"
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Overlapping White Breadcrumb Box */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-11/12 max-w-lg bg-white shadow-md border-t border-gray-100 py-3 sm:py-4 px-6 text-center rounded-t-sm z-10">
          <div className="text-xs sm:text-sm font-medium tracking-wide text-gray-500 flex items-center justify-center gap-2">
            <button
              onClick={() => onNavigate?.('HOME')}
              className="hover:text-[#c68a2c] transition-colors cursor-pointer text-gray-600"
            >
              Home
            </button>
            <span className="text-gray-300">/</span>
            <span className="text-[#c68a2c] font-semibold">CallforPapers</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-600">Topics</span>
          </div>
        </div>
      </div>

      {/* 2. Main Content Area */}
      <section className="pt-14 pb-20 sm:pb-28 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-center text-gray-900 tracking-tight mb-14 sm:mb-20">
          Conference Topics
        </h1>

        {/* 2-Column Balanced Grid for the 4 Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-16 items-start">
          {topicsData.map((category, idx) => (
            <div key={idx} className="flex flex-col space-y-4">
              {/* Category Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#c68a2c] tracking-wide">
                {category.title}
              </h2>

              {/* Numbered Topic List */}
              <div className="space-y-2.5 text-sm sm:text-[15px] text-gray-800 leading-relaxed font-normal">
                {category.topics.map((item, tIdx) => (
                  <p key={tIdx} className="hover:text-gray-950 transition-colors">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

