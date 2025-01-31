import React from 'react';
function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}
export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Hello, I am Alix Franck
      </h1>
      <p className="mb-6">
        I am 20 years old and I am planning to attend ETH Zurich for my Bachelor's 
        Degree in Computer Science. I am self-taught and passionate about 
        programming, digital art, and design. Iam Fluent in English, French, and German
      </p>
    

      <h1 className="mb-6 text-2xl font-semibold tracking-tighter">Education</h1>
      <ul className="mb-8 space-y-4">
        <li>Jun 2019 - 2022: FMS Biel-Seeland, Fachmaturitätsschule, Switzerland</li>
        <li>Jun 2022 - 2024: Gymnasium Biel-Seeland, Matura, Switzerland</li>
        <li>Jun 2024 - Jan 2025: SPARC Future Cyber Defense, Switzerland</li>
        <li>Jan 2025 - Feb 2025: Military Service, Cyber Soilder, Switzerland (Put on Medical Leave)</li>
      </ul>

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Experience</h1>
      <p className="mb-4">Sep 2024 - Jan 2025: Freelance Web Development</p>
      <ul className="mb-10 space-y-4">
       <li><a href="https://proxa-solutions.com" target="_blank">Proxa Solutions GmbH, Biel-Bienne, Switzerland</a></li>
       <li><a href="https://www.r22-corporate-services.com" target="_blank">R22 Corporate Housekeeping GmbH, Ipsach, Switzerland</a></li>
       <li><a href="https://franckphysiofitness.ch" target="_blank">Franck Physio Fitness AG, Ipsach, Switzerland</a></li>
       <li><a href="https://bites-catering.de" target="_blank">Bites Catering, Berlin, Germany</a></li>
       <li><a href="https://evasion-sport.be" target="_blank">Evasion-Sport TM, Liege, Belgium</a></li>
      </ul>

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter"> Projects </h1>
      <p className="mb-4">Sep 2023: Matura Thesis Project, Grade 5.5/6</p>
      <p className="mb-6">
       Binary Melodies: In this thesis, I used a Java dialect (Processing 4) to encrypt any text into an image.The goal was not to reinvent the wheel but to create an artistic form of encrypting text into an image. An actual way of decrypting the image back into text was not implemented in this project, but it leaves room for future development.
      </p>
      <ul className="mb-8 space-y-4">
        <li>
          <a
            className="flex items-center transition-all       hover:text-neutral-800 dark:hover:text-neutral-100"
            href="https://github.com/Alyxfranck/ASCII-Images"
            target="_blank"
          >
            <ArrowIcon />
            <span className="ml-2 h-7">Code</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all       hover:text-neutral-800 dark:hover:text-neutral-100"
            href="/BinaryMelodies.pdf"
            target="_blank"
          >
            <ArrowIcon />
            <span className="ml-2 h-7">Thesis</span>
          </a>
        </li>
      </ul>
      <p className="mb-4">Nov 2023 - Jan 2024: The Mandel Bulb, Grade 6/6</p>
      <p className="mb-6"> 
      In this project, my task was to realise the concept of the mushroom in the visual arts. As a result, I animated the Mandelbrot set in 3D and used it as a front end. With the help of live weather data (as a backend component), I made objects grow ‘organically’ like a mushroom. The project was essentioally a Flask application and used Three.js in the frontend.
      </p>
      <ul className="mb-8 space-y-4">
       <li>
           <a
             className="flex items-center transition-all       hover:text-neutral-800 dark:hover:text-neutral-100"
             href="https://github.com/Alyxfranck/Mushroom"
             target="_blank"
           >
             <ArrowIcon />
             <span className="ml-2 h-7">Code</span>
           </a>
         </li>
         <li>
           <a
             className="flex items-center transition-all       hover:text-neutral-800 dark:hover:text-neutral-100"
             href="/docs/Mandelbulb-docs"
             target="_blank"
           >
             <ArrowIcon />
             <span className="ml-2 h-7">Docs</span>
           </a>
         </li>
      </ul>  
      <p className="mb-4"> Aug - Nov 2024: Data Mining</p>
      <p className="mb-6"> 
      In this project, I buillt a scraping api in python 
      </p>
    </section>
  );
}
