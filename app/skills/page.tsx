export const metadata = {
  title: 'Skills',
  description: 'My top skills',
};

export default function Page() {
  return (
    <section>
      <SkillsSection />
    </section>
  );
}

function SkillsSection() {
  const skills = [
    'React',
    'TypeScript',
    'Next.js',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Redux',
    'GraphQL',
    'Node.js',
    'Git',
    'Webpack',
  ];

  return (
    <div className='h-max'>
      <h2 className='text-2xl font-semibold text-gray-200 mb-4'>Skills</h2>
      <div className='flex flex-wrap gap-2'>
        {skills.map((skill) => (
          <span
            key={skill}
            className='px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300'
          >
            {skill}
          </span>
        ))}
      </div>
      <div className='mt-10 sm:mt-16 text-center'>
        <a
          href='/waldemar-ciupa-cv.pdf'
          download
          className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
