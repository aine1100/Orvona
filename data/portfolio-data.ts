// Portfolio Categories and Projects Data

export interface Project {
    title: string;
    slug: string;
    coverImage: string;
    images: string[];
    folder: string;
}

export interface Category {
    slug: string;
    title: string;
    description: string;
    coverImage: string;
    folder: string;
    projects: Project[];
}

// Helper function to create a slug from folder name
function slugify(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// Helper function to format folder name as title
function formatTitle(name: string): string {
    return name
        .split(/[-_\s]+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

export const portfolioCategories: Category[] = [
    {
        slug: "commercial",
        title: "Commercial & Industrial",
        description: "Office buildings, retail spaces, warehouses, and industrial facilities designed for functionality and aesthetics.",
        coverImage: "/PORTFOLIO/Commercial/ski resort/ski-resort-01.jpg",
        folder: "Commercial",
        projects: [
            { 
                title: "Iron Warehouse", 
                slug: "iron-warehouse",
                folder: "Iron warehouse",
                coverImage: "/PORTFOLIO/Commercial/Iron warehouse/iron-warehouse-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/Iron warehouse/iron-warehouse-01.jpg",
                    "/PORTFOLIO/Commercial/Iron warehouse/iron-warehouse-02.jpg",
                    "/PORTFOLIO/Commercial/Iron warehouse/iron-warehouse-03.jpg",
                    "/PORTFOLIO/Commercial/Iron warehouse/iron-warehouse-04.jpg",
                ]
            },
            { 
                title: "Chile Enrichment", 
                slug: "chile-enrichment",
                folder: "chile enrichment",
                coverImage: "/PORTFOLIO/Commercial/chile enrichment/chile-enrichment-01.webp",
                images: [
                    "/PORTFOLIO/Commercial/chile enrichment/chile-enrichment-01.webp",
                    "/PORTFOLIO/Commercial/chile enrichment/chile-enrichment-02.webp",
                    "/PORTFOLIO/Commercial/chile enrichment/chile-enrichment-03.webp",
                    "/PORTFOLIO/Commercial/chile enrichment/chile-enrichment-04.webp",
                    "/PORTFOLIO/Commercial/chile enrichment/chile-enrichment-05.webp",
                    "/PORTFOLIO/Commercial/chile enrichment/chile-enrichment-06.webp",
                    "/PORTFOLIO/Commercial/chile enrichment/chile-enrichment-07.webp",
                    "/PORTFOLIO/Commercial/chile enrichment/chile-enrichment-08.webp",
                    "/PORTFOLIO/Commercial/chile enrichment/chile-enrichment-09.webp",
                    "/PORTFOLIO/Commercial/chile enrichment/chile-enrichment-10.webp",
                    "/PORTFOLIO/Commercial/chile enrichment/chile-enrichment-11.webp",
                    "/PORTFOLIO/Commercial/chile enrichment/chile-enrichment-12.webp",
                    "/PORTFOLIO/Commercial/chile enrichment/chile-enrichment-13.webp",
                    "/PORTFOLIO/Commercial/chile enrichment/chile-enrichment-14.webp",
                ]
            },
            { 
                title: "Church Gym", 
                slug: "church-gym",
                folder: "churchgym",
                coverImage: "/PORTFOLIO/Commercial/churchgym/churchgym-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/churchgym/churchgym-01.jpg",
                    "/PORTFOLIO/Commercial/churchgym/churchgym-02.jpg",
                ]
            },
            { 
                title: "Detention Center", 
                slug: "detention-center",
                folder: "detention center",
                coverImage: "/PORTFOLIO/Commercial/detention center/detention-center-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/detention center/detention-center-01.jpg",
                    "/PORTFOLIO/Commercial/detention center/detention-center-02.jpg",
                    "/PORTFOLIO/Commercial/detention center/detention-center-03.jpg",
                    "/PORTFOLIO/Commercial/detention center/detention-center-04.jpg",
                    "/PORTFOLIO/Commercial/detention center/detention-center-05.jpg",
                    "/PORTFOLIO/Commercial/detention center/detention-center-06.jpg",
                    "/PORTFOLIO/Commercial/detention center/detention-center-07.jpg",
                    "/PORTFOLIO/Commercial/detention center/detention-center-08.jpg",
                    "/PORTFOLIO/Commercial/detention center/detention-center-09.jpg",
                ]
            },
            { 
                title: "Fire Station", 
                slug: "fire-station",
                folder: "fire station",
                coverImage: "/PORTFOLIO/Commercial/fire station/fire-station-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/fire station/fire-station-01.jpg",
                    "/PORTFOLIO/Commercial/fire station/fire-station-02.jpg",
                    "/PORTFOLIO/Commercial/fire station/fire-station-03.jpg",
                    "/PORTFOLIO/Commercial/fire station/fire-station-04.jpg",
                    "/PORTFOLIO/Commercial/fire station/fire-station-05.jpg",
                    "/PORTFOLIO/Commercial/fire station/fire-station-06.jpg",
                ]
            },
            { 
                title: "Fire Station 1", 
                slug: "fire-station-1",
                folder: "fire station1",
                coverImage: "/PORTFOLIO/Commercial/fire station1/fire-station1-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/fire station1/fire-station1-01.jpg",
                    "/PORTFOLIO/Commercial/fire station1/fire-station1-02.jpg",
                    "/PORTFOLIO/Commercial/fire station1/fire-station1-03.jpg",
                    "/PORTFOLIO/Commercial/fire station1/fire-station1-04.jpg",
                ]
            },
            { 
                title: "Fire Station 2", 
                slug: "fire-station-2",
                folder: "fire station2",
                coverImage: "/PORTFOLIO/Commercial/fire station2/fire-station2-01.webp",
                images: [
                    "/PORTFOLIO/Commercial/fire station2/fire-station2-01.webp",
                    "/PORTFOLIO/Commercial/fire station2/fire-station2-02.webp",
                    "/PORTFOLIO/Commercial/fire station2/fire-station2-03.webp",
                    "/PORTFOLIO/Commercial/fire station2/fire-station2-04.webp",
                    "/PORTFOLIO/Commercial/fire station2/fire-station2-05.webp",
                    "/PORTFOLIO/Commercial/fire station2/fire-station2-06.webp",
                    "/PORTFOLIO/Commercial/fire station2/fire-station2-07.webp",
                    "/PORTFOLIO/Commercial/fire station2/fire-station2-08.webp",
                    "/PORTFOLIO/Commercial/fire station2/fire-station2-09.webp",
                    "/PORTFOLIO/Commercial/fire station2/fire-station2-10.webp",
                    "/PORTFOLIO/Commercial/fire station2/fire-station2-11.webp",
                ]
            },
            { 
                title: "Hockey Arena", 
                slug: "hockey-arena",
                folder: "hockey",
                coverImage: "/PORTFOLIO/Commercial/hockey/hockey-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/hockey/hockey-01.jpg",
                    "/PORTFOLIO/Commercial/hockey/imgi_3_Carlson Center 2.jpg",
                    "/PORTFOLIO/Commercial/hockey/imgi_4_Carlson Center 3.jpg",
                ]
            },
            { 
                title: "IA Office", 
                slug: "ia-office",
                folder: "ia",
                coverImage: "/PORTFOLIO/Commercial/ia/ia-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/ia/ia-01.jpg",
                    "/PORTFOLIO/Commercial/ia/ia-02.jpg",
                    "/PORTFOLIO/Commercial/ia/ia-03.jpg",
                    "/PORTFOLIO/Commercial/ia/ia-04.jpg",
                    "/PORTFOLIO/Commercial/ia/ia-05.jpg",
                    "/PORTFOLIO/Commercial/ia/ia-06.jpg",
                    "/PORTFOLIO/Commercial/ia/ia-07.jpg",
                    "/PORTFOLIO/Commercial/ia/ia-08.jpg",
                    "/PORTFOLIO/Commercial/ia/ia-09.jpg",
                ]
            },
            { 
                title: "IA Office 1", 
                slug: "ia-office-1",
                folder: "ia1",
                coverImage: "/PORTFOLIO/Commercial/ia1/ia1-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/ia1/ia1-01.jpg",
                    "/PORTFOLIO/Commercial/ia1/ia1-02.jpg",
                    "/PORTFOLIO/Commercial/ia1/ia1-03.jpg",
                    "/PORTFOLIO/Commercial/ia1/ia1-04.jpg",
                    "/PORTFOLIO/Commercial/ia1/ia1-05.jpg",
                    "/PORTFOLIO/Commercial/ia1/ia1-06.jpg",
                    "/PORTFOLIO/Commercial/ia1/ia1-07.jpg",
                    "/PORTFOLIO/Commercial/ia1/ia1-08.jpg",
                ]
            },
            { 
                title: "IA Office 2", 
                slug: "ia-office-2",
                folder: "ia2",
                coverImage: "/PORTFOLIO/Commercial/ia2/ia2-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/ia2/ia2-01.jpg",
                    "/PORTFOLIO/Commercial/ia2/ia2-02.jpg",
                    "/PORTFOLIO/Commercial/ia2/ia2-03.jpg",
                    "/PORTFOLIO/Commercial/ia2/ia2-04.jpg",
                    "/PORTFOLIO/Commercial/ia2/ia2-05.jpg",
                    "/PORTFOLIO/Commercial/ia2/ia2-06.jpg",
                    "/PORTFOLIO/Commercial/ia2/ia2-07.jpg",
                ]
            },
            { 
                title: "IA Office 3", 
                slug: "ia-office-3",
                folder: "ia3",
                coverImage: "/PORTFOLIO/Commercial/ia3/ia3-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/ia3/ia3-01.jpg",
                    "/PORTFOLIO/Commercial/ia3/ia3-01.png",
                    "/PORTFOLIO/Commercial/ia3/ia3-02.jpg",
                    "/PORTFOLIO/Commercial/ia3/ia3-02.png",
                    "/PORTFOLIO/Commercial/ia3/ia3-03.png",
                    "/PORTFOLIO/Commercial/ia3/ia3-04.png",
                ]
            },
            { 
                title: "IA Office 4", 
                slug: "ia-office-4",
                folder: "ia4",
                coverImage: "/PORTFOLIO/Commercial/ia4/ia4-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/ia4/ia4-01.jpg",
                    "/PORTFOLIO/Commercial/ia4/ia4-02.jpg",
                    "/PORTFOLIO/Commercial/ia4/ia4-03.jpg",
                    "/PORTFOLIO/Commercial/ia4/ia4-04.jpg",
                ]
            },
            { 
                title: "IL Building", 
                slug: "il-building",
                folder: "il",
                coverImage: "/PORTFOLIO/Commercial/il/il-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/il/il-01.jpg",
                    "/PORTFOLIO/Commercial/il/il-02.jpg",
                    "/PORTFOLIO/Commercial/il/il-03.jpg",
                    "/PORTFOLIO/Commercial/il/il-04.jpg",
                    "/PORTFOLIO/Commercial/il/il-05.jpg",
                    "/PORTFOLIO/Commercial/il/il-06.jpg",
                    "/PORTFOLIO/Commercial/il/il-07.jpg",
                    "/PORTFOLIO/Commercial/il/il-08.jpg",
                ]
            },
            { 
                title: "MI Facility", 
                slug: "mi-facility",
                folder: "mi",
                coverImage: "/PORTFOLIO/Commercial/mi/mi-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/mi/mi-01.jpg",
                    "/PORTFOLIO/Commercial/mi/mi-02.jpg",
                    "/PORTFOLIO/Commercial/mi/mi-03.jpg",
                    "/PORTFOLIO/Commercial/mi/mi-04.jpg",
                ]
            },
            { 
                title: "MN Complex", 
                slug: "mn-complex",
                folder: "mn",
                coverImage: "/PORTFOLIO/Commercial/mn/mn-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/mn/mn-01.jpg",
                    "/PORTFOLIO/Commercial/mn/mn-02.jpg",
                    "/PORTFOLIO/Commercial/mn/mn-03.jpg",
                    "/PORTFOLIO/Commercial/mn/mn-04.jpg",
                    "/PORTFOLIO/Commercial/mn/mn-05.jpg",
                ]
            },
            { 
                title: "Public Safety Headquarters", 
                slug: "public-safety-headquarters",
                folder: "public",
                coverImage: "/PORTFOLIO/Commercial/public/public-safety-headquarters-01.webp",
                images: [
                    "/PORTFOLIO/Commercial/public/public-safety-headquarters-01.webp",
                    "/PORTFOLIO/Commercial/public/public-safety-headquarters-02.webp",
                    "/PORTFOLIO/Commercial/public/public-safety-headquarters-03.webp",
                    "/PORTFOLIO/Commercial/public/public-safety-headquarters-04.webp",
                    "/PORTFOLIO/Commercial/public/public-safety-headquarters-05.webp",
                    "/PORTFOLIO/Commercial/public/public-safety-headquarters-06.webp",
                    "/PORTFOLIO/Commercial/public/public-safety-headquarters-07.webp",
                    "/PORTFOLIO/Commercial/public/public-safety-headquarters-08.webp",
                    "/PORTFOLIO/Commercial/public/public-safety-headquarters-09.webp",
                    "/PORTFOLIO/Commercial/public/public-safety-headquarters-10.webp",
                    "/PORTFOLIO/Commercial/public/public-safety-headquarters-11.webp",
                ]
            },
            { 
                title: "SD Building", 
                slug: "sd-building",
                folder: "sd",
                coverImage: "/PORTFOLIO/Commercial/sd/sd-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/sd/sd-01.jpg",
                    "/PORTFOLIO/Commercial/sd/sd-02.jpg",
                ]
            },
            { 
                title: "Seed Warehouse", 
                slug: "seed-warehouse",
                folder: "seed warehouse",
                coverImage: "/PORTFOLIO/Commercial/seed warehouse/seed-warehouse-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/seed warehouse/seed-warehouse-01.jpg",
                    "/PORTFOLIO/Commercial/seed warehouse/seed-warehouse-02.jpg",
                ]
            },
            { 
                title: "Ski Resort", 
                slug: "ski-resort",
                folder: "ski resort",
                coverImage: "/PORTFOLIO/Commercial/ski resort/ski-resort-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/ski resort/ski-resort-01.jpg",
                    "/PORTFOLIO/Commercial/ski resort/ski-resort-02.jpg",
                    "/PORTFOLIO/Commercial/ski resort/ski-resort-03.jpg",
                    "/PORTFOLIO/Commercial/ski resort/ski-resort-04.jpg",
                    "/PORTFOLIO/Commercial/ski resort/ski-resort-05.jpg",
                    "/PORTFOLIO/Commercial/ski resort/ski-resort-06.jpg",
                    "/PORTFOLIO/Commercial/ski resort/ski-resort-07.jpg",
                    "/PORTFOLIO/Commercial/ski resort/ski-resort-08.jpg",
                    "/PORTFOLIO/Commercial/ski resort/ski-resort-09.jpg",
                    "/PORTFOLIO/Commercial/ski resort/ski-resort-10.jpg",
                    "/PORTFOLIO/Commercial/ski resort/ski-resort-11.jpg",
                    "/PORTFOLIO/Commercial/ski resort/ski-resort-12.jpg",
                    "/PORTFOLIO/Commercial/ski resort/ski-resort-13.jpg",
                    "/PORTFOLIO/Commercial/ski resort/ski-resort-14.jpg",
                    "/PORTFOLIO/Commercial/ski resort/ski-resort-15.jpg",
                    "/PORTFOLIO/Commercial/ski resort/ski-resort-16.jpg",
                ]
            },
            { 
                title: "Stokes", 
                slug: "stokes",
                folder: "stokes",
                coverImage: "/PORTFOLIO/Commercial/stokes/stokes-01.webp",
                images: [
                    "/PORTFOLIO/Commercial/stokes/stokes-01.webp",
                    "/PORTFOLIO/Commercial/stokes/stokes-02.webp",
                    "/PORTFOLIO/Commercial/stokes/stokes-03.webp",
                    "/PORTFOLIO/Commercial/stokes/stokes-04.webp",
                    "/PORTFOLIO/Commercial/stokes/stokes-05.webp",
                    "/PORTFOLIO/Commercial/stokes/stokes-06.webp",
                    "/PORTFOLIO/Commercial/stokes/stokes-07.webp",
                    "/PORTFOLIO/Commercial/stokes/stokes-08.webp",
                    "/PORTFOLIO/Commercial/stokes/stokes-09.webp",
                    "/PORTFOLIO/Commercial/stokes/stokes-10.webp",
                    "/PORTFOLIO/Commercial/stokes/stokes-11.webp",
                    "/PORTFOLIO/Commercial/stokes/stokes-12.webp",
                    "/PORTFOLIO/Commercial/stokes/stokes-13.webp",
                    "/PORTFOLIO/Commercial/stokes/stokes-14.webp",
                    "/PORTFOLIO/Commercial/stokes/stokes-15.webp",
                ]
            },
            { 
                title: "TVCC", 
                slug: "tvcc",
                folder: "tvcc",
                coverImage: "/PORTFOLIO/Commercial/tvcc/tvcc-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/tvcc/tvcc-01.jpg",
                    "/PORTFOLIO/Commercial/tvcc/tvcc-02.jpg",
                    "/PORTFOLIO/Commercial/tvcc/tvcc-03.jpg",
                    "/PORTFOLIO/Commercial/tvcc/tvcc-04.jpg",
                ]
            },
            { 
                title: "YMCA", 
                slug: "ymca",
                folder: "ymca",
                coverImage: "/PORTFOLIO/Commercial/ymca/ymca-01.jpg",
                images: [
                    "/PORTFOLIO/Commercial/ymca/ymca-01.jpg",
                    "/PORTFOLIO/Commercial/ymca/ymca-02.jpg",
                    "/PORTFOLIO/Commercial/ymca/ymca-03.jpg",
                    "/PORTFOLIO/Commercial/ymca/ymca-04.jpg",
                    "/PORTFOLIO/Commercial/ymca/ymca-05.jpg",
                    "/PORTFOLIO/Commercial/ymca/ymca-06.jpg",
                    "/PORTFOLIO/Commercial/ymca/ymca-07.jpg",
                    "/PORTFOLIO/Commercial/ymca/ymca-08.jpg",
                    "/PORTFOLIO/Commercial/ymca/ymca-09.jpg",
                    "/PORTFOLIO/Commercial/ymca/ymca-10.jpg",
                    "/PORTFOLIO/Commercial/ymca/ymca-11.jpg",
                    "/PORTFOLIO/Commercial/ymca/ymca-12.jpg",
                    "/PORTFOLIO/Commercial/ymca/ymca-13.jpg",
                    "/PORTFOLIO/Commercial/ymca/ymca-14.jpg",
                ]
            },
        ],
    },
    {
        slug: "residential",
        title: "Residential",
        description: "Custom homes, apartments, and residential complexes designed for modern living.",
        coverImage: "/PORTFOLIO/Residential/apartment/apartment-01.jpg",
        folder: "Residential",
        projects: [
            { 
                title: "Apartment Complex", 
                slug: "apartment-complex",
                folder: "apartment",
                coverImage: "/PORTFOLIO/Residential/apartment/apartment-01.jpg",
                images: [
                    "/PORTFOLIO/Residential/apartment/apartment-01.jpg",
                    "/PORTFOLIO/Residential/apartment/apartment-02.jpg",
                    "/PORTFOLIO/Residential/apartment/apartment-03.jpg",
                    "/PORTFOLIO/Residential/apartment/apartment-04.jpg",
                    "/PORTFOLIO/Residential/apartment/apartment-05.jpg",
                ]
            },
            { 
                title: "IA Residence", 
                slug: "ia-residence",
                folder: "ia",
                coverImage: "/PORTFOLIO/Residential/ia/ia-01.jpg",
                images: [
                    "/PORTFOLIO/Residential/ia/ia-01.jpg",
                    "/PORTFOLIO/Residential/ia/ia-02.jpg",
                    "/PORTFOLIO/Residential/ia/ia-03.jpg",
                    "/PORTFOLIO/Residential/ia/ia-04.jpg",
                    "/PORTFOLIO/Residential/ia/ia-05.jpg",
                    "/PORTFOLIO/Residential/ia/ia-06.jpg",
                ]
            },
            { 
                title: "IA Residence 1", 
                slug: "ia-residence-1",
                folder: "ia1",
                coverImage: "/PORTFOLIO/Residential/ia1/ia1-01.jpg",
                images: [
                    "/PORTFOLIO/Residential/ia1/ia1-01.jpg",
                    "/PORTFOLIO/Residential/ia1/ia1-02.jpg",
                    "/PORTFOLIO/Residential/ia1/ia1-03.jpg",
                    "/PORTFOLIO/Residential/ia1/ia1-04.jpg",
                ]
            },
            { 
                title: "IL Home", 
                slug: "il-home",
                folder: "il",
                coverImage: "/PORTFOLIO/Residential/il/il-01.jpg",
                images: [
                    "/PORTFOLIO/Residential/il/il-01.jpg",
                    "/PORTFOLIO/Residential/il/il-02.jpg",
                    "/PORTFOLIO/Residential/il/il-03.jpg",
                    "/PORTFOLIO/Residential/il/il-04.jpg",
                ]
            },
            { 
                title: "IL Home 1", 
                slug: "il-home-1",
                folder: "il1",
                coverImage: "/PORTFOLIO/Residential/il1/il1-01.jpg",
                images: [
                    "/PORTFOLIO/Residential/il1/il1-01.jpg",
                    "/PORTFOLIO/Residential/il1/il1-02.jpg",
                    "/PORTFOLIO/Residential/il1/il1-03.jpg",
                ]
            },
            { 
                title: "IL Home 2", 
                slug: "il-home-2",
                folder: "il2",
                coverImage: "/PORTFOLIO/Residential/il2/il2-01.jpg",
                images: [
                    "/PORTFOLIO/Residential/il2/il2-01.jpg",
                    "/PORTFOLIO/Residential/il2/il2-02.jpg",
                    "/PORTFOLIO/Residential/il2/il2-03.jpg",
                    "/PORTFOLIO/Residential/il2/il2-04.jpg",
                    "/PORTFOLIO/Residential/il2/il2-05.jpg",
                ]
            },
            { 
                title: "KS Residence", 
                slug: "ks-residence",
                folder: "ks",
                coverImage: "/PORTFOLIO/Residential/ks/ks-01.jpg",
                images: [
                    "/PORTFOLIO/Residential/ks/ks-01.jpg",
                    "/PORTFOLIO/Residential/ks/ks-02.jpg",
                    "/PORTFOLIO/Residential/ks/ks-03.jpg",
                    "/PORTFOLIO/Residential/ks/ks-04.jpg",
                ]
            },
            { 
                title: "MD Estate", 
                slug: "md-estate",
                folder: "md",
                coverImage: "/PORTFOLIO/Residential/md/md-01.jpg",
                images: [
                    "/PORTFOLIO/Residential/md/md-01.jpg",
                    "/PORTFOLIO/Residential/md/md-02.jpg",
                    "/PORTFOLIO/Residential/md/md-03.jpg",
                    "/PORTFOLIO/Residential/md/md-04.jpg",
                    "/PORTFOLIO/Residential/md/md-05.jpg",
                    "/PORTFOLIO/Residential/md/md-06.jpg",
                    "/PORTFOLIO/Residential/md/md-07.jpg",
                ]
            },
            { 
                title: "MN Home", 
                slug: "mn-home",
                folder: "mn",
                coverImage: "/PORTFOLIO/Residential/mn/mn-01.jpg",
                images: [
                    "/PORTFOLIO/Residential/mn/mn-01.jpg",
                    "/PORTFOLIO/Residential/mn/mn-02.jpg",
                ]
            },
            { 
                title: "MO Residence", 
                slug: "mo-residence",
                folder: "mo",
                coverImage: "/PORTFOLIO/Residential/mo/mo-01.jpg",
                images: [
                    "/PORTFOLIO/Residential/mo/mo-01.jpg",
                    "/PORTFOLIO/Residential/mo/mo-02.jpg",
                    "/PORTFOLIO/Residential/mo/mo-03.jpg",
                    "/PORTFOLIO/Residential/mo/mo-04.jpg",
                    "/PORTFOLIO/Residential/mo/mo-05.jpg",
                    "/PORTFOLIO/Residential/mo/mo-06.jpg",
                    "/PORTFOLIO/Residential/mo/mo-07.jpg",
                    "/PORTFOLIO/Residential/mo/mo-08.jpg",
                    "/PORTFOLIO/Residential/mo/mo-09.jpg",
                    "/PORTFOLIO/Residential/mo/mo-10.jpg",
                    "/PORTFOLIO/Residential/mo/mo-11.jpg",
                    "/PORTFOLIO/Residential/mo/mo-12.jpg",
                    "/PORTFOLIO/Residential/mo/mo-13.jpg",
                    "/PORTFOLIO/Residential/mo/mo-14.jpg",
                ]
            },
            { 
                title: "NE Property", 
                slug: "ne-property",
                folder: "ne",
                coverImage: "/PORTFOLIO/Residential/ne/ne-01.jpg",
                images: [
                    "/PORTFOLIO/Residential/ne/ne-01.jpg",
                    "/PORTFOLIO/Residential/ne/ne-02.jpg",
                    "/PORTFOLIO/Residential/ne/ne-03.jpg",
                    "/PORTFOLIO/Residential/ne/ne-04.jpg",
                ]
            },
            { 
                title: "OH Residence", 
                slug: "oh-residence",
                folder: "oh",
                coverImage: "/PORTFOLIO/Residential/oh/oh-01.jpg",
                images: [
                    "/PORTFOLIO/Residential/oh/oh-01.jpg",
                    "/PORTFOLIO/Residential/oh/oh-02.jpg",
                    "/PORTFOLIO/Residential/oh/oh-03.jpg",
                    "/PORTFOLIO/Residential/oh/oh-04.jpg",
                    "/PORTFOLIO/Residential/oh/oh-05.jpg",
                    "/PORTFOLIO/Residential/oh/oh-06.jpg",
                ]
            },
            { 
                title: "WV Estate", 
                slug: "wv-estate",
                folder: "wv",
                coverImage: "/PORTFOLIO/Residential/wv/wv-01.jpg",
                images: [
                    "/PORTFOLIO/Residential/wv/wv-01.jpg",
                    "/PORTFOLIO/Residential/wv/wv-02.jpg",
                    "/PORTFOLIO/Residential/wv/wv-03.jpg",
                    "/PORTFOLIO/Residential/wv/wv-04.jpg",
                    "/PORTFOLIO/Residential/wv/wv-05.jpg",
                    "/PORTFOLIO/Residential/wv/wv-06.jpg",
                ]
            },
        ],
    },
    {
        slug: "education",
        title: "Education",
        description: "Schools, universities, libraries, and learning centers designed to inspire.",
        coverImage: "/PORTFOLIO/education/fox creek high school/fox-creek-high-school-01.jpg",
        folder: "education",
        projects: [
            { 
                title: "Library & Learning Center", 
                slug: "library-learning-center",
                folder: "Library & learning center",
                coverImage: "/PORTFOLIO/education/Library & learning center/library-learning-center-01.jpg",
                images: [
                    "/PORTFOLIO/education/Library & learning center/library-learning-center-01.jpg",
                    "/PORTFOLIO/education/Library & learning center/library-learning-center-02.jpg",
                    "/PORTFOLIO/education/Library & learning center/library-learning-center-03.jpg",
                    "/PORTFOLIO/education/Library & learning center/library-learning-center-04.jpg",
                    "/PORTFOLIO/education/Library & learning center/library-learning-center-05.jpg",
                    "/PORTFOLIO/education/Library & learning center/library-learning-center-06.jpg",
                    "/PORTFOLIO/education/Library & learning center/library-learning-center-07.jpg",
                    "/PORTFOLIO/education/Library & learning center/library-learning-center-08.jpg",
                ]
            },
            { 
                title: "Community Center", 
                slug: "community-center",
                folder: "community",
                coverImage: "/PORTFOLIO/education/community/comunity-center-01.webp",
                images: [
                    "/PORTFOLIO/education/community/comunity-center-01.webp",
                    "/PORTFOLIO/education/community/comunity-center-02.webp",
                    "/PORTFOLIO/education/community/comunity-center-03.webp",
                    "/PORTFOLIO/education/community/comunity-center-04.webp",
                    "/PORTFOLIO/education/community/comunity-center-05.webp",
                    "/PORTFOLIO/education/community/comunity-center-06.webp",
                    "/PORTFOLIO/education/community/comunity-center-07.webp",
                    "/PORTFOLIO/education/community/comunity-center-08.webp",
                    "/PORTFOLIO/education/community/comunity-center-09.webp",
                ]
            },
            { 
                title: "Fox Creek High School", 
                slug: "fox-creek-high-school",
                folder: "fox creek high school",
                coverImage: "/PORTFOLIO/education/fox creek high school/fox-creek-high-school-01.jpg",
                images: [
                    "/PORTFOLIO/education/fox creek high school/fox-creek-high-school-01.jpg",
                    "/PORTFOLIO/education/fox creek high school/fox-creek-high-school-02.jpg",
                    "/PORTFOLIO/education/fox creek high school/fox-creek-high-school-03.jpg",
                    "/PORTFOLIO/education/fox creek high school/fox-creek-high-school-04.jpg",
                    "/PORTFOLIO/education/fox creek high school/fox-creek-high-school-05.jpg",
                    "/PORTFOLIO/education/fox creek high school/fox-creek-high-school-06.jpg",
                    "/PORTFOLIO/education/fox creek high school/fox-creek-high-school-07.jpg",
                    "/PORTFOLIO/education/fox creek high school/fox-creek-high-school-08.jpg",
                    "/PORTFOLIO/education/fox creek high school/fox-creek-high-school-09.jpg",
                    "/PORTFOLIO/education/fox creek high school/fox-creek-high-school-10.jpg",
                ]
            },
            { 
                title: "K-12 School", 
                slug: "k-12-school",
                folder: "k-12",
                coverImage: "/PORTFOLIO/education/k-12/k-12-01.jpg",
                images: [
                    "/PORTFOLIO/education/k-12/k-12-01.jpg",
                    "/PORTFOLIO/education/k-12/k-12-02.jpg",
                    "/PORTFOLIO/education/k-12/k-12-03.jpg",
                    "/PORTFOLIO/education/k-12/k-12-04.jpg",
                    "/PORTFOLIO/education/k-12/k-12-05.jpg",
                    "/PORTFOLIO/education/k-12/k-12-06.jpg",
                    "/PORTFOLIO/education/k-12/k-12-07.jpg",
                    "/PORTFOLIO/education/k-12/k-12-08.jpg",
                    "/PORTFOLIO/education/k-12/k-12-09.jpg",
                    "/PORTFOLIO/education/k-12/k-12-10.jpg",
                    "/PORTFOLIO/education/k-12/k-12-11.jpg",
                    "/PORTFOLIO/education/k-12/k-12-12.jpg",
                    "/PORTFOLIO/education/k-12/k-12-13.jpg",
                    "/PORTFOLIO/education/k-12/k-12-14.jpg",
                    "/PORTFOLIO/education/k-12/k-12-15.jpg",
                    "/PORTFOLIO/education/k-12/k-12-16.jpg",
                    "/PORTFOLIO/education/k-12/k-12-17.jpg",
                    "/PORTFOLIO/education/k-12/k-12-18.jpg",
                ]
            },
            { 
                title: "U-32 Campus", 
                slug: "u-32-campus",
                folder: "u-32",
                coverImage: "/PORTFOLIO/education/u-32/u-32-01.jpg",
                images: [
                    "/PORTFOLIO/education/u-32/u-32-01.jpg",
                    "/PORTFOLIO/education/u-32/u-32-01.png",
                    "/PORTFOLIO/education/u-32/u-32-02.jpg",
                    "/PORTFOLIO/education/u-32/u-32-03.jpg",
                ]
            },
            { 
                title: "Village School", 
                slug: "village-school",
                folder: "village school",
                coverImage: "/PORTFOLIO/education/village school/village-school-01.jpg",
                images: [
                    "/PORTFOLIO/education/village school/village-school-01.jpg",
                    "/PORTFOLIO/education/village school/village-school-02.jpg",
                    "/PORTFOLIO/education/village school/village-school-03.jpg",
                    "/PORTFOLIO/education/village school/village-school-04.jpg",
                    "/PORTFOLIO/education/village school/village-school-05.jpg",
                    "/PORTFOLIO/education/village school/village-school-06.jpg",
                ]
            },
        ],
    },
    {
        slug: "healthcare",
        title: "Healthcare",
        description: "Hospitals, clinics, dental offices, and medical facilities built for patient care.",
        coverImage: "/PORTFOLIO/healthcare/health center/health-center-01.jpg",
        folder: "healthcare",
        projects: [
            { 
                title: "Dental Clinic", 
                slug: "dental-clinic",
                folder: "Dental",
                coverImage: "/PORTFOLIO/healthcare/Dental/dental-01.jpg",
                images: [
                    "/PORTFOLIO/healthcare/Dental/dental-01.jpg",
                    "/PORTFOLIO/healthcare/Dental/CHC-Dental-S.-Hero-9.4.24-12.jpg",
                    "/PORTFOLIO/healthcare/Dental/CHC-Dental-S.-Hero-9.4.24-6.jpg",
                    "/PORTFOLIO/healthcare/Dental/CHC-Dental-S.-Hero-sterile.jpg",
                    "/PORTFOLIO/healthcare/Dental/CHC-Dental-S.-Hero-x-ray.jpg",
                ]
            },
            { 
                title: "MRI Image Center", 
                slug: "mri-image-center",
                folder: "MRI Image Center",
                coverImage: "/PORTFOLIO/healthcare/MRI Image Center/MRI-Room.png",
                images: [
                    "/PORTFOLIO/healthcare/MRI Image Center/mri-image-center-01.png",
                    "/PORTFOLIO/healthcare/MRI Image Center/mri-image-center-02.png",
                    "/PORTFOLIO/healthcare/MRI Image Center/mri-image-center-03.png",
                    "/PORTFOLIO/healthcare/MRI Image Center/mri-image-center-04.png",
                    "/PORTFOLIO/healthcare/MRI Image Center/mri-image-center-05.png",
                    "/PORTFOLIO/healthcare/MRI Image Center/Corridor.png",
                    "/PORTFOLIO/healthcare/MRI Image Center/Front Lobby.png",
                    "/PORTFOLIO/healthcare/MRI Image Center/MRI Room (2).png",
                    "/PORTFOLIO/healthcare/MRI Image Center/MRI Room from Operator;s Room.png",
                    "/PORTFOLIO/healthcare/MRI Image Center/MRI-Room.png",
                ]
            },
            { 
                title: "Nursing Home", 
                slug: "nursing-home",
                folder: "Nursing home",
                coverImage: "/PORTFOLIO/healthcare/Nursing home/nursing-home-01.jpg",
                images: [
                    "/PORTFOLIO/healthcare/Nursing home/nursing-home-01.jpg",
                    "/PORTFOLIO/healthcare/Nursing home/nursing-home-02.jpg",
                    "/PORTFOLIO/healthcare/Nursing home/nursing-home-03.jpg",
                    "/PORTFOLIO/healthcare/Nursing home/nursing-home-04.jpg",
                    "/PORTFOLIO/healthcare/Nursing home/nursing-home-05.jpg",
                    "/PORTFOLIO/healthcare/Nursing home/nursing-home-06.jpg",
                    "/PORTFOLIO/healthcare/Nursing home/nursing-home-07.jpg",
                ]
            },
            { 
                title: "Health Center", 
                slug: "health-center",
                folder: "health center",
                coverImage: "/PORTFOLIO/healthcare/health center/health-center-01.jpg",
                images: [
                    "/PORTFOLIO/healthcare/health center/health-center-01.jpg",
                    "/PORTFOLIO/healthcare/health center/CHCB-Riverside-Clinic-11-1200x800.jpg",
                    "/PORTFOLIO/healthcare/health center/CHCB-Riverside-Clinic-2-1200x800.jpg",
                    "/PORTFOLIO/healthcare/health center/CHCB-Riverside-Clinic-3-792x1200.jpg",
                    "/PORTFOLIO/healthcare/health center/CHCB-Riverside-Clinic-4-1200x778.jpg",
                    "/PORTFOLIO/healthcare/health center/CHCB-Riverside-Clinic-5-1200x878.jpg",
                    "/PORTFOLIO/healthcare/health center/CHCB-Riverside-Clinic-7-1200x652.jpg",
                    "/PORTFOLIO/healthcare/health center/CHCB-Riverside-Clinic-8-1012x1200.jpg",
                    "/PORTFOLIO/healthcare/health center/CHCB-Riverside-Clinic-9a-1200x932.jpg",
                ]
            },
        ],
    },
];

// Helper function to find a category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
    return portfolioCategories.find(cat => cat.slug === slug);
}

// Helper function to find a project by slug within a category
export function getProjectBySlug(categorySlug: string, projectSlug: string): Project | undefined {
    const category = getCategoryBySlug(categorySlug);
    if (!category) return undefined;
    return category.projects.find(proj => proj.slug === projectSlug);
}

// Helper function to get all category slugs (for static generation)
export function getAllCategorySlugs(): string[] {
    return portfolioCategories.map(cat => cat.slug);
}

// Helper function to get all project slugs for a category
export function getAllProjectSlugs(categorySlug: string): string[] {
    const category = getCategoryBySlug(categorySlug);
    if (!category) return [];
    return category.projects.map(proj => proj.slug);
}
