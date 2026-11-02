// ============================================================
//  ALL SITE CONTENT LIVES HERE.
//  Edit text, add a project, or add a job in this file —
//  the pages (index.html, projects.html, project.html) build themselves from it.
// ============================================================

const SITE = {
  name: "Sam Sun",
  tagline: "Mechanical Engineering Portfolio",
  intro: "4th year Mechanical Engineering student at Purdue University. I design cost-effective products that positively impact the lives of many — from production equipment to accessible devices.",
  email: "samuelsun2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/qiancheng-sun/",
  resume: "resume.pdf",
  photo: "images/profile.png",
};

// Newest first. `projects` lists project ids (see PROJECTS below) shown under the job.
const EXPERIENCE = [
  {
    company: "Formlabs",
    logo: "images/formlabs.png",
    role: "Manufacturing Design Engineering Intern",
    dates: "Jun – Aug 2025",
    summary: "Designed, prototyped, and validated custom machines used for current and next-gen printer manufacturing.",
    projects: ["linear-rail-tester", "prosthetic-hand"],
  },
  {
    company: "Tesla",
    logo: "images/tesla.png",
    role: "Mechanical Engineering Intern",
    team: "Cell Manufacturing – Tabless 4680",
    dates: "Sep 2024 – May 2025",
    summary: "Designed and implemented numerous production equipment improvements to improve KPIs and address safety incidents.",
    projects: [],
  },
  {
    company: "Panasonic Energy North America",
    logo: "images/panasonic.png",
    role: "Equipment Engineering Intern",
    dates: "May – Aug 2024",
    summary: "Designed the mounting structure for a high-speed inline inspection system on the 2170 cell winders.",
    projects: ["inspection-bracket", "metal-detector"],
  },
];

const EDUCATION = {
  school: "Purdue University",
  logo: "images/purdue.png",
  degree: "B.S. Mechanical Engineering",
  dates: "2022 – 2026",
};

