// app/Projects/items/mandelbulb.tsx

import MandelbulbSketchone from 'app/components/MandelbulbSketchone';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        The Mandelbulb
      </h1>
      <p className="mb-4">
         Please wait... the render is computing in the background
      </p>
      <div className="my-8">
        <MandelbulbSketchone/>
      </div>
    </section>
  );
}