import Link from 'next/link';
import Github from './icons/github';
import Linkedin from './icons/linkedin';
import X from './icons/x';

export default function Footer() {
  return (
    <footer className='mt-10 sm:my-16 text-center'>
      <div className='flex flex-wrap justify-center gap-4'>
        <SocialLink
          href='https://github.com/waldemarciupa'
          icon={<Github size={16} color='#ffffff' />}
          label='GitHub'
        />
        <SocialLink
          href='https://www.linkedin.com/in/waldemarciupa'
          icon={<Linkedin size={16} color='#ffffff' />}
          label='LinkedIn'
        />
        <SocialLink
          href='https://x.com/waldemarciupa'
          icon={<X size={16} color='#ffffff' />}
          label='@waldemarciupa'
        />
      </div>
      <p className='mt-8 sm:mt-16 text-neutral-600 dark:text-neutral-300 '>
        © {new Date().getFullYear()} Waldemar Ciupa. All rights reserved.
      </p>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors'
    >
      {icon}
      {label}
    </Link>
  );
}
