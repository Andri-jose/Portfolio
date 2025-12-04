


function About() {

  return (
    <>
      <section id="about" className="grid md:grid-cols-2 gap-1 min-h-screen py-8 md:mt-15">
          <div className="flex items-center">
          <img src="./picture.jpg" alt="front page image" className='w-md h-auto mx-auto object-contain' />
        </div>

        <div className="flex flex-col justify-center items-center gap-7 px-4 md:px-8 lg:px-12">
          <h2 className="text-4xl text-[#4FA1C6] text-center">About me</h2>
          <p className="text-justify leading-relaxed max-w-2xl mx-auto font-semibold">Hi! I'm Andri Salazar, a Front-End Developer. I'm passionate about web development
            and enjoy creating responsive, user-focused interfaces. I constantly seek new challenges and
            opportunities to grow as a developer and deliver efficient, high-quality solutions through my projects.
          </p>
        </div>
      </section>

    </>
  );
}

export default About