

function Portfolio() {

  return (
    <>
      <section id="portfolio" className="min-h-screen py-8 grid gap-10">
        <h1 className="text-[#4FA1C6]">These are some of my projects</h1>

        <div className="md:grid md:grid-cols-3 mt-15 flex flex-col">
          <img src="./IMG/Worldwide.avif" className="col-span-2 w-full h-full" alt="Description" />
          <div className="bg-black flex-col flex justify-evenly items-center px-5 py-18  font-medium leading-6">
            <h2 className="text-lg font-semibold pb-5 md:pb-0">WorldWise App</h2>
            <p className="pb-5 md:pb-0">
              App created for travelers to keep a record of cities and countries visited, created with React, css,
              Rest API, useContext, React Router.
            </p>
            <button onClick={() => window.open('https://andri-jose.github.io/WorldWise_app/', '_blank')}>
              View more
            </button>
          </div>
        </div>

        <div className="md:grid md:grid-cols-3 mt-15 flex flex-col">
          <img src="./IMG/graphics_img.png" className="col-span-2 w-full h-full" alt="Description" />
          <div className="bg-black flex-col flex justify-evenly items-center px-5 py-18  font-medium leading-6">
            <h2 className="text-lg font-semibold pb-5 md:pb-0">Graphics app</h2>
            <p className="pb-5 md:pb-0">
              Contribution to an open source code base. Landing page created using TypeScript and Jest for testing.
            </p>
            <button onClick={() => window.open('https://andri-jose.github.io/Graphics-App/', '_blank')}>
              View more
            </button>
          </div>
        </div>

        <div className="md:grid md:grid-cols-3 mt-15 flex flex-col">
          <div className="bg-black flex-col flex justify-evenly items-center px-5 py-18 font-medium leading-6">
            <h2 className="text-lg font-semibold pb-5 md:pb-0">Real Estate Landing Page</h2>
            <p className="pb-5 md:pb-0">
              Landing page created for a real estate company, created with React, TypeScript, Tailwind CSS, useState, Vitest for Testing.
            </p>
            <button onClick={() => window.open('https://andri-jose.github.io/Landing-Page-Real-Estate/', '_blank')}>
              View more
            </button>
          </div>
          <img src="./IMG/image-realestate.png" className="col-span-2 w-full h-full " alt="Description" />
        </div>
     
      </section>

    </>
  );
}

export default Portfolio
