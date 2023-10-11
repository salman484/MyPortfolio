// src/components/About.js

import React from "react";
// src/components/About.js

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Salman Fathul Alfarisyi.
                <br className="hidden lg:inline-block" />Hard-worker
                and willing to learn new things
              </h1>
              <p className="mb-8 leading-relaxed">
              Fresh graduate from S1 Informatics Engineering with internship
              experience at Icommits IT consultant as a web developer. I have good
              coding skills.

              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./me.JPG"
              />
            </div>
          </div>
        </section>
      );
}

// repeat the same basic structure for all 6 components