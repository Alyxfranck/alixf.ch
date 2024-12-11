
import React from 'react';

const ProjectsPage: React.FC = () => {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Projects
      </h1>
      <h2 className="mb-4">
        <a href="/Bulbs" className="text- hover:underline">➔ The Mandelbulb</a> 
      </h2>
      <h2 className="mb-4">
        <a href="/wiki" className="text- hover:underline">➔ Wikireels</a> 
      </h2>
      <h2 className="mb-4">
        <a href="" className="text- hover:underline">➔ Buillt-docs</a> 
      </h2>
    </section>
  );
}

export default ProjectsPage;
