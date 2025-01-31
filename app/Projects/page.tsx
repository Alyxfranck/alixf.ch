
import React from 'react';
import ArrowIcon from 'app/components/ArrowIcon';
import ProjectsSketch from '../components/bg-bulb/ProjectsSketch';
import Link from 'next/link' 

const ProjectsPage: React.FC = () => {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>

       <Link
            className="flex flex-col space-y-1 mb-4"
            href="/Bulbs"
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              January, 23 2024
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              The Mandelbulb: 3D Fractals 
              </p>
            </div>
        </Link>
        <Link
            className="flex flex-col space-y-1 mb-4"
            href="/wiki"
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              November, 26 2024
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              Wikireels: Wikipedia with a twist
              </p>
            </div>
        </Link>
        <Link
            className="flex flex-col space-y-1 mb-4"
            href="https://buillt-docs.vercel.app/"
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              November, 4 2024
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              Buillt-docs: A collaborative Text Editor
              </p>
            </div>
        </Link>    
    </section>
  );
}

//      <ProjectsSketch/>
export default ProjectsPage;
