export const courses = [
  {
    id: 1,
    title: "React Basics",
    description: "Introduction to React",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg",
  },
  {
    id: 2,
    title: "Redux Fundamentals",
    description: "State management with Redux",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
  },
  {
    id: 3,
    title: "JavaScript ES6+",
    description: "Modern features of JavaScript",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 4,
    title: "Node.js Basics",
    description: "Server-side JavaScript with Node.js",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    id: 5,
    title: "Express.js Fundamentals",
    description: "Building web applications with Express.js",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    id: 6,
    title: "MongoDB Essentials",
    description: "NoSQL database with MongoDB",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
  },
  {
    id: 7,
    title: "Vue.js Introduction",
    description: "Front-end framework for building user interfaces",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  },
  {
    id: 8,
    title: "Angular Basics",
    description: "Building dynamic web applications with Angular",
    url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
  },
  {
    id: 9,
    title: "HTML5 and CSS3 Mastery",
    description: "Essential web development skills",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    id: 10,
    title: "Docker for Beginners",
    description: "Containerization for scalable applications",
    url: "https://upload.wikimedia.org/wikipedia/en/f/f4/Docker_logo.svg",
  },
  {
    id: 11,
    title: "GraphQL Introduction",
    description: "Query language for APIs",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
  },
  {
    id: 12,
    title: "SASS and SCSS Styling",
    description: "Advanced CSS pre-processors",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
  },
  {
    id: 13,
    title: "TypeScript Basics",
    description: "Typed superset of JavaScript",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    id: 14,
    title: "Jest Testing Framework",
    description: "JavaScript testing framework",
    url: "https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png",
  },
  {
    id: 15,
    title: "Git and GitHub Essentials",
    description: "Version control for collaborative development",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
  },
  {
    id: 16,
    title: "Python Fundamentals",
    description: "Introduction to Python programming language",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg",
  },
  {
    id: 17,
    title: "Java for Beginners",
    description: "Getting started with Java",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png",
  },
  {
    id: 18,
    title: "C# Programming",
    description: "Basics of C# programming language",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg",
  },
  {
    id: 19,
    title: "Ruby on Rails",
    description: "Web development with Ruby on Rails",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
  },
  {
    id: 20,
    title: "Swift Programming",
    description: "Developing iOS applications with Swift",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
  },
];

export const playlists = [
  {
    id: 1,
    title: "Web Development Essentials",
    description: "A curated collection of essential web development courses",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg",
    courses: [
      {
        id: 1,
        title: "React Basics",
        description: "Introduction to React",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg",
      },
      {
        id: 2,
        title: "Redux Fundamentals",
        description: "State management with Redux",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
      },
      // ... add more courses as needed
    ],
  },
  {
    id: 2,
    title: "Modern JavaScript Stack",
    description:
      "Explore the latest features and tools in JavaScript development",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    courses: [
      {
        id: 3,
        title: "JavaScript ES6+",
        description: "Modern features of JavaScript",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
      {
        id: 4,
        title: "Node.js Basics",
        description: "Server-side JavaScript with Node.js",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      },
      // ... add more courses as needed
    ],
  },
  {
    id: 3,
    title: "Full Stack Development",
    description: "Master the skills to become a full-stack developer",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    courses: [
      {
        id: 1,
        title: "React Basics",
        description: "Introduction to React",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg",
      },
      {
        id: 4,
        title: "Node.js Basics",
        description: "Server-side JavaScript with Node.js",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      },
      {
        id: 5,
        title: "Express.js Fundamentals",
        description: "Building web applications with Express.js",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      },
      {
        id: 6,
        title: "MongoDB Essentials",
        description: "NoSQL database with MongoDB",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Frontend Frameworks",
    description: "Deep dive into popular frontend frameworks",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    courses: [
      {
        id: 1,
        title: "React Basics",
        description: "Introduction to React",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg",
      },
      {
        id: 7,
        title: "Vue.js Introduction",
        description: "Front-end framework for building user interfaces",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      },
      {
        id: 8,
        title: "Angular Basics",
        description: "Building dynamic web applications with Angular",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Data Science Essentials",
    description: "Unlock the world of data science with these courses",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg",
    courses: [
      {
        id: 16,
        title: "Python Fundamentals",
        description: "Introduction to Python programming language",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Mobile App Development",
    description: "Build mobile applications for iOS and Android",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
    courses: [
      {
        id: 20,
        title: "Swift Programming",
        description: "Developing iOS applications with Swift",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
      },
    ],
  },
  {
    id: 7,
    title: "DevOps Mastery",
    description: "Learn the principles and practices of DevOps",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    courses: [
      {
        id: 1,
        title: "React Basics",
        description: "Introduction to React",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg",
      },
      {
        id: 7,
        title: "Vue.js Introduction",
        description: "Front-end framework for building user interfaces",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      },
      {
        id: 8,
        title: "Angular Basics",
        description: "Building dynamic web applications with Angular",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
      },

      {
        id: 14,
        title: "Jest Testing Framework",
        description: "JavaScript testing framework",
        url: "https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png",
      },
      {
        id: 15,
        title: "Git and GitHub Essentials",
        description: "Version control for collaborative development",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
      },
    ],
  },
  {
    id: 8,
    title: "UI/UX Design Fundamentals",
    description: "Craft delightful user experiences with these courses",
    url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    courses: [
      {
        id: 1,
        title: "React Basics",
        description: "Introduction to React",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg",
      },
      {
        id: 7,
        title: "Vue.js Introduction",
        description: "Front-end framework for building user interfaces",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      },
      {
        id: 8,
        title: "Angular Basics",
        description: "Building dynamic web applications with Angular",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
      },
    ],
  },
  {
    id: 9,
    title: "Cybersecurity Essentials",
    description: "Secure your applications and networks with these courses",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png",
    courses: [
      {
        id: 16,
        title: "Python Fundamentals",
        description: "Introduction to Python programming language",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg",
      },
      {
        id: 17,
        title: "Java for Beginners",
        description: "Getting started with Java",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png",
      },
    ],
  },
  {
    id: 10,
    title: "Cloud Computing",
    description: "Explore the cloud with these foundational courses",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
    courses: [
      {
        id: 18,
        title: "C# Programming",
        description: "Basics of C# programming language",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg",
      },
      {
        id: 19,
        title: "Ruby on Rails",
        description: "Web development with Ruby on Rails",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
      },
      {
        id: 20,
        title: "Swift Programming",
        description: "Developing iOS applications with Swift",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
      },
    ],
  },
];
