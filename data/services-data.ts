import { Home, Palette, Box, Zap, Leaf, Shield, Layers, MapPin, LucideIcon } from "lucide-react";

export interface SubService {
    title: string;
    description: string;
    items?: string[];
}

export interface ServiceDetail {
    slug: string;
    title: string;
    tagLine?: string;
    description: string; // Used for service cards
    icon: LucideIcon;
    letter: string;
    fullDescription: string;
    subServices?: SubService[];
    quote: {
        text: string;
        author: string;
    };
    features: string[];
    faqs: {
        question: string;
        answer: string;
    }[];
    heroImage: string;
    gallery: string[];
}

export const servicesData: ServiceDetail[] = [
    {
        slug: "architectural",
        title: "Architectural",
        tagLine: "Architecture Built on Precision, Compliance, and Vision",
        description: "Architecture Built on Precision, Compliance, and Vision",
        icon: Home,
        letter: "A",
        fullDescription: "K&C Design provides comprehensive architectural and building design services for residential, commercial, and mixed-use projects across multiple U.S. states. We partner closely with owners, developers, contractors, and consultants to deliver practical solutions from concept through construction—ensuring each project is well-coordinated, buildable, and approval-ready.",
        subServices: [
            {
                title: "New Building & Architectural Design",
                description: "K&C Design offers full architectural design services for new construction projects of varying scale and complexity. Our team focuses on delivering clear, coordinated, and permit-ready documents while maintaining design intent and constructability.",
                items: [
                    "Programming and space planning",
                    "Conceptual and schematic design",
                    "Master planning and site coordination",
                    "Design development",
                    "Construction documents (CDs)",
                    "Interior architectural design",
                    "Furniture, Fixtures & Equipment (FF&E) coordination",
                    "Bid support and contractor coordination",
                    "Construction administration support"
                ]
            },
            {
                title: "Facility Assessment & Existing Building Analysis",
                description: "K&C Design provides detailed facility assessments to help owners, buyers, and operators understand the current condition and compliance status of existing buildings. Our evaluations support renovations, change-of-use projects, and due-diligence efforts.",
                items: [
                    "Building and life-safety analysis",
                    "Code and zoning compliance review",
                    "ADA accessibility surveys",
                    "Existing condition documentation",
                    "Building envelope assessments",
                    "Roofing evaluations",
                    "Renovation feasibility studies"
                ]
            },
            {
                title: "Permitting & Code Compliance",
                description: "Navigating permitting and building codes across jurisdictions can be complex. K&C Design specializes in preparing coordinated drawings and documentation that meet local, state, and national code requirements, helping streamline the approval process.",
                items: [
                    "Building code analysis",
                    "Zoning and land-use coordination",
                    "Authority Having Jurisdiction (AHJ) coordination",
                    "Permit drawing preparation",
                    "Response to plan review comments",
                    "Expedited revisions and resubmittals"
                ]
            },
            {
                title: "Renovations, Retrofits & Improvements",
                description: "K&C Design supports renovation, retrofit, and expansion projects by improving functionality, safety, and efficiency while minimizing disruption to operations.",
                items: [
                    "Code compliance upgrades",
                    "Interior renovations and reconfigurations",
                    "Building envelope improvements",
                    "Roofing replacement coordination",
                    "Tenant improvements",
                    "Building expansions and additions"
                ]
            
            },
           
            
        ],
        quote: {
            text: "Practical design solutions focused on buildability and clear communication.",
            author: "K&C Design Team"
        },
        features: [
            "Programming and space planning",
            "Conceptual and schematic design",
            "Master planning and site coordination",
            "Construction documents (CDs) and permitting",
            "Interior architectural design and FF&E",
            "Multi-state permitting and code expertise"
        ],
        faqs: [
            {
                question: "What states do you provide services in?",
                answer: "We provide services across multiple jurisdictions including Georgia, Florida, California, Texas, New York, and many more, depending on project scope."
            },
            {
                question: "Do you handle facility assessments?",
                answer: "Yes, we provide detailed assessments including building and life-safety analysis, ADA accessibility surveys, and renovation feasibility studies."
            }
        ],
        heroImage: "/architecture.jpg",
        gallery: ["/architecture.jpg"]
    },
    {
        slug: "civil-and-environmental",
        title: "Civil and Environmental",
        tagLine: "Site & Infrastructure Planning",
        description: "Civil Engineering Solutions That Build Strong Foundations",
        icon: MapPin,
        letter: "C",
        fullDescription: "K&C Design provides professional site and infrastructure planning services to support residential, commercial, and mixed-use developments across multiple U.S. states. Our civil engineering team evaluates site constraints early to help reduce risk, control costs, and streamline approvals.",
        subServices: [
            {
                title: "Site & Infrastructure Planning",
                description: "We focus on practical layouts that balance grading, utilities, access, drainage, and regulatory requirements while supporting architectural and operational goals.",
                items: [
                    "Site feasibility and due-diligence studies",
                    "Conceptual site layouts",
                    "Infrastructure master planning",
                    "Site constraint and zoning analysis",
                    "Coordination with architectural and landscape teams"
                ]
            },
            {
                title: "Grading & Drainage Design",
                description: "Proper grading and drainage are critical to site safety, longevity, and permit approval. Our designs prioritize constructability, erosion control, and long-term performance.",
                items: [
                    "Existing and proposed grading plans",
                    "Surface drainage analysis",
                    "Drainage system design",
                    "Earthwork calculations",
                    "Cut/fill optimization",
                    "Coordination with stormwater systems"
                ]
            },
            {
                title: "Stormwater Management & Hydrology",
                description: "K&C Design delivers stormwater management and hydrology design solutions that meet local, state, and federal requirements while minimizing site impact.",
                items: [
                    "Stormwater runoff analysis",
                    "Detention and retention system design",
                    "Above-ground and underground storage",
                    "Stormwater retrofit solutions",
                    "Floodplain coordination",
                    "FEMA-related drainage studies"
                ]
            },
            {
                title: "Utility Design & Coordination",
                description: "We prepare coordinated utility plans that align with architectural, structural, and MEP systems.",
                items: [
                    "Potable water distribution systems",
                    "Sanitary and storm sewer design",
                    "Fire water utility coordination",
                    "Utility relocation and upgrades",
                    "Utility conflict resolution",
                    "Coordination with utility providers and agencies"
                ]
            },
            {
                title: "Roadway, Access & Pavement Design",
                description: "Our designs emphasize safety, efficiency, and compliance with applicable standards.",
                items: [
                    "Site access and circulation design",
                    "Driveway and parking layout",
                    "Pavement section design (asphalt and concrete)",
                    "ADA-compliant pedestrian access",
                    "Fire apparatus access coordination",
                    "Local and state roadway coordination"
                ]
            },
            {
                title: "Environmental & Regulatory Permitting",
                description: "We support clients through the complex permitting process with accurate, coordinated documentation.",
                items: [
                    "Local, state, and federal permitting coordination",
                    "Erosion and sediment control plans",
                    "Stormwater Pollution Prevention Plans (SWPPP)",
                    "NPDES documentation support",
                    "Environmental compliance coordination",
                    "Agency and AHJ coordination"
                ]
            },
            {
                title: "Retrofit, Expansion & Site Improvements",
                description: "We help clients improve site performance while meeting current code requirements.",
                items: [
                    "Drainage and stormwater retrofits",
                    "Site utility upgrades",
                    "Traffic flow and access improvements",
                    "Site reconfiguration for renovations or additions",
                    "Industrial and commercial site modifications"
                ]
            }
        ],
        quote: {
            text: "Balancing grading, utilities, and regulatory requirements with operational goals.",
            author: "K&C Design Team"
        },
        features: [
            "Site feasibility and due-diligence studies",
            "Grading and drainage design",
            "Stormwater management and hydrology",
            "Utility design and coordination",
            "Roadway, access, and pavement design",
            "Environmental and regulatory permitting"
        ],
        faqs: [
            {
                question: "How do you handle stormwater management?",
                answer: "We deliver solutions that meet local, state, and federal requirements, including runoff analysis, detention system design, and floodplain coordination."
            },
            {
                question: "Do you provide erosion control plans?",
                answer: "Yes, we prepare accurate erosion and sediment control plans as part of our environmental permitting services."
            }
        ],
        heroImage: "/civil_service.jpg",
        gallery: ["/civil_service.jpg"]
    },
    {
        slug: "structural",
        title: "Structural",
        tagLine: "Reliable Structural Engineering for Safe, Efficient, and Durable Buildings",
        description: "Reliable Structural Engineering for Safe, Efficient, and Durable Buildings",
        icon: Box,
        letter: "S",
        fullDescription: "K&C Design provides professional structural engineering services for residential, commercial, industrial, and institutional projects across multiple U.S. states. Based in Georgia, our structural engineers deliver practical, code-compliant designs that support architectural intent while ensuring safety, constructability, and long-term performance.",
        subServices: [
            {
                title: "New Structural Design",
                description: "Structural Systems Designed for Performance and Longevity. Our engineers design efficient structural systems that respond to site conditions, loads, and materials.",
                items: [
                    "Single- and multi-story buildings",
                    "Steel, concrete, masonry, wood, and hybrid structures",
                    "Shallow and deep foundation systems",
                    "Gravity and lateral force-resisting systems",
                    "Commercial, institutional, and industrial facilities",
                    "Equipment supports and special loading conditions"
                ]
            },
            {
                title: "Seismic, Wind & Structural Analysis",
                description: "We evaluate how buildings respond to environmental and operational forces using current codes and standards.",
                items: [
                    "Seismic analysis of new and existing structures",
                    "Wind load and lateral system analysis",
                    "Existing building structural evaluations",
                    "Load rating and capacity analysis",
                    "Vibration and serviceability studies",
                    "Dynamic load analysis for equipment and machinery"
                ]
            },
            {
                title: "Foundations & Retaining Structures",
                description: "Coordinated with geotechnical recommendations and site constraints.",
                items: [
                    "Shallow foundations (spread footings, mats)",
                    "Deep foundations (piles, drilled piers, caissons)",
                    "Retaining walls and earth retention systems",
                    "Equipment and machinery foundations",
                    "Liquid-containing and earth-retaining structures"
                ]
            },
            {
                title: "Existing Building Evaluation & Adaptive Reuse",
                description: "Evaluating existing structures and designing modifications to meet current code and performance requirements.",
                items: [
                    "Existing condition assessments",
                    "Structural capacity evaluations",
                    "Change-of-occupancy analysis",
                    "Structural modifications and additions",
                    "Adaptive reuse feasibility studies"
                ]
            },
            {
                title: "Retrofit, Strengthening & Restoration",
                description: "Solutions to extend building life, improve safety, and support new operational needs.",
                items: [
                    "Structural strengthening and reinforcement",
                    "Seismic and wind retrofits",
                    "Historic building stabilization and restoration",
                    "Façade repair and enhancement",
                    "Corrosion evaluation and mitigation"
                ]
            },
            {
                title: "Emergency & Forensic Structural Engineering",
                description: "Assess damage, identify causes, and develop repair solutions.",
                items: [
                    "Structural damage assessments",
                    "Fire, water, and impact damage analysis",
                    "Foundation movement and settlement evaluation",
                    "Failure investigation and reporting",
                    "Emergency shoring and stabilization design"
                ]
            },
            {
                title: "Specialized Structural Systems",
                description: "Advanced analysis and coordination for complex and industrial applications.",
                items: [
                    "Equipment supports for static and dynamic loads",
                    "Monorails, jib cranes, and bridge crane structures",
                    "Industrial platforms and process structures",
                    "Vibration-sensitive structure design",
                    "Structural coordination for heavy equipment"
                ]
            }
        ],
        quote: {
            text: "Engineering systems designed for performance, longevity, and safety.",
            author: "K&C Design Team"
        },
        features: [
            "New building structural design (Steel, Concrete, Wood)",
            "Shallow and deep foundation systems",
            "Seismic, wind, and structural analysis",
            "Existing building evaluation and adaptive reuse",
            "Retrofit, strengthening, and restoration",
            "Emergency and forensic structural engineering"
        ],
        faqs: [
            {
                question: "Do you work with specialized industrial systems?",
                answer: "Yes, we have experience with equipment supports, monorails, jib cranes, and vibration-sensitive structure design."
            },
            {
                question: "Can you evaluate existing building capacity?",
                answer: "Absolutely. We provide assessments for renovations, additions, and change-of-occupancy requirements."
            }
        ],
        heroImage: "/structural.webp",
        gallery: ["/structural.webp"]
    },
    {
        slug: "interior",
        title: "Interior",
        tagLine: "Thoughtful Interior Design That Balances Function, Aesthetics, and Code",
        description: "Thoughtful Interior Design That Balances Function, Aesthetics, and Code",
        icon: Palette,
        letter: "I",
        fullDescription: "K&C Design provides professional interior design services for commercial, residential, and institutional projects across multiple U.S. states. Based in Georgia, our team delivers functional, code-compliant, and visually cohesive interior environments that support how spaces are used, maintained, and experienced.",
        subServices: [
            {
                title: "Interior Design for New Construction & Renovations",
                description: "Collaborating closely with architectural and engineering teams to ensure seamless coordination and efficient execution.",
                items: [
                    "Programming and needs assessment",
                    "Concept and design development",
                    "Space planning and layout optimization",
                    "Accessibility and ADA-compliant design",
                    "Finish material selection",
                    "Furniture, Fixtures & Equipment (FF&E) selection",
                    "Custom millwork detailing",
                    "Construction documents and specifications",
                    "Construction administration support"
                ]
            },
            {
                title: "Commercial & Institutional Interior Design",
                description: "Focusing on durability, compliance, and long-term functionality across various project types.",
                items: [
                    "Corporate and office environments",
                    "Healthcare and medical facilities",
                    "Educational and institutional buildings",
                    "Religious and community facilities",
                    "Recreational and public-use spaces",
                    "Industrial and operational facilities"
                ]
            },
            {
                title: "Accessibility & Code-Compliant Design",
                description: "Integrating accessibility and life-safety considerations into every interior design project.",
                items: [
                    "ADA and accessibility coordination",
                    "Code-compliant space planning",
                    "Life-safety coordination with architectural plans",
                    "Finish and material compliance review"
                ]
            },
            {
                title: "Construction Documentation & Project Support",
                description: "Coordinated interior construction documents that communicate design intent clearly.",
                items: [
                    "Interior plans, elevations, and details",
                    "Finish schedules and specifications",
                    "Millwork and custom element detailing",
                    "Contractor coordination",
                    "Review of submittals and RFIs",
                    "Construction site observation support"
                ]
            },
            {
                title: "Client-Focused Design Approach",
                description: "K&C Design takes a client-focused approach to interior design, combining technical expertise with a collaborative working style. Our goal is to create interiors that enhance user experience while meeting budget, schedule, and regulatory requirements."
            }
        ],
        quote: {
            text: "Interiors that are both practical and visually refined, starting with listening.",
            author: "K&C Design Team"
        },
        features: [
            "Programming and needs assessment",
            "Space planning and layout optimization",
            "Finish material selection and FF&E",
            "Custom millwork detailing",
            "Accessibility and ADA-compliant design",
            "Commercial and institutional interior expertise"
        ],
        faqs: [
            {
                question: "Do you handle commercial renovations?",
                answer: "Yes, we have extensive experience in corporate, healthcare, educational, and public-use interior design."
            },
            {
                question: "How do you ensure code compliance?",
                answer: "We integrate accessibility and life-safety considerations into every stage of our interior design process."
            }
        ],
        heroImage: "/interior.jpg",
        gallery: ["/interior.jpg",]
    },
    {
        slug: "mep-engineering",
        title: "MEP Engineering",
        tagLine: "Integrated Mechanical, Electrical & Plumbing Engineering Solutions",
        description: "Integrated Mechanical, Electrical & Plumbing Engineering Solutions",
        icon: Zap,
        letter: "M",
        fullDescription: "K&C Design provides professional MEP engineering services for commercial, residential, industrial, and institutional projects across multiple U.S. states. Based in Georgia, our MEP engineers deliver efficient, code-compliant, and coordinated system designs that support building performance, occupant comfort, and long-term reliability.",
        subServices: [
            {
                title: "Mechanical Engineering Services",
                description: "Prioritizing energy efficiency, occupant comfort, indoor air quality, and maintainability.",
                items: [
                    "HVAC and ventilation system design",
                    "Ventilation and exhaust system design",
                    "Plumbing system design",
                    "Fire suppression and fire pump coordination",
                    "Hydronic heating and cooling systems",
                    "Mechanical controls and building automation",
                    "Medical gas system design",
                    "Mechanical system retrofits and upgrades"
                ]
            },
            {
                title: "Energy Efficiency & Indoor Air Quality (IAQ)",
                description: "Integrating sustainable building operation and code compliance into mechanical designs.",
                items: [
                    "Energy conservation and efficiency studies",
                    "Indoor air quality (IAQ) evaluations",
                    "Code compliance for energy standards",
                    "System optimization for operational performance"
                ]
            },
            {
                title: "Electrical Engineering Services",
                description: "Focusing on safety, efficiency, scalability, and regulatory compliance.",
                items: [
                    "Power distribution design (Low and Medium voltage)",
                    "Interior and exterior lighting design",
                    "Lighting controls and energy-efficient systems",
                    "Photometric analysis",
                    "Fire alarm system design",
                    "Security and access control systems",
                    "Arc flash analysis and safety studies",
                    "Electrical system upgrades and retrofits"
                ]
            },
            {
                title: "MEP Coordination & BIM Integration",
                description: "Utilizing BIM and 3D coordination tools to support clash detection and system coordination.",
                items: [
                    "Multi-discipline system coordination",
                    "Clash detection support",
                    "Equipment and routing optimization",
                    "Constructability reviews",
                    "Coordination with contractors and consultants"
                ]
            },
            {
                title: "Retrofit, Renovation & Operational Improvements",
                description: "Supporting existing buildings with renovations, expansions, and system upgrades.",
                items: [
                    "HVAC and electrical system retrofits",
                    "Plumbing and fire protection upgrades",
                    "Energy efficiency improvements",
                    "Equipment replacement and modernization",
                    "Existing system evaluations and capacity analysis"
                ]
            }
        ],
        quote: {
            text: "Efficient systems designed to minimize conflicts and reduce construction changes.",
            author: "K&C Design Team"
        },
        features: [
            "HVAC and ventilation system design",
            "Electrical power distribution and lighting",
            "Plumbing and fire suppression systems",
            "Energy efficiency and IAQ evaluations",
            "MEP coordination and BIM integration",
            "Telecommunications and security systems"
        ],
        faqs: [
            {
                question: "Do you use BIM for system coordination?",
                answer: "Yes, we utilize BIM and 3D coordination tools for clash detection and routing optimization."
            },
            {
                question: "What mechanical services do you offer?",
                answer: "Our services include HVAC design, hydronic systems, gray water reuse, and medical gas system coordination."
            }
        ],
        heroImage: "/mep1.jpg",
        gallery: ["/mep1.jpg", "/mep2.jpg", "/mep3.jpg"]
    },
    {
        slug: "landscape",
        title: "Landscape",
        tagLine: "Integrated Landscape Architecture for Functional and Sustainable Sites",
        description: "Integrated Landscape Architecture for Functional and Sustainable Sites",
        icon: Leaf,
        letter: "L",
        fullDescription: "K&C Design provides professional landscape architecture services for residential, commercial, institutional, and mixed-use projects across multiple U.S. states. Based in Georgia, our landscape architects work closely with civil engineers, architects, and planners to deliver creative, cost-effective, and environmentally responsible site designs.",
        subServices: [
            {
                title: "Site Planning & Landscape Design",
                description: "Enhancing site usability, aesthetics, and long-term performance through comprehensive master planning.",
                items: [
                    "Site master planning and feasibility",
                    "Conceptual and detailed landscape design",
                    "Hardscape and softscape design",
                    "Streetscape and pedestrian environment design",
                    "Urban renewal and redevelopment planning",
                    "Landscape preservation and restoration",
                    "Irrigation system design coordination"
                ]
            },
            {
                title: "Sustainable & Environmental Design",
                description: "Integrating strategies to improve environmental performance and long-term resilience.",
                items: [
                    "Sustainable and low-impact design strategies",
                    "Natural water quality enhancement",
                    "Bio-engineering and green infrastructure",
                    "Landscape restoration and reclamation",
                    "Native and adaptive planting strategies"
                ]
            },
            {
                title: "Permitting & Regulatory Coordination",
                description: "Assisting clients with landscape-related permitting alongside civil and environmental consultants.",
                items: [
                    "Local site and zoning ordinance coordination",
                    "Environmental permitting support",
                    "ADA accessibility analysis for site elements",
                    "NPDES coordination related to landscape",
                    "Agency coordination and review responses"
                ]
            },
            {
                title: "Retrofit, Improvements & Operational Enhancements",
                description: "Supporting evolving site needs and code requirements for existing environments.",
                items: [
                    "Site and landscape upgrades",
                    "Streetscape improvements",
                    "Irrigation system upgrades",
                    "Landscape rehabilitation and enhancements",
                    "Site reconfiguration for redevelopment"
                ]
            },
            {
                title: "Integrated Design Approach",
                description: "K&C Design’s landscape architects collaborate closely with civil, architectural, structural, and MEP teams, ensuring landscape designs are fully coordinated with grading, utilities, drainage, and accessibility requirements."
            }
        ],
        quote: {
            text: "Creative site designs that enhance usability, aesthetics, and performance.",
            author: "K&C Design Team"
        },
        features: [
            "Site master planning and feasibility analysis",
            "Hardscape and softscape design",
            "Sustainable and low-impact design strategies",
            "Bio-engineering and green infrastructure",
            "Native and adaptive planting strategies",
            "Permitting and regulatory coordination"
        ],
        faqs: [
            {
                question: "Do you design irrigation systems?",
                answer: "Yes, we provide landscape design and coordinate irrigation system design for long-term site health."
            },
            {
                question: "Can you handle sensitive environmental areas?",
                answer: "Yes, our team is experienced in designing for environmentally-sensitive areas and ensuring regulatory compliance."
            }
        ],
        heroImage: "/landscape.webp",
        gallery: ["/landscape.webp"]
    },
    {
        slug: "fire-protection",
        title: "Fire Protection",
        tagLine: "Comprehensive Fire Protection & Life Safety Solutions",
        description: "Comprehensive Fire Protection & Life Safety Solutions",
        icon: Shield,
        letter: "F",
        fullDescription: "K&C Design provides professional fire protection engineering services for commercial, residential, industrial, and institutional projects across multiple U.S. states. Based in Georgia, our fire protection engineers deliver code-compliant, coordinated, and reliable fire protection systems that support life safety, property protection, and regulatory approval.",
        subServices: [
            {
                title: "Fire Suppression System Design",
                description: "Tailored to building use, occupancy, and applicable codes and standards.",
                items: [
                    "Automatic fire sprinkler system design",
                    "Standpipe system design",
                    "Fire pump and water storage coordination",
                    "Hydraulic calculations and system sizing",
                    "Coordination with water utilities and fire authorities"
                ]
            },
            {
                title: "Fire Alarm & Detection Systems",
                description: "Ensuring timely notification, evacuation, and emergency response.",
                items: [
                    "Fire alarm system design and layout",
                    "Smoke, heat, and specialty detection",
                    "Notification appliance layout",
                    "Voice evacuation system coordination",
                    "Interface with sprinkler, elevator, and HVAC"
                ]
            },
            {
                title: "Life Safety & Code Compliance",
                description: "Supporting life safety and fire code compliance throughout design and permitting.",
                items: [
                    "Fire and life safety code analysis",
                    "Egress and occupant load coordination",
                    "Fire-resistance rating verification",
                    "Fire separation and compartmentation review",
                    "Fire access and fire department coordination"
                ]
            },
            {
                title: "Fire Protection for New Construction & Existing Buildings",
                description: "Services for renovations, expansions, and existing buildings.",
                items: [
                    "Fire protection design for new buildings",
                    "Retrofit and system upgrades",
                    "Change-of-occupancy evaluations",
                    "Existing system assessments",
                    "Phased construction coordination"
                ]
            },
            {
                title: "Specialized Fire Protection Services",
                description: "Supporting complex building systems and diverse industrial uses.",
                items: [
                    "Performance-based fire protection analysis",
                    "Hazard classification evaluation",
                    "Fire water supply and demand analysis",
                    "High-hazard and industrial facility coordination",
                    "Integration with structural fire-resistance"
                ]
            },
            {
                title: "Integrated Coordination & BIM Support",
                description: "K&C Design utilizes BIM and coordination tools to integrate fire protection systems with architectural and MEP designs, reducing conflicts during construction."
            }
        ],
        quote: {
            text: "System designs tailored to building use, occupancy, and rigorous safety codes.",
            author: "K&C Design Team"
        },
        features: [
            "Automatic fire sprinkler and standpipe design",
            "Fire alarm and detection system layout",
            "Fire and life safety code analysis",
            "Hazard classification and water supply analysis",
            "Smoke and heat detection coordination",
            "Performance-based fire protection analysis"
        ],
        faqs: [
            {
                question: "Do you coordinate with authorities having jurisdiction (AHJs)?",
                answer: "Yes, we work closely with AHJs to ensure all systems meet local fire and life safety requirements."
            },
            {
                question: "Can you evaluate existing fire protection systems?",
                answer: "Yes, we assess existing systems for change-of-occupancy and phased construction needs."
            }
        ],
        heroImage: "/fire.jpg",
        gallery: ["/fire.jpg"]
    },
    {
        slug: "3d-modeling-and-bim",
        title: "3D Modeling & BIM",
        tagLine: "Advanced 3D Modeling & Building Information Modeling (BIM)",
        description: "Advanced 3D Modeling & Building Information Modeling (BIM)",
        icon: Layers,
        letter: "B",
        fullDescription: "K&C Design provides professional 3D modeling and BIM services for architectural, structural, MEP, and interior projects across multiple U.S. states. Based in Georgia, we leverage the latest digital design tools to improve coordination, reduce errors, and enhance visualization throughout all project phases.",
        subServices: [
            {
                title: "Architectural 3D Modeling",
                description: "Highly detailed digital representations allowing stakeholders to see projects in context and explore finishes early.",
                items: [
                    "Schematic and concept modeling",
                    "Photorealistic renderings",
                    "Interior and exterior visualization",
                    "Material and finish simulations",
                    "Design review and client presentations"
                ]
            },
            {
                title: "BIM Coordination & Clash Detection",
                description: "Reducing design conflicts, minimizing change orders, and improving constructability across disciplines.",
                items: [
                    "Multi-disciplinary model integration",
                    "Clash detection and resolution",
                    "Coordinated construction documentation",
                    "Equipment and system layout optimization",
                    "4D scheduling and sequencing support"
                ]
            },
            {
                title: "Structural & MEP 3D Modeling",
                description: "Ensuring utilities and mechanical systems are fully coordinated before construction begins.",
                items: [
                    "Structural framing and reinforcement modeling",
                    "HVAC ductwork, piping, and electrical layout",
                    "Mechanical, plumbing, and electrical clash detection",
                    "Constructability review for prefabrication"
                ]
            },
            {
                title: "Renovation, Retrofit & Existing Conditions Modeling",
                description: "Creating accurate digital models of existing buildings to guide upgrades or expansions.",
                items: [
                    "3D scanning and point cloud integration",
                    "Existing conditions modeling",
                    "Renovation and retrofit coordination",
                    "Design visualization for stakeholder approval"
                ]
            }
        ],
        quote: {
            text: "Leveraging digital tools to ensure designs are accurate, constructible, and fully integrated.",
            author: "K&C Design Team"
        },
        features: [
            "BIM coordination and clash detection",
            "Photorealistic renderings and visualization",
            "4D scheduling and sequencing support",
            "As-built model generation",
            "3D scanning and point cloud integration",
            "Modeling for prefabrication and constructability"
        ],
        faqs: [
            {
                question: "How does BIM benefit my project?",
                answer: "BIM reduces design conflicts, minimizes change orders, and improves coordination between all disciplines."
            },
            {
                question: "Do you offer visualization services?",
                answer: "Yes, we provide high-quality renderings and simulations to explore materials, finishes, and layouts contextually."
            }
        ],
        heroImage: "/villa3.webp",
        gallery: ["/about-villa.png", "/villa2.jpg", "/villa3.webp"]
    }
];
