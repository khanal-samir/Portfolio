import { links } from '../data';

const Navbar = () => {
  return (
    <nav className='bg-emerald-100 shadow-md'>
      <div className='container mx-auto py-4 flex flex-col sm:flex-row sm:justify-between items-center'>
        <h2 className='text-3xl font-bold text-emerald-800'>
          Samir<span className='text-emerald-600'> Khanal</span>
        </h2>
        <div className='flex gap-x-6 mt-4 sm:mt-0'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg font-medium text-gray-800 hover:text-emerald-600 transition-colors duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