// Order here = order on the Projects page. `featured: true` also shows it on the home page.
// Each section: { heading, points: [...], image }. Consecutive sections with the same
// heading are grouped under one title.
const PROJECTS = [
  {
    id: "linear-rail-tester",
    title: "Linear Rail Tester",
    category: "Internship",
    org: "Formlabs",
    cover: "images/linear-rail-tester.jpg",
    blurb: "Automated tester measuring rail drag force and straightness for every SLA printer line.",
    tags: ["Electromechanical", "Python", "GD&T", "Test Fixtures"],
    featured: true,
    sections: [
      { heading: "What", image: "images/projects/linear-rail-tester/1.jpg", points: [
        "Designed a scalable automated solution that accurately & repeatedly measures linear rail drag force and straightness for all current and future SLA printers",
        "Need to be able to quickly cycle through different rails for production use",
      ]},
      { heading: "How", image: "images/projects/linear-rail-tester/2.jpg", points: [
        "Owned the full system electromechanical design from sensor/driver research to GD&T drawings and testing",
        "Created custom Python script to integrate SPC board, serial connections and motor driver for data collection",
      ]},
      { heading: "How", image: "images/projects/linear-rail-tester/3.png", points: [
        "20 seconds to swap in new rail while ensuring precision using side mounted magnets and toggle clamp mechanism",
      ]},
      { heading: "Results", image: "images/projects/linear-rail-tester/4.jpg", points: [
        "Production-ready system with ~0.3 N drag force and 5 µm straightness repeatability",
        "Cable strain reliefs for durability",
      ]},
    ],
  },
  {
    id: "prosthetic-hand",
    title: "Accessible 3D Printed Prosthetic Hand",
    category: "Hackathon",
    org: "Formlabs Hackathon",
    cover: "images/prosthetic-hand.jpg",
    blurb: "Fully 3D printable hand under $100 BOM — a temporary DIY option for wrist-down amputations.",
    tags: ["3D Printing", "Compliant Mechanisms", "Embedded"],
    featured: true,
    sections: [
      { heading: "What", image: "images/projects/prosthetic-hand/1.jpg", points: [
        "Fully 3D printable hand with total OTS BOM cost of <$100, designed for simplicity as a temporary DIY solution for wrist down amputations",
        "Designed and prototyped the arm attachment, electronics mounting, and finger tip mechanism during annual Formlabs Hackathon",
      ]},
      { heading: "How", image: "images/projects/prosthetic-hand/2.png", points: [
        "Driven by a single servo and gear train for compactness and cost reduction",
        "Iterated through many different compliant mechanisms / materials to maximize grip on various object shapes while making the design more life like",
        "Buttons, IMU, and display enable various modes and can actuate the hand without electrodes",
      ]},
      { heading: "Results", image: "images/projects/prosthetic-hand/3.png", points: [
        "Able to perform basic tasks like holding and releasing a drink",
        "Arm adaptor can securely fit on 98% of adult forearms",
        "Arm mounted 18690 battery module enables quick swap / continuous usage",
        "Formlabs materials offer advanced properties but design is replicable using FDM materials",
      ]},
    ],
  },
  {
    id: "inspection-bracket",
    title: "3 Axis Adjustable Inspection Bracket",
    category: "Internship",
    org: "Panasonic Energy",
    cover: "images/inspection-bracket.jpg",
    blurb: "DFMA mounting bracket for inline vision inspection on high-speed winders — 32% under budget.",
    tags: ["DFMA", "Sheet Metal", "Weldments", "FEA", "SolidWorks"],
    featured: true,
    sections: [
      { heading: "What", image: "images/projects/inspection-bracket/1.png", points: [
        "Designed and fabricated a mounting bracket using DFMA principles for inline vision inspection system testing on high speed winders at Gigafactory 1",
        "Assembly must offer precise 3-axis adjustability while minimizing deflection and external light interference",
      ]},
      { heading: "How", image: "images/projects/inspection-bracket/2.png", points: [
        "Used a combination of sheet metal and welded parts to maximize structural rigidity while minimizing cost and weight",
        "Supported key design decisions with FEA results",
        "Produced 3D CAD models and detailed 2D engineering drawings with GD&T and welding callouts for the assembly using SolidWorks",
      ]},
      { heading: "Results", image: "images/projects/inspection-bracket/3.png", points: [
        "Achieved 7 mm of adjustability in X, Y & Z directions with no measurable deflection",
        "Produced a design that was 32% under budget",
        "Lightweight design with tool cutouts resulting in an easy assembly and installation process",
      ]},
    ],
  },
  {
    id: "metal-detector",
    title: "Metal Particle Detector",
    category: "Internship",
    org: "Panasonic Energy",
    cover: "images/metal-detector.jpg",
    blurb: "Laser micrometer sensing to catch 150 µm metal contaminants in 2170 cell winding.",
    tags: ["Sensors", "Prototyping", "Quality Automation"],
    featured: false,
    sections: [
      { heading: "What", image: "images/projects/metal-detector/1.png", points: [
        "Identified and tested laser micrometer sensors for detecting fine metal contaminants generated in the winding process of 2170 cells",
        "Initiated the automation of a time consuming manual quality process",
      ]},
      { heading: "How", image: "images/projects/metal-detector/2.png", points: [
        "Designed and prototyped custom low profile dovetail rails enabling precise height adjustment for testing the sensors",
        "Iterated on prototype and designed a mount for critical detection regions within the winder",
      ]},
      { heading: "Results", image: "images/projects/metal-detector/3.png", points: [
        "Able to detect particles as small as 150 microns",
        "Potential to reduce detection time by 24+ hours and prevent hundreds of thousands of cell containments annually",
      ]},
    ],
  },
  {
    id: "smart-trash-can",
    title: "Computer Vision Smart Trash Can",
    category: "Hackathon",
    org: "MAKEMIT",
    cover: "images/smart-trash-can.png",
    blurb: "Sorts recyclables automatically with 90% accuracy. 2nd place at MAKEMIT, built in 30 hours.",
    tags: ["Computer Vision", "Arduino", "Fusion 360"],
    featured: false,
    sections: [
      { heading: "What", image: "images/projects/smart-trash-can/1.png", points: [
        "Automatically identifies and sorts trash",
        "Minimizes human error in the recycling process",
      ]},
      { heading: "How", image: "images/projects/smart-trash-can/2.png", points: [
        "Computer vision identifies trash",
        "Arduino controlled lighting, ultrasonic sensing, and servo motors for lid opening and trash sorting",
        "Designed in Fusion 360",
        "Built and presented prototype in 30 hours",
      ]},
      { heading: "Results", image: "images/projects/smart-trash-can/3.png", points: [
        "Identifies recyclable items with 90% accuracy",
        "Second place MAKEMIT award and 1517 Medici Grant recipient",
        'Full project and video: <a href="https://devpost.com/software/ecobins" target="_blank">devpost.com/software/ecobins</a>',
      ]},
    ],
  },
  {
    id: "cane-to-chair",
    title: "Convertible Cane-to-Chair",
    category: "Personal & Academic",
    org: "",
    cover: "images/cane-to-chair.png",
    blurb: "Cane that unfolds into a 180 lb-rated seat in under 10 seconds for users with limited stamina.",
    tags: ["Product Design", "FEA", "Market Research"],
    featured: false,
    sections: [
      { heading: "What", image: "images/projects/cane-to-chair/1.png", points: [
        "Designed and prototyped a convertible cane-to-chair device to provide resting support for users with limited stamina",
        "Design requirement: sturdy and adjustable to accommodate different users",
      ]},
      { heading: "How", image: "images/projects/cane-to-chair/2.png", points: [
        "Collaborative conceptual sketches to define product vision",
      ]},
      { heading: "How", image: "images/projects/cane-to-chair/3.png", points: [
        "Performed market analysis to determine unmet needs and innovation opportunities",
      ]},
      { heading: "How", image: "images/projects/cane-to-chair/4.png", points: [
        "Used FEA to identify and support stress concentrated points",
      ]},
      { heading: "Results", image: "images/cane-to-chair.png", points: [
        "Functional height adjustable wooden prototype capable of folding and supporting 180 lbs",
        "Unfolds in under 10 seconds and folds away in 15 seconds",
      ]},
    ],
  },
  {
    id: "skateboard-guards",
    title: "Electric Skateboard Wheel Guards",
    category: "Personal & Academic",
    org: "",
    cover: "images/skateboard-guards.jpg",
    blurb: "Quick-attach splash guards — ride through 2 in. of water at 15 mph and stay dry.",
    tags: ["3D Printing", "Rapid Prototyping", "FEA"],
    featured: false,
    sections: [
      { heading: "What", image: "images/projects/skateboard-guards/1.png", points: [
        "Design and fabricate a quick attach assembly that allows the user to skateboard over wet surfaces without getting splashed by water",
      ]},
      { heading: "How", image: "images/projects/skateboard-guards/2.png", points: [
        "Produced 3D CAD models optimized to be printable on most budget 3D printers",
        "Fabricated 10+ iterations using rapid prototyping methods (3D printing) and performed FEA to identify points of failure",
      ]},
      { heading: "Results", image: "images/projects/skateboard-guards/3.png", points: [
        "Protected user from water depth up to 2 inches and speeds of 15 mph",
        "Simple attachment process under 10 seconds",
        "Minimal disturbance to ride and mobile functionality",
      ]},
    ],
  },
];
