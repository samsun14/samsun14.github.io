// ============================================================
//  ALL SITE CONTENT LIVES HERE.
//  Edit text, add a project, or add a job in this file —
//  the pages (index.html, projects.html, project.html) build themselves from it.
// ============================================================

const SITE = {
  name: "Sam Sun",
  tagline: "Mechanical Engineering Portfolio",
  greeting: "Hi I'm Sam!",
  intro: "I'm a 4th year Mechanical Engineering Student at Purdue University. I am passionate about designing cost-effective products to positively impact the lives of many.",
  email: "samuelsun2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/qiancheng-sun/",
  resume: "resume.pdf",
  photo: "images/profile.png",
};

// Newest first. Each job becomes one entry on the home-page timeline.
//   logo:     colored logo shown in the row of companies
//   mark:     small icon inside the timeline dot (defaults to logo)
//   image:    photo shown in the entry ("" = empty placeholder slot)
//   readMore: project id from PROJECTS below (e.g. "linear-rail-tester") or any URL ("" = no button)
const EXPERIENCE = [
  {
    company: "Tesla",
    logo: "images/tesla.png",
    role: "Interior Mechanical Design",
    dates: "Aug 2026 – Jan 2027",
    image: "images/experience/tesla-cybercab.png",
    summary: "",
    readMore: "",
  },
  {
    company: "Apple",
    logo: "images/apple.png",
    role: "Mac Product Design EPM",
    dates: "May – Aug 2026",
    image: "images/experience/apple-mbp-proled-xdr.png",
    summary: "MacBook Pro PROLED XDR (OLED with Touch)",
    readMore: "",
  },
  {
    company: "Formlabs",
    logo: "images/formlabs.png",
    role: "Manufacturing Design Engineering Intern",
    dates: "Jun – Aug 2025",
    image: "images/experience/formlabs.jpg",
    summary: "Designed, prototyped, and validated custom machines used for current and next-gen printer manufacturing.",
    readMore: "",
  },
  {
    company: "Tesla",
    logo: "images/tesla.png",
    role: "Mechanical Engineering Intern",
    team: "Cell Manufacturing – Tabless 4680",
    dates: "Sep 2024 – May 2025",
    image: "images/experience/tesla-4680.jpg",
    summary: "Designed and implemented numerous production equipment improvements to improve KPIs and address safety incidents.",
    readMore: "",
  },
  {
    company: "Panasonic Energy North America",
    logo: "images/panasonic-logo.png",
    mark: "images/panasonic.png",
    role: "Equipment Engineering Intern",
    dates: "May – Aug 2024",
    image: "images/experience/panasonic-2170.png",
    summary: "Designed the mounting structure for a high-speed inline inspection system on the 2170 cell winders.",
    readMore: "",
  },
];

