import {
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Josue Resume',
  description: "portfolio site built with Josue's resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Josue Barros.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a passionate <strong className="text-stone-100">Full Stack Developer</strong> with a knack for building innovative solutions.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        My goal is to work in agile and collaborative teams, contributing with the knowledge acquired so far to deliver valued services, in a company that provides me with an opportunity to grow and advance in studies in Software Engineering.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a dedicated Full-Stack Web Developer with experience in cloud computing and a focus on delivering innovative solutions. My expertise spans many industries, including real estate, banking, business intelligence, and government initiatives. I specialize in React and Node and have hands-on experience with JavaScript, Java, MySQL, PostgreSQL, MongoDB, Spring, Docker, and Azure.
  I'm knowledgeable in agile methodologies and a certified AZ-900 professional, and I'm continually focused on honing my skills in Microsoft Azure solution architecture. With a proven track record of delivering high-quality, reliable code using SOLID principles, I'm committed to writing clean, secure, and efficient code that meets project requirements and exceeds expectations.
  I'm open to part/full-time opportunities to work with other talented professionals and organizations. Let's collaborate and create innovative solutions that drive success. Please feel free to reach out to me at genie.it.ninja@gmail.com to discuss potential opportunities.
  `,
  aboutItems: [
    {label: 'Location', text: 'Rio de Janeiro, Brazil', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Brazilian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Swimming, Keeping fit', Icon: SparklesIcon},
    {label: 'Employment', text: 'Freelancer', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'NextJS',
        level: 7,
      },
      {
        name: 'VueJS',
        level: 8,
      },
      {
        name: 'NuxtJS',
        level: 7,
      },
      {
        name: 'Angular',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'PHP',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Java',
        level: 6,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 6,
      },
      {
        name: 'Flutter',
        level: 4,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Portuguese',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Tradersync Web/Mobile Application',
    description: 'Tradersync is a platform that helps traders improve their performance and profitability. Users can track their trades, analyze their statistics, and get personalized feedback.',
    url: 'https://tradersync.com/',
    stack: ['Vue.js', 'React Native', 'Flask'],
    image: porfolioImage1,
  },
  {
    title: 'Alethea AI Web App',
    description: 'Alethea AI is a platform that enables users to create and share realistic synthetic media using artificial intelligence. Users can generate and customize avatars, voices, and videos.',
    url: 'https://www.alethea.ai/',
    stack: ['React.js', 'Next.js', 'Python'],
    image: porfolioImage2,
  },
  {
    title: 'LeapCloset Web App',
    description: 'LeapCloset is an online marketplace for your clothes. Users can post their goods and buy easily.',
    url: 'https://www.leapcloset.com/',
    stack: ['VueJS', 'Django'],
    image: porfolioImage3,
  },
  {
    title: 'Popswap Mobile App',
    description: 'The Popswap app is designed to help you find your Style Twins by matching you with other users with similar fashion preferences and styles.',
    url: 'https://www.popswap.app/',
    stack: ['React', 'NextJS', 'React Native'],
    image: porfolioImage4,
  },
  {
    title: 'JOVEE Mobile App',
    description: 'JOVEE is a social app that connects people who share the same interests and hobbies. Users can create and join groups, chat with other members, and discover new activities.',
    url: 'https://getjovee.co/',
    stack: ['Flutter', 'Django'],
    image: porfolioImage5,
  },
  {
    title: 'Chow Local',
    description: 'Chow Local is a commission-free online ordering system & delivery platform for restaurants.',
    url: 'https://chowlocal.com',
    stack: ['React', 'React Native', 'Laravel'],
    image: porfolioImage6,
  },
  {
    title: 'Reservation & Passenger Service',
    description: 'Book travel and reservation website and mobile app',
    url: 'https://hitit.com',
    stack: ['Vue.js', 'PHP'],
    image: porfolioImage7,
  },
  {
    title: 'Wordpress website for trauma care',
    description: 'This site will guide you to get help for trauma whether you are a trauma survivor, or a person supporting a survivor.',
    url: 'https://helpfortrauma.com/',
    stack: ['Wordpress'],
    image: porfolioImage8,
  },
  {
    title: 'Bmf-foundation website',
    description: '',
    url: 'https://www.bmffoundation.org',
    stack: ['PHP'],
    image: porfolioImage9,
  },
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Jun 2020 - Dec 2024',
    location: 'Udemy Academy',
    title: 'FullStack Web Developer, Web Development',
    content: <p>Activities and societies: I've got some experience as a FullStack Developer, creating APIs with Spring Framework, Laravel Framework, and NodeJS.
    I also have learned how to create beautiful and performative SPAs with ReactJS and VueJS frameworks.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '02/05/2022 - 04/12/2022',
    location: 'Alpha Technologies USA',
    title: 'ReactJS, TypeScript, MaterialUI, Redux',
    content: (
      <ul>
        <li>
          Worked on a variety of projects, including complex admin panels, business intelligence applications, and real estate applications.
        </li>
        <li>
          Utilized ReactJS to build responsive and dynamic user interfaces, converting Figma and Adobe XD layouts into code.
        </li>
        <li>
          Employed TypeScript to enhance code reliability and maintainability, reducing the likelihood of runtime errors.
        </li>
        <li>
          Utilized MaterialUI to design and implement consistent and visually appealing user interfaces across projects.
        </li>
        <li>
          Integrated Redux to manage complex state management across components and facilitate data exchange between front-end and back-end systems.
        </li>
        <li>
          Performed back-end work using NodeJS frameworks, including Nest and ExpressJS, to develop RESTful APIs and manage data access and storage.
        </li>
      </ul>
    ),
  },
  {
    date: '01/01/2022 - 31/08/2022',
    location: 'NTTDATA (Bradesco - Client)',
    title: 'Java (JSF, Spring JDBC, Spring Rest), ReactJS',
    content: (
      <ul>
        <li>
          Developed and maintained Java-based web applications using JSF and Spring JDBC frameworks.
        </li>
        <li>
          Designed and implemented RESTful APIs using Spring Rest to enable data exchange between web applications and mobile devices.
        </li>
        <li>
          Leveraged ReactJS to build a responsive, dynamic Single Page Application (SPA) that was later converted into iOS/Android web views.
        </li>
        <li>
          Collaborated with cross-functional teams, including UX/UI designers and QA testers, to ensure high-quality delivery of features and functionality.
        </li>
        <li>
          Followed MVC architecture patterns, specifically Java Server Faces (MyFaces), to separate application concerns and improve code maintainability.
        </li>
        <li>
          Conducted code reviews and performed unit testing to ensure that the code was well-written and adhered to best practices.
        </li>
      </ul>
    ),
  },
  {
    date: '01/09/2021 - 30/11/2021',
    location: 'IK Solution',
    title: 'ReactJS, NodeJS (NestJS), PostgreSQL, Docker',
    content: (
      <ul>
        <li>
          Developed features and contributed to a government project aimed at supporting entrepreneurs using ReactJS and NodeJS (NestJS).
        </li>
        <li>
          Worked with a PostgreSQL database to manage data and handle transactions for the project.
        </li>
        <li>
          Utilized Docker to facilitate the deployment of the project in various environments and ensure consistency in the deployment process.
        </li>
        <li>
          Followed SCRUM methodologies to collaborate with team members, plan and execute sprints, and deliver project milestones.
        </li>
        <li>
          Leveraged Context API to manage authentication on the front-end, ensuring secure access to user data and resources.
        </li>
        <li>
          Implemented JWT-based authentication on the back-end, allowing secure and reliable communication between the front-end and back-end of the project.
        </li>
      </ul>
    ),
  },
  {
    date: '01/08/2018 - 31/10/2021',
    location: 'Freelancing',
    title: 'WordPress, Laravel, VueJS, ReactJS, Spring, NodeJS (NestJS and Express), PostgreSQL, MySQL, Docker',
    content: (
      <ul>
        <li>
          I worked on a variety of projects: websites, freelancing-platform MVP, blogs and more.
        </li>
        <li>
          Developed and deployed responsive, mobile-friendly websites using HTML, CSS, and JavaScript.
        </li>
        <li>
          Collaborated with clients to gather requirements, propose technical solutions, and deliver custom web applications.
        </li>
        <li>  
          Built RESTful APIs and integrated third-party APIs to enable data exchange between web applications.
        </li>
        <li>
          Implemented database schemas, data models, and data access layers using SQL and ORM frameworks.
        </li>
        <li>
          Optimized application performance, scalability, and security by applying best practices and testing methodologies.
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'genie.it.ninja@gmail.com',
      href: 'mailto:genie.it.ninja@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Rio de Janeiro, Brazil',
      href: 'https://maps.app.goo.gl/i77nrqXcaDTdWGD89',
    },
    {
      type: ContactType.Discord,
      text: 'genie105',
      href: 'https://discordapp.com/users/1078703622856130571',
    },
    {
      type: ContactType.Github,
      text: 'joshbarrosweb',
      href: 'https://github.com/joshbarrosweb',
    },
    {
      type: ContactType.LinkedIn,
      text: 'josuebarrosspringdeveloper',
      href: 'https://www.linkedin.com/in/josuebarrosspringdeveloper/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/joshbarrosweb'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/josuebarrosspringdeveloper/'},
];
