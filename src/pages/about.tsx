import React from 'react';

const About = () => (
  <section className="py-16 min-h-screen bg-background">
    <div className="container mx-auto px-4 max-w-3xl bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-4xl font-bold mb-2 text-primary">Ankur Parag Kulkarni</h1>
      <p className="mb-4 text-foreground/80">
        Los Angeles, CA | 213-681-7805 | <a href="mailto:ankurpar@usc.edu" className="underline">ankurpar@usc.edu</a> | 
        <a href="https://linkedin.com/in/ankurkul95" target="_blank" rel="noopener noreferrer" className="underline ml-1">linkedin.com/in/ankurkul95</a> | 
        <a href="https://github.com/KulAnkur" target="_blank" rel="noopener noreferrer" className="underline ml-1">github.com/KulAnkur</a>
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Education</h2>
      <ul className="list-disc ml-6 text-foreground/80">
        <li>University of Southern California, Los Angeles, CA — Master of Science in Computer Science</li>
        <li>Thakur College of Engineering and Technology, Mumbai, Maharashtra — Bachelor of Engineering in Computer Engineering, GPA: 9.67/10</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Experience</h2>
      <ul className="list-disc ml-6 text-foreground/80">
        <li><span className="font-semibold">USC Marshall School of Business, Research Assistant</span> (Feb 2025 - Present, Los Angeles, CA)<br />
          • Scraped and gathered housing data from Zillow, analyzing price trends in Los Angeles post-Palisades and Eton fires to assess economic impact<br />
          • Used Python and Pandas to process and visualize large real estate datasets, boosting the accuracy of trend analysis by 30%<br />
          • Uncovered connections between fire damage and shifts in property values, providing valuable insights for urban development<br />
          • Created data-driven reports to support policy recommendations, helping improve decision-making for housing market recovery
        </li>
        <li><span className="font-semibold">USC Information Technology Services (ITS), IT Student Assistant</span> (Jan 2025 - Present, Los Angeles, CA)<br />
          • Provided IT support to faculty and students, troubleshooting and resolving technical issues in classrooms and computing labs across the university<br />
          • Maintained and configured networked classroom control systems using Power over Ethernet (PoE) technology, ensuring seamless operation<br />
          • Conducted routine diagnostics, performed hardware/software updates, and assisted with system upgrades to maintain optimal learning environments<br />
          • Collaborated with ITS engineers to implement security updates and software patches, enhancing classroom infrastructure reliability
        </li>
        <li><span className="font-semibold">Mahindra Group, Software Engineer Intern</span> (Mar 2024 - May 2024, Mumbai, Maharashtra)<br />
          • Developed a Virtual Training Platform using Altoura (Unity3D, C#) and Azure Cloud, creating immersive training modules for Mahindra technicians, reducing training time by 20 hours per session<br />
          • Used GPT-3 to parse SOPs into detailed procedural steps, which were then integrated into virtual training environments, cutting training costs by 40% and enhancing retention<br />
          • Led Automation testing using Selenium across Oculus, laptops, and mobiles, reducing QA efforts by 30%<br />
          • Built a CMS for the Mconnect Mahindra app, centralizing data for better vehicle information access<br />
          • Automated bulk content uploads, saving 200+ hours for a 5-member team, reallocating financial resources efficiently
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Projects</h2>
      <ul className="list-disc ml-6 text-foreground/80">
        <li><span className="font-semibold">Energy Sense</span> | ESP32, C++, Python, AWS, Machine Learning, IoT Sensors<br />
          • Developed a smart energy optimization system prototype using ESP32 microcontroller (C++) and AWS-based Machine learning models, reducing energy consumption by 25% across 10+ appliances<br />
          • Integrated 4+ sensors (temperature, humidity, motion, light) to collect real-time environmental data, improving energy usage predictions by 30% through accurate appliance control recommendations<br />
          • Automated device control and homeowner notifications, cutting manual intervention by 40% and enhancing response efficiency
        </li>
        <li><span className="font-semibold">Summarizing TEAMS Meetings (STM)</span> | Python, Django, MongoDB, BERT Transformer, NLP, Rest API<br />
          • Developed an AI-powered meeting summarization tool, reducing manual note-taking time by 60% and enhancing decision making efficiency<br />
          • Integrated BERT and BART Transformers to generate accurate summaries from transcripts and audio also implemented action item detection<br />
          • Implemented MongoDB backend for storing summaries and action items, reducing data retrieval time by 40%<br />
          • Developed a frontend in Django, enabling users to upload meeting recordings and retrieve structured summaries with action items<br />
          • Implemented participant and duration detection, providing real-time analytics on meeting length and attendee count
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Skills</h2>
      <ul className="list-disc ml-6 text-foreground/80">
        <li>Data Structures, Algorithms, Object-Oriented Design, Agile Development, Test Driven Development</li>
        <li>RESTful APIs, DevOps, Design Patterns, System Design, SOLID Principles</li>
        <li>Programming Languages: Python, JavaScript, TypeScript, C++, Java</li>
        <li>Frontend Technologies: Angular, React, HTML, CSS</li>
        <li>Backend Technologies: Node.js, Flask, Express.js, Django</li>
        <li>Testing & Automation: Selenium, Postman</li>
        <li>Storage Technologies: SQL, NoSQL, PostgreSQL, MySQL, MongoDB, DynamoDB, Redis</li>
        <li>Other Technologies: Git, Docker, Kubernetes, Grafana, AWS, Azure</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Leadership & Achievements</h2>
      <ul className="list-disc ml-6 text-foreground/80">
        <li>Technical Head, CSI: Oversaw technical operations for events, managing participant data for 200+ attendees, ensuring accurate reporting and analytics.</li>
        <li>Treasurer, Computer Society of India (CSI): Managed finance and sponsorship funds, securing resources to support multiple technical events and initiatives</li>
      </ul>
    </div>
  </section>
);

export default About; 