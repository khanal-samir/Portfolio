import heroImg from '../assets/Photos/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-emerald-100 h-screen flex items-center'>
      <div className='grid md:grid-cols-2 items-center gap-32 px-4 md:px-12 max-w-6xl mx-auto'>
        <article className='hover:opacity-90'>
          <h1 className='text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800'>
            I'm Samir Khanal
          </h1>
          <p className='mt-4 text-2xl md:text-4xl text-slate-600 capitalize tracking-wide'>
          Full Stack Developer
          </p>
          <p className='mt-2 text-lg md:text-xl text-slate-600 capitalize tracking-wide'>
            Turning ideas into interactive reality
          </p>
          <div className='flex gap-x-6 mt-6'>
            <a    href='https://github.com/khanal-samir' aria-label='GitHub'>
              <FaGithubSquare className='h-8 w-8 text-slate-600 hover:text-gray-900 transition-colors duration-300' />
            </a>
            <a   href='https://www.linkedin.com/in/samir-khanal-713b68281/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' aria-label='LinkedIn'>
              <FaLinkedin className='h-8 w-8 text-slate-600 hover:text-gray-900 transition-colors duration-300' />
            </a>
            <a href='https://x.com/SamirKh56782671'aria-label='Twitter'>
              <FaTwitterSquare className='h-8 w-8 text-slate-600 hover:text-gray-900 transition-colors duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};

export default Hero;
