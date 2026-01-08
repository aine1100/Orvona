import { Home, Palette, Box, Sofa, UtensilsCrossed, Bath, LucideIcon } from "lucide-react";

export interface ServiceDetail {
    slug: string;
    title: string;
    description: string;
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
        slug: "architecture",
        title: "Architecture",
        description: "Architectural designs that balance aesthetics, interior, function and innovative thinking.",
        icon: Home,
        letter: "A",
        fullDescription: "We create architectural spaces that reflect individuality and enhance everyday living. Our approach balances style and practicality to achieve beautiful and livable environments, highlighting thoughtful details and seamless integration of modern design principles.",
        quote: {
            text: "The details are not the details. They make the design.",
            author: "Charles Eames"
        },
        features: [
            "Personalized concepts tailored to client lifestyles",
            "Elegant material and color coordination",
            "Seamless fusion of aesthetics and functionality"
        ],
        faqs: [
            {
                question: "What does your design package include?",
                answer: "Our package includes conceptual design, site analysis, detailed drawings, and material selection."
            },
            {
                question: "How long does a typical project take?",
                answer: "A typical architecture project can span from 3 to 12 months depending on complexity."
            },
            {
                question: "Can I request changes during the design process?",
                answer: "Yes, we work iteratively with our clients to ensure the final design meets their vision."
            }
        ],
        heroImage: "/about-villa.png",
        gallery: ["/villa2.jpg", "/hero-bg.png", "/villa3.webp"]
    },
    {
        slug: "interior-design",
        title: "Interior Design",
        description: "We create elegant, functional interiors that reflect your lifestyle and personal taste.",
        icon: Palette,
        letter: "I",
        fullDescription: "Interior design is about creating harmony and balance within a space. We focus on textures, lighting, and layout to ensure every room feels inviting and purposeful, reflecting your unique personality through curated materials and bespoke furniture.",
        quote: {
            text: "Design is thinking made visual.",
            author: "Saul Bass"
        },
        features: [
            "Custom furniture and lighting design",
            "Space planning and ergonomic optimization",
            "Expert material and finish selection"
        ],
        faqs: [
            {
                question: "Do you handle the delivery and installation?",
                answer: "Yes, we manage the entire process from sourcing to final installation."
            },
            {
                question: "Can you work with my existing furniture?",
                answer: "Absolutely, we can integrate your cherished pieces into a fresh, cohesive design."
            }
        ],
        heroImage: "/hero-bg.png",
        gallery: ["/about-villa.png", "/villa2.jpg", "/villa3.webp"]
    },
    {
        slug: "3d-modelling",
        title: "3D Modelling",
        description: "High-quality 3D modelling solutions for architecture, interiors, exterior, design and products.",
        icon: Box,
        letter: "M",
        fullDescription: "Our 3D modelling services bring your vision to life before the first stone is laid. We use cutting-edge technology to create realistic visualizations that help in making informed design decisions and communicating complex spatial ideas.",
        quote: {
            text: "Visualizing the future is the first step to building it.",
            author: "Unknown"
        },
        features: [
            "Photorealistic renderings and animations",
            "Virtual reality walkthroughs",
            "Precise scale modelling for construction"
        ],
        faqs: [
            {
                question: "What file formats do you provide?",
                answer: "We provide files in all major 3D and image formats, including OBJ, STL, and high-res PNGs."
            },
            {
                question: "How detailed are your models?",
                answer: "We can provide models ranging from massing studies to fully detailed, textured interiors."
            }
        ],
        heroImage: "/villa2.jpg",
        gallery: ["/villa3.webp", "/hero-bg.png", "/about-villa.png"]
    },
    {
        slug: "decor-plan",
        title: "Decor Plan",
        description: "Creative decor plans that balance style, comfort and functional harmony.",
        icon: Sofa,
        letter: "D",
        fullDescription: "A decor plan is the finishing touch that transforms a house into a home. We curate art, accessories, and textiles to bring warmth and character to your spaces, ensuring every element works in harmony with your overall aesthetic.",
        quote: {
            text: "Decorating is not about making stage sets, it's about creating a quality of life.",
            author: "Albert Hadley"
        },
        features: [
            "Curated art and accessory selection",
            "Custom window treatments and textiles",
            "Seasonal and holiday decor planning"
        ],
        faqs: [
            {
                question: "How do you start a decor plan?",
                answer: "We start with a style consultation to understand your preferences and existing pieces."
            },
            {
                question: "Can you help me choose an art collection?",
                answer: "Yes, we help source and curate art that resonates with you and your space."
            }
        ],
        heroImage: "/villa3.webp",
        gallery: ["/villa2.jpg", "/about-villa.png", "/hero-bg.png"]
    },
    {
        slug: "kitchen-design",
        title: "Kitchen Design",
        description: "Transforming everyday cooking with elegant modern and functional kitchen design.",
        icon: UtensilsCrossed,
        letter: "K",
        fullDescription: "The kitchen is the heart of the home. Our kitchen decisions prioritize workflow, storage efficiency, and durability without compromising on the elegant look that defines our signature style.",
        quote: {
            text: "The kitchen is where life happens.",
            author: "Unknown"
        },
        features: [
            "Ergonomic workflow planning",
            "Bespoke cabinetry and island design",
            "Premium appliance integration"
        ],
        faqs: [
            {
                question: "What are the most durable materials for countertops?",
                answer: "We often recommend quartz, granite, or high-end porcelains for their durability and lack of maintenance."
            },
            {
                question: "How do you optimize small kitchens?",
                answer: "We use smart storage solutions and prioritize essential zones to maximize every inch."
            }
        ],
        heroImage: "/about-villa.png",
        gallery: ["/villa3.webp", "/villa2.jpg", "/hero-bg.png"]
    },
    {
        slug: "bathroom-design",
        title: "Bathroom Design",
        description: "Elevating daily routines with timeless, modern and elegant bathroom design.",
        icon: Bath,
        letter: "B",
        fullDescription: "We design bathrooms as personal sanctuaries. By combining luxurious materials, precise lighting, and innovative fixtures, we create spaces where you can relax and rejuvenate in style.",
        quote: {
            text: "The bathroom should be a place of relaxation and renewal.",
            author: "Unknown"
        },
        features: [
            "Spa-like fixtures and wet-room designs",
            "Custom vanity and storage solutions",
            "Advanced lighting and ventilation planning"
        ],
        faqs: [
            {
                question: "Can you install a steam shower?",
                answer: "Yes, we can integrate steam systems and other spa features into your design."
            },
            {
                question: "How do you handle lighting in wet areas?",
                answer: "We use IP-rated fixtures and layer lighting to provide both task and mood illumination safely."
            }
        ],
        heroImage: "/hero-bg.png",
        gallery: ["/about-villa.png", "/villa2.jpg", "/villa3.webp"]
    }
];
