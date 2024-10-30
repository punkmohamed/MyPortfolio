export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
];
export const skills = [
    { name: "HTML", icon: "html-5-svgrepo-com.svg" },
    { name: "CSS", icon: "css-3-svgrepo-com.svg" },
    { name: "JavaScript", icon: "js-svgrepo-com.svg" },
    { name: "JQuery", icon: "jquery-svgrepo-com.svg" },
    { name: "Bootstrap", icon: "bootstrap-svgrepo-com.svg" },
    { name: "Sass", icon: "/sass.png" },
    { name: "Tailwind CSS", icon: "tail.svg" },
    { name: "TypeScript", icon: "ts.svg" },
    { name: "React.js", icon: "/react.png" },
    { name: "Material UI", icon: "/mu5.png" },
    { name: "Redux", icon: "redux-svgrepo-com.svg" },
    { name: "Next.js", icon: "next.svg" },
    { name: "Framer Motion", icon: "fm.svg" },
    { name: "Three.js", icon: "three.svg" },
    { name: "Socket.IO", icon: "socket-io-svgrepo-com.svg" },
    { name: "GSAP", icon: "gsap.svg" },
    { name: "Git & GitHub", icon: "/git.png" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a site with ThreeJS library",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];
export const projects = [
    {
        id: 1,
        title: "Africano Restaurant",
        des: "My ITI graduation project: A modern restaurant website with a user-friendly interface that displays the menu, restaurant info, and online reservation features.",
        img: "/Screenshot (484).png",
        iconLists: [
            "/re.svg",
            "/tail.svg",
            "/socket-io-svgrepo-com.svg",
            "/nodejs-icon-svgrepo-com.svg",
            "/nest-middleware-js-svgrepo-com.svg",
            "/docker-svgrepo-com.svg"
        ],
        link: "https://africano-resturant-user.vercel.app/",
        type: ["NodeJs", "React"]
    },
    {
        id: 2,
        title: "Animated Apple iPhone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
        img: "/Screenshot (494).png",
        iconLists: [
            "/re.svg",
            "/js-svgrepo-com.svg",
            "/tail.svg",
            "/three.svg",
            "/gsap.svg"
        ],
        link: "https://titanium-iphone-site.vercel.app/",
        type: ["React"]
    },
    {
        id: 3,
        title: "SkillQuest",
        des: "An E-Learning platform built with React, providing an intuitive interface for online courses and education materials.",
        img: "/Screenshot (487).png",
        iconLists: [
            "/re.svg",
            "/js-svgrepo-com.svg",
            "/tail.svg",
            "/redux-svgrepo-com.svg",
            "/fm.svg"
        ],
        link: "https://e-learning-react-eosin.vercel.app/",
        type: ["React"]
    },
    {
        id: 4,
        title: "Brainwave App",
        des: "A creative and interactive web app utilizing GSAP animations to enhance user experience with smooth transitions and visual effects.",
        img: "/Screenshot (481).png",
        iconLists: [
            "/gsap.svg",
            "/js-svgrepo-com.svg",
            "/html-5-svgrepo-com.svg",
            "/tail.svg",
            "/re.svg"
        ],
        link: "https://brainwave-app-gsap.vercel.app/",
        type: ["React"]
    },
    {
        id: 5,
        title: "Twitter Clone",
        des: "A responsive and interactive Twitter clone showcasing advanced Bootstrap layouts and jQuery-powered functionalities.",
        img: "/Screenshot (483).png",
        iconLists: [
            "/bootstrap-svgrepo-com.svg",
            "/jquery-svgrepo-com.svg",
            "/html-5-svgrepo-com.svg",
            "/js-svgrepo-com.svg",
            "/api-svgrepo-com.svg"
        ],
        link: "https://iti-project-x-by-bootstrap-j-query.vercel.app/",
        type: ["HTML & CSS", "NativeJS"]
    },
    {
        id: 6,
        title: "Todo App",
        des: "A minimalistic Todo application featuring a clean UI, built with Tailwind CSS and JavaScript for task management and tracking.",
        img: "/Screenshot (485).png",
        iconLists: [
            "/html-5-svgrepo-com.svg",
            "/js-svgrepo-com.svg",
            "/tail.svg",
            "/css-3-svgrepo-com.svg"
        ],
        link: "https://todo-app-tailwind-js.vercel.app/",
        type: ["HTML & CSS", "NativeJS"]
    },
    {
        id: 7,
        title: "Weather App",
        des: "A weather application built with React, providing real-time weather information based on location with a clean and simple UI.",
        img: "/Screenshot (490).png",
        iconLists: [
            "/re.svg",
            "/html-5-svgrepo-com.svg",
            "/api-svgrepo-com.svg",
            "/js-svgrepo-com.svg",
            "/bootstrap-svgrepo-com.svg"
        ],
        link: "https://weatherapp-reactjs-rouge.vercel.app/",
        type: ["React"]
    },
    {
        id: 8,
        title: "Metaverse App",
        des: "An immersive experience into the world of the Metaverse, built with Next.js for server-side rendering and enhanced performance.",
        img: "/Screenshot (482).png",
        iconLists: [
            "/next.svg",
            "/html-5-svgrepo-com.svg",
            "/js-svgrepo-com.svg",
            "/fm.svg",
            "/tail.svg"
        ],
        link: "https://metaverse-next-js-app.vercel.app/",
        type: ["React", "Nextjs"]
    },

    {
        id: 9,
        title: "Interior Design Landing Page",
        des: "A sleek and visually appealing landing page for an interior design company, showcasing services and designs with beautiful layouts.",
        img: "/Screenshot (486).png",
        iconLists: [
            "/html-5-svgrepo-com.svg",
            "/css-3-svgrepo-com.svg",
            "/js-svgrepo-com.svg",
            "/tail.svg"
        ],
        link: "https://landing-page-interior-design-ashen.vercel.app/",
        type: ["HTML & CSS"]
    },
    {
        id: 10,
        title: "Personal Portfolio",
        des: "A personal portfolio website showcasing my projects, skills, and experience, designed with a modern, professional layout.",
        img: "/Screenshot (491).png",
        iconLists: [
            "/html-5-svgrepo-com.svg",
            "/js-svgrepo-com.svg",
            "/next.svg",
            "/tail.svg",
            "/fm.svg"
        ],
        link: "https://mohamed-nextjs-portfolio.vercel.app/",
        type: ["Nextjs"]
    },
    {
        id: 11,
        title: "Simple React Apps",
        des: "A collection of simple and functional React-based applications demonstrating the core features and reactivity of React.js.",
        img: "/Screenshot (488).png",
        iconLists: [
            "/gsap.svg",
            "/re.svg",
            "/js-svgrepo-com.svg",
            "/bootstrap-svgrepo-com.svg",
            "/api-svgrepo-com.svg"
        ],
        link: "https://simple-react-apps.vercel.app/",
        type: ["React"]
    },

    {
        id: 12,
        title: "E-Commerce Project",
        des: "An online e-commerce application built with Angular, featuring product management and user-friendly interface.",
        img: "/Screenshot (493).png",
        iconLists: [
            "/html-5-svgrepo-com.svg",
            "/ts.svg",
            "/angular-svgrepo-com.svg",
            "/bootstrap-svgrepo-com.svg",
            "/prime-svgrepo-com.svg"
        ],
        link: "https://angular-project-ecommerce-fawn.vercel.app/",
        type: ["Angular"]
    },
    {
        id: 13,
        title: "Swift Cart",
        des: "A shopping cart application built with HTML, CSS, and JavaScript, using Firebase for backend services.",
        img: "/Screenshot (492).png",
        iconLists: [
            "/html-5-svgrepo-com.svg",
            "/css-3-svgrepo-com.svg",
            "/js-svgrepo-com.svg",
            "/firebase-svgrepo-com.svg"
        ],
        link: "https://swiift-cart.netlify.app/",
        type: ["HTML & CSS", "NativeJS"]
    },
    {
        id: 14,
        title: "Currency Converter",
        des: "A React-based currency converter application that allows users to convert between various currencies in real time.",
        img: "/Screenshot (489).png",
        iconLists: [
            "/bootstrap-svgrepo-com.svg",
            "/html-5-svgrepo-com.svg",
            "/js-svgrepo-com.svg",
            "/api-svgrepo-com.svg",
            "/re.svg"
        ],
        link: "https://react-js-currency-converter.vercel.app/",
        type: ["React"]
    }, {
        id: 15,
        title: "Disney Plus Clone",
        des: "A Disney Plus clone utilizing Firebase for authentication and data retrieval for shows and movies. Built with React, Redux Toolkit for state management, and styled with Tailwind CSS for a modern, responsive design.",
        img: "/Screenshot (498).png",
        iconLists: [
            "/re.svg",
            "/tail.svg",
            "/redux-svgrepo-com.svg",
            "/firebase-svgrepo-com.svg"
        ],
        link: "https://disney-plus-clone-gsap.vercel.app/",
        type: ["React"]
    },
    {
        id: 16,
        title: "YouTube Clone",
        des: "An interactive YouTube clone leveraging the YouTube API for real-time video playback. Built with React, Tailwind CSS for responsive design, and TypeScript for type-safe code. Features Context API for organized state management and embedded video playback using <iframe>.",
        img: "/Screenshot (502).png",
        iconLists: [
            "/re.svg",
            "/tail.svg",
            "/ts.svg",
            "/api-svgrepo-com.svg"
        ],
        link: "https://youtube-clone-phi-green.vercel.app/",
        type: ["React"]
    },
    {
        id: 17,
        title: "Anime Sketch Book",
        des: "An interactive sketchbook for anime lovers, created with HTML, Tailwind CSS, jQuery, and Turn.js to simulate a realistic page-turning effect. This project combines simplicity and creativity to present anime artwork in a unique and engaging format.",
        img: "/Screenshot (501).png",
        iconLists: [
            "/html-5-svgrepo-com.svg",
            "/tail.svg",
            "/jquery-svgrepo-com.svg",
            "/js-svgrepo-com.svg"
        ],
        link: "https://anime-sketch-book.vercel.app/",
        type: ["HTML & CSS", "NativeJS"]
    },
    {
        id: 18,
        title: "Anime Vault",
        des: "An Anime Vault built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion to deliver a seamless, animated browsing experience for anime fans. The project includes smooth transitions and interactive UI elements powered by Framer Motion, with responsive design ensuring adaptability across devices.",
        img: "/Screenshot (500).png",
        iconLists: [
            "/next.svg",
            "/ts.svg",
            "/tail.svg",
            "/fm.svg"
        ],
        link: "https://anime-vault-nextjs-ten.vercel.app/",
        type: ["Nextjs"]
    }
];

// export const projects = [
//     {
//         id: 1,
//         title: "3D Solar System Planets to Explore",
//         des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
//         img: "/p1.svg",
//         iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
//         link: "https://github.com/adrianhajdin?tab=repositories",
//         type: ['HTML & CSS', 'NativeJs']
//     },
//     {
//         id: 2,
//         title: "Yoom - Video Conferencing App",
//         des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
//         img: "/p2.svg",
//         iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
//         link: "https://github.com/adrianhajdin/zoom-clone",
//         type: ['HTML & CSS',]
//     },
//     {
//         id: 3,
//         title: "AI Image SaaS - Canva Application",
//         des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
//         img: "/p3.svg",
//         iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
//         link: "https://github.com/adrianhajdin/ai_saas_app",
//         type: ['HTML & CSS', 'NativeJs', 'NodeJs']
//     },
//     {
//         id: 4,
//         title: "Animated Apple Iphone 3D Website",
//         des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
//         img: "/p4.svg",
//         iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
//         link: "https://titanium-iphone-site.vercel.app/",
//         type: ['React', 'HTML & CSS']
//     },
// ];

export const testimonials = [
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        link: "https://github.com/punkmohamed",
        img: "/git.svg",
    },
    {
        id: 2,
        link: "https://www.linkedin.com/in/xmohamed321hassan/",
        img: "/link.svg",
    },
];