import MandelbulbSketch from 'app/components/MandelbulbSketch';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, I am /\ [ | &#125;&#123; 
      </h1>
  
      <div className="my-8">
        <MandelbulbSketch />
      </div>
    </section>
  );
}
