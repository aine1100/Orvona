import { Home, Palette, Box, Zap, Leaf, Shield, Layers, MapPin, LucideIcon } from "lucide-react";

export interface ServiceDetail {
    slug: string;
    title: string;
    description: string; // Used for service cards
    icon: LucideIcon;
    letter: string;
    fullDescription: string;
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
        description: "Architecture Built on Precision, Compliance, and Vision",
        icon: Home,
        letter: "A",
        fullDescription: "K&C Design provides comprehensive architectural and building design services for residential, commercial, and mixed-use projects across multiple U.S. states. We partner closely with owners, developers, contractors, and consultants to deliver practical solutions from concept through construction—ensuring each project is well-coordinated, buildable, and approval-ready.",
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
        description: "Civil Engineering Solutions That Build Strong Foundations",
        icon: MapPin,
        letter: "C",
        fullDescription: "K&C Design provides professional site and infrastructure planning services to support residential, commercial, and mixed-use developments across multiple U.S. states. Our civil engineering team evaluates site constraints early to help reduce risk, control costs, and streamline approvals.",
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
        description: "Reliable Structural Engineering for Safe, Efficient, and Durable Buildings",
        icon: Box,
        letter: "S",
        fullDescription: "K&C Design provides professional structural engineering services for residential, commercial, industrial, and institutional projects across multiple U.S. states. Based in Georgia, our structural engineers deliver practical, code-compliant designs that support architectural intent while ensuring safety, constructability, and long-term performance.",
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
        description: "Thoughtful Interior Design That Balances Function, Aesthetics, and Code",
        icon: Palette,
        letter: "I",
        fullDescription: "K&C Design provides professional interior design services for commercial, residential, and institutional projects across multiple U.S. states. Based in Georgia, our team delivers functional, code-compliant, and visually cohesive interior environments that support how spaces are used, maintained, and experienced.",
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
        gallery: ["/interior.jpg", ]
    },
    {
        slug: "mep-engineering",
        title: "MEP Engineering",
        description: "Integrated Mechanical, Electrical & Plumbing Engineering Solutions",
        icon: Zap,
        letter: "M",
        fullDescription: "K&C Design provides professional MEP engineering services for commercial, residential, industrial, and institutional projects across multiple U.S. states. Based in Georgia, our MEP engineers deliver efficient, code-compliant, and coordinated system designs that support building performance, occupant comfort, and long-term reliability.",
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
        gallery: ["/mep1.jpg","/mep2.jpg","/mep3.jpg"]
    },
    {
        slug: "landscape",
        title: "Landscape",
        description: "Integrated Landscape Architecture for Functional and Sustainable Sites",
        icon: Leaf,
        letter: "L",
        fullDescription: "K&C Design provides professional landscape architecture services for residential, commercial, institutional, and mixed-use projects across multiple U.S. states. Based in Georgia, our landscape architects work closely with civil engineers, architects, and planners to deliver creative, cost-effective, and environmentally responsible site designs.",
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
        gallery: [ "/landscape.webp"]
    },
    {
        slug: "fire-protection",
        title: "Fire Protection",
        description: "Comprehensive Fire Protection & Life Safety Solutions",
        icon: Shield,
        letter: "F",
        fullDescription: "K&C Design provides professional fire protection engineering services for commercial, residential, industrial, and institutional projects across multiple U.S. states. Based in Georgia, our fire protection engineers deliver code-compliant, coordinated, and reliable fire protection systems that support life safety, property protection, and regulatory approval.",
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
        description: "Advanced 3D Modeling & Building Information Modeling (BIM)",
        icon: Layers,
        letter: "B",
        fullDescription: "K&C Design provides professional 3D modeling and BIM services for architectural, structural, MEP, and interior projects across multiple U.S. states. Based in Georgia, we leverage the latest digital design tools to improve coordination, reduce errors, and enhance visualization throughout all project phases.",
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
