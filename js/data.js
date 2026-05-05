/**
 * MASTER SITE DATA
 * This file contains EVERYTHING on your site.
 * Edit this file to save changes made via the Admin Tool.
 */

const siteData = {
    global: {
        logo: "Mohammed Mohsen",
        footer: "&copy; Mohammed Mohsen Designs. All rights reserved.",
        socials: {
            whatsapp: "https://wa.me/201007420298",
            instagram: "https://www.instagram.com/mohamed_mohsen75/",
            linkedin: "https://www.linkedin.com/in/mohamed-mohsen-a0762430a",
            email: "Mm954079@gmail.com",
            location: "Egypt, Cairo, Nasr City"
        }
    },
    home: {
        hero: {
            title: "Design That <br><span class=\"gradient-text\">Speaks</span>",
            subtitle: "Hi, I'm Mohammed Mohsen. I specialize in social media designs, logo designs, company profiles, brochures and all graphic design.",
            image: "assets/IMG_3765.jpg"
        },
        about: {
            title: "About <span class=\"gradient-text\">Me</span>",
            text: "I am a passionate Graphic Designer with a keen eye for detail and a love for creative storytelling. I specialize in social media designs, logo identities, company profiles, brochures, and comprehensive brand solutions. My goal is to transform ideas into impactful visual experiences that resonate with audiences."
        }
    },
    resume: {
        header: {
            title: "Resu<span class=\"gradient-text\">me</span>",
            subtitle: "A summary of my professional journey and technical expertise."
        },
        experience: [
            {
                date: "Apr 2022 - Present",
                title: "Freelance Graphic Designer",
                description: "Working with multiple organizations (Woodik Furniture, S Cola, Ensan Charity, Funfinity Nursery, etc.) on marketing assets, branding, and social media designs."
            },
            {
                date: "Oct 2025 - Feb 2026",
                title: "Junior Graphic Designer",
                description: "Iwan Design House Company - Designed social media posts, branding materials, and marketing visuals."
            },
            {
                date: "Dec 2024 - Apr 2025",
                title: "Marketing Supervisor",
                description: "Experience Company - Managed offline marketing campaigns for products like Pepsi and Chipsy."
            }
        ],
        skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe Firefly", "Microsoft Office"],
        softSkills: ["Leadership", "Strategic Thinking", "Communication", "Arabic (Native)", "English (B1)"]
    },
    projects: [
        {
            id: 'p1',
            title: 'Arafat Sweets',
            category: 'Social Media',
            mainImg: 'assets/Arafat Sweets/IMG_5565.PNG',
            type: 'gallery',
            images: [
                'assets/Arafat Sweets/IMG_5565.PNG', 'assets/Arafat Sweets/IMG_6340.PNG', 
                'assets/Arafat Sweets/IMG_6410.PNG', 'assets/Arafat Sweets/IMG_6420.PNG', 
                'assets/Arafat Sweets/IMG_6432.PNG', 'assets/Arafat Sweets/IMG_6444.PNG', 
                'assets/Arafat Sweets/IMG_6492.PNG', 'assets/Arafat Sweets/IMG_6515.PNG', 
                'assets/Arafat Sweets/IMG_6618.PNG', 'assets/Arafat Sweets/IMG_7483.PNG'
            ]
        },
        {
            id: 'p2',
            title: 'Arafat menu',
            category: 'Menu Design',
            mainImg: 'assets/Arafat menu/IMG_8281.JPG.jpeg',
            type: 'gallery',
            images: [
                'assets/Arafat menu/IMG_8281.JPG.jpeg', 'assets/Arafat menu/IMG_8282.JPG.jpeg'
            ]
        },
        {
            id: 'p3',
            title: 'Woodik',
            category: 'Social Media',
            mainImg: 'assets/Woodik/IMG_5413.PNG',
            type: 'gallery',
            images: [
                'assets/Woodik/IMG_5413.PNG', 'assets/Woodik/IMG_5418.PNG', 
                'assets/Woodik/IMG_5735.PNG', 'assets/Woodik/IMG_7531.PNG', 'assets/Woodik/IMG_7766.PNG'
            ]
        },
        {
            id: 'p4',
            title: 'Insan',
            category: 'Social Media',
            mainImg: 'assets/Insan/IMG_5415.PNG',
            type: 'gallery',
            images: [
                'assets/Insan/IMG_5415.PNG', 'assets/Insan/IMG_5417.PNG', 
                'assets/Insan/IMG_8279.PNG', 'assets/Insan/IMG_8280.PNG'
            ]
        },
        {
            id: 'p5',
            title: 'Fares Al Sharqia',
            category: 'Brochure',
            mainImg: 'assets/Fares Al sharqia/IMG_5397.PNG',
            type: 'gallery',
            images: [
                'assets/Fares Al sharqia/IMG_5394.PNG', 'assets/Fares Al sharqia/IMG_5395.PNG', 
                'assets/Fares Al sharqia/IMG_5397.PNG', 'assets/Fares Al sharqia/IMG_5398.PNG',
                'assets/logos/IMG_8273.PNG'
            ]
        },
        {
            id: 'p6',
            title: 'Sola Store',
            category: 'ID Card Design',
            mainImg: 'assets/Sola Store/IMG_5410.PNG',
            type: 'gallery',
            images: [
                'assets/Sola Store/IMG_5409.PNG', 'assets/Sola Store/IMG_5410.PNG', 
                'assets/Sola Store/IMG_5411.PNG', 'assets/Sola Store/IMG_5412.PNG'
            ]
        },
        {
            id: 'p7',
            title: 'Nebras',
            category: 'Logo',
            mainImg: 'assets/logos/IMG_8272.PNG',
            type: 'gallery',
            images: ['assets/logos/IMG_8272.PNG']
        },
        {
            id: 'p8',
            title: 'Fares Al Sharqia',
            category: 'Logo',
            mainImg: 'assets/logos/IMG_8273.PNG',
            type: 'gallery',
            images: ['assets/logos/IMG_8273.PNG']
        },
        {
            id: 'p9',
            title: 'Ghina Towers',
            category: 'Logo',
            mainImg: 'assets/logos/IMG_8274.PNG',
            type: 'gallery',
            images: ['assets/logos/IMG_8274.PNG']
        },
        {
            id: 'p10',
            title: 'Havora',
            category: 'Logo',
            mainImg: 'assets/logos/IMG_8278.PNG',
            type: 'gallery',
            images: ['assets/logos/IMG_8278.PNG']
        },
        {
            id: 'p11',
            title: 'Ghina Towers',
            category: 'Profile Company',
            mainImg: 'assets/profile company/ghina.PNG',
            type: 'pdf',
            pdfUrl: 'assets/profile company/BROCHURE GHINA.pdf'
        },
        {
            id: 'p12',
            title: 'Fares Al Sharqia',
            category: 'Profile Company',
            mainImg: 'assets/profile company/fares.PNG',
            type: 'pdf',
            pdfUrl: 'assets/profile company/brochure fares_compressed_organized.pdf'
        }
    ]
};
