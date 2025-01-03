import { nanoid } from 'nanoid';
import {  FaJs,FaNodeJs  } from 'react-icons/fa';
import { SiTailwindcss,SiReact,SiHtml5,SiMongodb} from 'react-icons/si';
import ecomerce from './assets/Photos/ecomerce.png';
import samchat from "./assets/Photos/samchat.png";
import twiite from "./assets/Photos/twiite.png";
export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];


export const skills = [
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <SiHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <SiReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Tailwind CSS, leveraging its utility-first approach to build responsive and modern user interfaces efficiently.',
  },{
    id: nanoid(),
    title: 'Node and Express',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'In-depth understanding of Express.js, specializing in building fast and scalable backend applications, RESTful APIs, and managing server-side operations with Node.js.',
},{
  
    id: nanoid(),
    title: 'MongoDB and Mongoose',
    icon: <SiMongodb className='h-16 w-16 text-emerald-500' />,
    text: 'Skilled in MongoDB and Mongoose, leveraging schema-based solutions for efficient data modeling and database management in modern applications, with a focus on scalability and performance.',

},
  
];


export const projects = [
  {
    id: nanoid(),
    img:twiite, 
    url: 'https://social-media-ochre-delta.vercel.app/',
    github: 'https://github.com/khanal-samir/Social-Media',
    title: 'Social media application',
    text: 'I developed a social media application inspired by Twitter, enabling users to create and share posts, upload and display photos, and engage with others through likes and comments, fostering dynamic interaction. The platform features secure login and registration using JWT authentication, ensuring robust user data protection. Designed with a responsive layout, it delivers an intuitive and engaging user experience across all devices, making it easy for users to connect and share their moments.'},
  {
    id: nanoid(),
    img: samchat,
    url: 'https://samchat-react.vercel.app/',
    github: 'https://github.com/khanal-samir/ChatApp',
    title: 'Samchat',
    text: ' I developed a chat application featuring real-time messaging through Appwrite, ensuring instant updates and seamless conversations. Users can easily upload and share photos within the chat, enhancing their interaction. The application incorporates secure login and registration using Appwrite’s authentication services, safeguarding user data. Additionally, it boasts a responsive design, providing an optimal user experience across various devices.',
  },
  {
    id: nanoid(),
    img:  ecomerce ,
    url: 'https://eccomerce-react-shadcn.vercel.app/',
    github: 'https://github.com/khanal-samir/Eccomerce-React-Shadcn',
    title: 'Clothing Ecommerce',
    text: "In this project, I created a fully functional e-commerce site with a range of standout features. Users can seamlessly list and manage products, enjoy an intuitive shopping experience with a simple Add to Cart function, and switch effortlessly between light and dark modes for added comfort. The site incorporates secure authentication for easy login via Appwrite, and real-time updates ensure that everything stays synchronized. This project provided a fantastic opportunity to utilize modern web technologies, resulting in a responsive and user-friendly e-commerce platform that I'm incredibly pleased with.",
  },
  
];