const EDUCATION = {
  school: "Purdue University",
  logo: "images/purdue.png",
  degree: "B.S. Mechanical Engineering",
  dates: "2022 – 2027",
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
    category: "Personal",
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
    id: "wind-tunnel-mesh",
    title: "3D Print Mesh Resolution vs. Aerodynamic Drag",
    category: "Personal",
    org: "Purdue ME 308",
    cover: "images/wind-tunnel-mesh.jpg",
    blurb: "Wind tunnel study finding how far an STL can be simplified before measured drag stops being trustworthy.",
    tags: ["Wind Tunnel", "3D Printing", "Data Analysis", "CFD"],
    featured: false,
    sections: [
      { heading: "What", image: "images/projects/wind-tunnel-mesh/1.jpg", points: [
        "3D-printed wind tunnel models start as STL files that approximate curves with flat facets, and people often simplify them to save print time, but there is no clear guideline for when that starts to corrupt drag measurements",
        "Tested a 4.00\" spheroid printed at 8 mesh resolutions (390,240 down to 56 facets, 0.1–6.4 mm max surface deviation), plus a detailed cat model at 3 resolutions to see if the trend carries over to complex shapes",
        "Printed all 11 models in PLA with identical slicer settings and no post-processing, so mesh resolution was the only variable",
      ]},
      { heading: "How", image: "images/projects/wind-tunnel-mesh/2.jpg", points: [
        "Tested in an ELD 402B low-speed wind tunnel at 21.7 and 30.2 m/s (Re ≈ 1.5×10⁵ and 2.0×10⁵), measuring drag with an LVDT dynamometer and subtracting the mounting-hardware drag from every run",
        "Each model was double-nutted onto a fixed sting so its center sat at the same point in the test section every run; air density was recomputed each session from barometer and thermometer readings",
      ]},
      { heading: "Results", image: "images/projects/wind-tunnel-mesh/3.jpg", points: [
        "Found a sharp threshold: the drag coefficient fell more than 50% between 0.2 mm and 0.4 mm deviation at both speeds (~0.4 → ~0.07)",
        "Attributed to a roughness-induced early drag crisis: the facets trip the boundary layer to turbulence and delay separation, the same effect as dimples on a golf ball",
      ]},
      { heading: "Results", image: "images/projects/wind-tunnel-mesh/4.jpg", points: [
        "Ran SolidWorks Flow Simulation on every spheroid as a cross-check. Predicted drag fell in the same range as the measurements and showed how the coarse facets reshape the wake",
        "The cat model showed no sharp drop, only a gradual 4.5–8.3% rise in drag coefficient as the mesh got coarser",
        "Takeaway: acceptable STL simplification depends on geometry. Smooth bluff bodies tolerate it up to a sharp cutoff, while feature-rich parts need higher resolution",
      ]},
    ],
  },
  {
    id: "fin-heat-sink",
    title: "Continuous vs. Segmented Fin Heat Sinks",
    category: "Personal",
    org: "Purdue ME 315",
    cover: "images/fin-heat-sink.jpg",
    blurb: "Machined and tested three aluminum fin arrays. 1 mm fin breaks cut thermal resistance to less than half that of continuous fins.",
    tags: ["Heat Transfer", "CNC Machining", "Instrumentation", "CFD"],
    featured: false,
    sections: [
      { heading: "What", image: "images/projects/fin-heat-sink/1.jpg", points: [
        "Investigated whether breaking heat sink fins into segments interrupts thermal boundary-layer growth and improves cooling, which matters for high power density systems like EV battery packs and data centers",
        "Compared three Aluminum 6061 fin arrays with the same 2\" square footprint: continuous, 1 mm breaks, and 7.238 mm breaks",
      ]},
      { heading: "How", image: "images/projects/fin-heat-sink/cam.gif", points: [
        "Programmed the toolpaths in CAM, then machined all three fin arrays on a CNC mill",
      ]},
      { heading: "How", image: "images/projects/fin-heat-sink/2.jpg", points: [
        "Cut the 1 mm breaks on a bandsaw to finish the segmented arrays",
      ]},
      { heading: "How", image: "images/projects/fin-heat-sink/6.jpg", points: [
        "CFD in SolidWorks Flow Simulation showed the outer fin rows see very different airflow than the interior ones",
        "Added an extra row of fins on each side so the measured middle fins saw the same airflow as interior channels",
      ]},
      { heading: "How", image: "images/projects/fin-heat-sink/3.jpg", points: [
        "A 40 W pad heater (114 V across 325 Ω) was bonded to the base with thermal paste and housed in a foam insulation block",
        "8 team-built K-type thermocouples at each fin's base and tip, calibrated in an ice-point bath; tip thermocouples were held with Kapton tape for an adiabatic-tip assumption",
      ]},
      { heading: "How", image: "images/projects/fin-heat-sink/4.jpg", points: [
        "A blower box provided 6 m/s airflow (calibrated with an anemometer), and temperatures were logged through a National Instruments DAQ and LabVIEW until steady state (< 0.5 °C change over 5 min)",
        "Thermal resistance was derived from the base and tip temperatures with standard fin equations, with thermocouple contact resistance characterized and compensated",
      ]},
      { heading: "Results", image: "images/projects/fin-heat-sink/5.jpg", points: [
        "The 1 mm break performed best: 1.61 ± 0.20 K/W vs. 3.53 ± 0.96 K/W for the continuous fin (h = 81 vs. 49 W/m²K); the 7.238 mm break measured 2.46 ± 0.32 K/W",
        "Ideal CFD predicted the opposite (continuous best). The gap was traced to thermal paste bridging the 1 mm breaks and the rougher machined surfaces, and a CFD model with the paste bridge reproduced the trend",
        "Takeaway: continuous fins win in theory, but rough surfaces and a conduction path across segments can significantly improve real-world performance",
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
    category: "Personal",
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
    category: "Personal",
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
    category: "Personal",
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
