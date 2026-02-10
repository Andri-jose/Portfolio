


function About() {

  return (
    <>
      <section id="about" className="grid md:grid-cols-2 gap-1 min-h-screen py-8 md:mt-15">
          <div className="flex items-center">
          <img src="./picture.jpg" alt="front page image" className='w-md h-auto mx-auto object-contain' />
        </div>

        <div className="flex flex-col justify-center items-center gap-7 px-4 md:px-8 lg:px-12">
          <h2 className="text-4xl text-[#4FA1C6] text-center">About me</h2>
          <p className="text-justify leading-relaxed max-w-2xl mx-auto font-semibold">Front-End Developer with hands-on 
            experience building scalable, user-focused web applications using React, TypeScript, Next.js, and Redux. 
            Strong background in API integration (REST and GraphQL), responsive design, and testing with Jest. 
            Experienced in collaborative agile environments and open source workflows. Motivated to grow as a software 
            developer and contribute to high-quality performant products.
          </p>
        </div>
      </section>

    </>
  );
}

export default About