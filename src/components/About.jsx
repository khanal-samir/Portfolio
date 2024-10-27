import Photo2 from '../assets/Photos/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 items-center gap-12 md:gap-16 transition-transform hover:scale-105'>
          <img src={Photo2} alt='About Me' className='w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-300 hover:opacity-90' />
          <article>
            <SectionTitle text='Code and Coffee' />
            <p className='text-gray-700 mt-6 leading-relaxed'>
            About
Hello, I'm Samir Khanal, a dedicated computer science student currently pursuing BSc.CSIT at Prithivi Narayan Campus. With a growing passion for web development, I'm delving into the MERN stack and excited to learn and contribute to the ever-evolving tech landscape. Let's connect and exchange insights!
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
