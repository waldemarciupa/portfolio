import Link from 'next/link';

const navItems = {
  '/': {
    name: 'About',
  },
  '/skills': {
    name: 'Skills',
  },
  '/projects': {
    name: 'Projects',
  },
  '/contact': {
    name: 'Contact',
  },
};

export function Navbar() {
  return (
    <div className='mt-16'>
      <div className='text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>
          Waldemar Ciupa
        </h1>
        <p className='text-lg md:text-xl text-gray-400 leading-relaxed'>
          Frontend Developer
        </p>
      </div>
      <nav
        className='flex justify-center space-x-4 relative mt-12 px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'
        id='nav'
      >
        <div className='flex flex-row space-x-0 pr-10'>
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className='transition-all text-gray-400 hover:text-white flex align-middle relative py-1 px-2 m-1'
              >
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
