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
        I am 20 years old and I am attending ETH Zurich in September 2025, for my Bachelor's 
        Degree in Computer Science. I am self-taught and passionate about 
        programming, digital art, and design. Iam Bilingual, French and German and proficient in English.
      </p>
    
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter">Education</h1>
      <ul className="mb-8 space-y-4">
        <li>Jun 2019 - 2022: FMS Biel-Seeland, Fachmaturitätsschule, Switzerland</li>
        <li>Jun 2022 - 2024: Gymnasium Biel-Seeland, Matura, Switzerland</li>
        <li>Jun 2024 - Jan 2025: SPARC Future Cyber Defense, Switzerland</li>
        <li>Jan 2025 - Feb 2025: Military Service, Cyber Soilder, Switzerland (Medical Leave)</li>
        <li>Feb 2025 - Now: Substitute Math and Sports Teacher, Switzerland</li>
      </ul>

      <h2 className="text-2xl font-medium tracking-tight mt-6">Websites I made</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
      Aug 2024 - Now</p>
      <ul className="mb-10 space-y-4">
       <li><a href="https://www.proxasolutions.ch/" target="_blank">Proxa Solutions GmbH, Switzerland</a></li>
       <li><a href="https://www.r22-corporate-services.com" target="_blank">R22 Corporate Housekeeping GmbH, Switzerland</a></li>
       <li><a href="https://franckphysiofitness.ch" target="_blank">Franck Physio Fitness AG, Ipsach, Switzerland</a></li>
       <li>Bites Catering, Germany</li>
       <li><a href="https://evasion-sport.be" target="_blank">Evasion-Sport TM, Belgium</a></li>
      </ul>

      <h1 className="text-2xl font-semibold tracking-tighter"> Projects</h1>


      <h2 className="text-xl font-medium tracking-tight mt-6">Matura Thesis</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
      September, 2023 </p>
      <p className="mb-2">
       Binary Melodies: In this thesis, I used a Java dialect (Processing 4) to encrypt any text into an image.The goal was not to reinvent the wheel but to create an artistic form of encrypting text into an image. An actual way of decrypting the image back into text was not implemented in this project, but it leaves room for future development.
      </p>
      <p className="mb-3">Grade 5.5/6.0</p>
      <div className="flex space-x-4 mb-8">
        <a className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="https://github.com/Alyxfranck/ASCII-Images"
          target="_blank">
          <ArrowIcon />
          <span className="ml-2 h-7">Code</span>
        </a>
        <a className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="/BinaryMelodies.pdf"
          target="_blank">
          <ArrowIcon />
          <span className="ml-2 h-7">Thesis</span>
        </a>
     </div>
     <h2 className="text-xl font-medium tracking-tight mt-6 ">The Mandelbulb</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
      January, 2024</p>
      <p className='mb-2'> 
      In this project, my task was to realise the concept of the mushroom in the visual arts. As a result, I animated the Mandelbrot set in 3D and used it as a front end. With the help of live weather data (as a backend component), I made objects grow ‘organically’ like a mushroom. The project was essentioally a Flask application and used Three.js in the frontend. 
      </p>
      <p className="mb-3">Grade 6.0/6.0</p>
      <div className="flex space-x-4 mb-8">
        <a className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="https://github.com/Alyxfranck/Mushroom"
          target="_blank">
          <ArrowIcon />
          <span className="ml-2 h-7">Code</span>
        </a>
        <a className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="/docs/Mandelbulb-docs"
          target="_blank">
          <ArrowIcon />
          <span className="ml-2 h-7">Docs</span>
        </a>
        <a className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="/Projects/zBulbs"
          target="_blank">
          <ArrowIcon />
          <span className="ml-2 h-7">Example</span>
        </a>
     </div>
     <h2 className="text-xl font-medium tracking-tight mt-6 ">Data Mining</h2>
     <p className="text-neutral-600 dark:text-neutral-400 mb-4">
     November, 2024</p>
      <p className="mb-6"> 
      In this project, I used Python to extract and analyze data from the internet. The project was based on the BeautifulSoup and requests libraries. The goal was to build a robust and reliable data mining tool capable of gathering information based on a given XPath. The final product was a locally hosted API, containerized with Docker, that returned data in JSON format and could later convert it to a CSV file.
      </p>
      <div className="flex space-x-4 mb-8">
        <a className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="https://github.com/Alyxfranck/data-mining"
          target="_blank">
          <ArrowIcon />
          <span className="ml-2 h-7">Code</span>
        </a>
        <a className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="/blog/guide-data-mining"
          target="_blank">
          <ArrowIcon />
          <span className="ml-2 h-7">Guide</span>
        </a>
     </div>
     <h2 className="text-xl font-medium tracking-tight mt-6 ">Buillt Docs</h2>
     <p className="text-neutral-600 dark:text-neutral-400 mb-4">
     November, 2024- Now</p>
      <p className="mb-2"> 
       As of August 2024, I started offering websites as a service and wanted my own platform to collaborate with my clients and team. The goal is to create a more cost-effective alternative to the Microsoft Office cloud.  
      </p>
      <p className='mb-2'>
      I have been working on a collaborative text editor, based on the Liveblocks library, with a Node.js backend and Auth0 for authentication. The aim is to develop a simple and user-friendly text editor that allows multiple users to work together in real time.  
      </p>
      <p className='mb-6'>
      The project is still in development and is set to be released in July 2025. I am currently working on user authentication and backend development. 
      </p>
      <div className="flex space-x-4 mb-8">
        <a className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="https://buillt-docs.vercel.app/"
          target="_blank">
          <ArrowIcon />
          <span className="ml-2 h-7">Beta Version</span>
        </a>
     </div>
    </section>
  );
}
