import { BlogPosts } from 'app/components/posts';
import MandelbulbSketch from 'app/components/MandelbulbSketch';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, I am /\ [ | &#125;&#123; Franck
      </h1>
      <p className="mb-4">
        I’m a developer blending creativity with efficiency. As co-founder of{' '}
        <a href="https://buillt.ch" target="_blank" rel="noopener noreferrer">Buillt</a> and{' '}
        <a href="https://www.swissfounderslab.com/" target="_blank" rel="noopener noreferrer">Swiss Founders Lab</a>, I modernize websites and bring innovative business ideas to life using cutting-edge technology.
      </p>
      <p className="mb-4">
        Recent projects include a 3D visualization using live data and the development of Buillt Docs, a real-time collaborative editing tool.
      </p>
      <div className="my-8">
        <MandelbulbSketch />
        <BlogPosts />
      </div>
    </section>
  );
}
