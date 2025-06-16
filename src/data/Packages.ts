interface packageProps {
    title: string,
    price: string,
    description: string,
    features: Array<string>

}

const packageItems  : packageProps[] = [
    {
        title: "Web & Mobile Development",
        price: "$8,000 - $50,000+",
        description: "Custom web and mobile development solutions tailored to your needs.",
        features: [
            "Custom Website Development",
            "Full-stack Web Development",
            "Mobile App Development",
            "Progressive Web Apps (PWAs)",
        ],
    },
    {
        title: "UI/UX Design & Prototyping",
        price: "$2,000 - $15,000+",
        description: "Professional UI/UX design and prototyping services.",
        features: [
            "Wireframing and Prototyping",
            "UI/UX Design for Web and Mobile",
            "User Research and Usability Testing",
        ],
    },
    {
        title: "Cloud & DevOps Solutions",
        price: "$3,000 - $20,000+",
        description: "Cloud deployment and DevOps solutions for scalable infrastructure.",
        features: [
            "Cloud Deployment (AWS, GCP, Azure)",
            "CI/CD Pipeline Setup",
            "Docker & Kubernetes Containerization",
        ],
    },
    {
        title: "Software Architecture & Code Optimization",
        price: "$4,000 - $40,000+",
        description: "Optimize your software architecture and codebase for performance.",
        features: [
            "Code Reviews and Refactoring",
            "API Development and Integration",
            "Microservices Architecture",
        ],
    },
    {
        title: "E-commerce Development",
        price: "$5,000 - $50,000+",
        description: "End-to-end e-commerce development and optimization.",
        features: [
            "Shopify, WooCommerce, Magento Development",
            "Custom E-commerce Platforms",
            "Payment Gateway Integration",
        ],
    },
    {
        title: "SEO & Performance Optimization",
        price: "$2,500 - $10,000",
        description: "Enhance your website’s performance and search engine rankings.",
        features: [
            "Technical SEO for Web Apps",
            "Website Speed and Performance Tuning",
            "Core Web Vitals Optimization",
        ],
    },
    {
        title: "AI & Automation Solutions",
        price: "$5,000 - $50,000+",
        description: "Integrate AI and automation to streamline operations.",
        features: [
            "AI-powered Chatbots",
            "Process Automation with AI/ML",
            "Data Scraping & Analysis",
        ],
    },
    {
        title: "IT Consultation & Training",
        price: "$100 - $10,000",
        description: "Expert consultation and training services for businesses and developers.",
        features: [
            "Tech Stack Selection for Startups",
            "Development Workflow Optimization",
            "Developer Training and Mentorship",
        ],
    },
];

export default packageItems;
