import Link from 'next/link';

export default function Page() {
  return <ProjectsSection />;
}

function ProjectsSection() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description:
        'A full-featured online store built with Next.js and GraphQL',
      link: 'https://next13masters-three.vercel.app/',
    },
  ];

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-semibold text-gray-200 mb-4'>Projects</h2>
      <div className='grid gap-4'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={link} className='flex justify-between items-start'>
      <div>
        <h3 className='font-medium text-gray-200'>{title}</h3>
        <p className='text-sm text-gray-400 mt-1'>{description}</p>
      </div>
    </Link>
  );
}
