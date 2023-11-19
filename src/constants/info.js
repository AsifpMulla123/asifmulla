import {
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    AsifEstate,
    NikePage,
    uberProject,
    expressjs,
    cpp,
    Asif,
} from "../constants/index";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];
export const Bio = {
    name: "Asif Mulla",
    roles: [
        "Full Stack Developer.",
        "Programmer.",
        "Front End Developer.",
    ],
    description: "I am curious and adventurous person who lover to explore new things. I always look for ways to improve myself. I am hard worker who is dedicated to my work and strives to achieve my goals. I am always open to learning new things and exploring new expreriences. overall I am person who is constantly seeking to grow and learn in every aspect of my life.",
    github: "https://github.com/asifmulla123",
    resume: Asif,
    linkedin: "https://linkedin.com/in/asif-P-Mulla",
    discord: "https://discord.com/channels/1175473617077809152/1175473617564340255"
};
export const services = [
    {
        title: "Full Stack Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Programmer",
        icon: creator,
    },
];
export const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "ExpressJs",
        icon: expressjs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "c++",
        icon: cpp,
    },
];

export const projects = [
    {
        name: "AsifEstate",
        description:
            "Web-based platform that allows users to search, book, and manage Home rentals  and selling from various providers, providing a convenient and efficient solution for Real Estate needs.",
        tags: [
            {
                name: "react",
                color: "text-teal-300",
            },
            {
                name: "mongodb",
                color: "text-green-400",
            },
            {
                name: "tailwind",
                color: "text-teal-500",
            },
            {
                name: "ExpressJs",
                color: "text-white",
            },
            {
                name: "NodeJs",
                color: "text-green-400",
            },
        ],
        image: AsifEstate,
        source_code_link: "https://github.com/AsifpMulla123/AsifEstate",
    },
    {
        name: "Nike Landing Page",
        description:
            "This is an Landing Page of Nike webiste which is created usign tailiwind css and react. which is responsive and functional.",
        tags: [
            {
                name: "react",
                color: "text-teal-300",
            },
            {
                name: "tailwind",
                color: "text-teal-500",
            },
        ],
        image: NikePage,
        source_code_link: "https://github.com/AsifpMulla123/Nike-Tailwind",
    },
    {
        name: "Uber Clone",
        description:
            "A website which is Fully Functional and responsive with the help HTML,CSS,ReactJs. This website uses React-Router-Dom for Navigation.",
        tags: [
            {
                name: "Reactjs",
                color: "text-teal-300",
            },
            {
                name: "CSS",
                color: "text-blue-300",
            },
            {
                name: "JavaScript",
                color: "text-yellow-300",
            },
        ],
        image: uberProject,
        source_code_link: "https://github.com/AsifpMulla123/completewebsit",
    },
];
// export { navLinks, services, technologies, projects };
// export { services, technologies, projects };