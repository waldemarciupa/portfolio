import Mail from 'app/components/icons/mail';

export const metadata = {
  title: 'Contact',
  description: 'Contact me',
};

export default function Page() {
  return <ContactSection />;
}

function ContactSection() {
  return (
    <div className='space-y-4'>
      <h2 className='text-2xl font-semibold text-gray-200 mb-4'>
        Get in Touch
      </h2>
      <p className='text-gray-400 mb-4'>
        I'm always open to new opportunities and collaborations. Feel free to
        reach out!
      </p>
      <a
        href='mailto:waldemarciupa90@gmail.com'
        className='flex items-center justify-center gap-2 hover:bg-gray-900 px-4 py-2 rounded-md bg-gray-800 text-white transition-colors '
      >
        <Mail size={16} color='#ffffff' />
        Email Me
      </a>
    </div>
  );
}
