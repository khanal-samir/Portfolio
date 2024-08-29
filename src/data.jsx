import { nanoid } from 'nanoid';
import {  FaJs,  } from 'react-icons/fa';
import { SiTailwindcss,SiReact,SiHtml5,} from 'react-icons/si';

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
  },
  
];


export const projects = [
  {
    id: nanoid(),
    img: 'https://i.pinimg.com/originals/09/e2/cd/09e2cd8d3a83b6e9cd4dc5d0d703a575.png',
    url: 'https://samchat-react.vercel.app/',
    github: 'https://github.com/Samir-codes-123/ChatApp',
    title: 'Samchat',
    text: ' I developed a chat application featuring real-time messaging through Appwrite, ensuring instant updates and seamless conversations. Users can easily upload and share photos within the chat, enhancing their interaction. The application incorporates secure login and registration using Appwrite’s authentication services, safeguarding user data. Additionally, it boasts a responsive design, providing an optimal user experience across various devices.',
  },
  {
    id: nanoid(),
    img: 'https://cdn-icons-png.freepik.com/512/6430/6430292.png',
    url: 'https://eccomerce-react-shadcn.vercel.app/',
    github: 'https://github.com/Samir-codes-123/Eccomerce-React-Shadcn',
    title: 'Clothing Ecommerce',
    text: "In this project, I created a fully functional e-commerce site with a range of standout features. Users can seamlessly list and manage products, enjoy an intuitive shopping experience with a simple Add to Cart function, and switch effortlessly between light and dark modes for added comfort. The site incorporates secure Google authentication for easy login via OAuth, and real-time updates ensure that everything stays synchronized. This project provided a fantastic opportunity to utilize modern web technologies, resulting in a responsive and user-friendly e-commerce platform that I'm incredibly pleased with.",
  },
  
];
