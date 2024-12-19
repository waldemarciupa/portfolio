export default function Page() {
  return (
    <section>
      <AboutSection />
    </section>
  );
}

function AboutSection() {
  return (
    <div className='space-y-4'>
      <h2 className='text-2xl font-semibold text-gray-200 mb-4'>About Me</h2>
      <p className='text-gray-400'>
        I'm a passionate frontend developer with a keen eye for creating
        intuitive and efficient web applications. With a strong foundation in
        React and TypeScript, I strive to build seamless user experiences that
        blend functionality with aesthetic appeal.
      </p>
      <p className='text-gray-400'>
        As a lifelong learner, I'm constantly exploring new technologies and
        methodologies to stay at the forefront of web development. My goal is to
        craft digital solutions that not only meet but exceed user expectations.
      </p>
    </div>
  );
}
