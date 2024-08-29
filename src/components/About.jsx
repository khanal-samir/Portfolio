import Photo2 from '../assets/Photos/Mountain.jpg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 items-center gap-12 md:gap-16 transition-transform hover:scale-105'>
          <img src={Photo2} alt='About Me' className='w-full h-96 object-cover rounded-lg shadow-lg transition-opacity duration-300 hover:opacity-90' />
          <article>
            <SectionTitle text='Code and Coffee' />
            <p className='text-gray-700 mt-6 leading-relaxed'>
            Hello, I'm Samir Khanal, a dedicated computer science student currently pursuing BSc.CSIT at Prithivi Narayan Campus. With a foundation in core Java, I'm expanding my horizons into the dynamic realm of web development. Excited to learn and contribute to the evolving tech landscape. Let's connect and exchange insights! 
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
