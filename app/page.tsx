"use client";
import { BlogPosts } from 'app/components/posts'
import MandelbulbSketch from 'app/components/MandelbulbSketch';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, I am Alix
      </h1>
      <p className="mb-4">
        I'm Alix Franck, an enthusiastic developer and tech advocate. My journey into tech blends creative problem-solving with a deep commitment to efficiency. I thrive on organizing workflows using tabs for flexibility, finding unmatched productivity in personalized workspaces. As co-founder of both Buillt.CH and Swiss Founders Lab, I help modernize websites and bring innovative business ideas to life through cutting-edge design and technology.
      </p>
      <p className="mb-4">
        Recent projects include a 3D visualization using live data and the development of Buillt Docs, a real-time collaborative editing tool. Whether I'm coding or building apps, dark mode is a must for me, as it keeps me focused during long sessions while minimizing eye strain.
      </p>
      <div className="my-8">
        <MandelbulbSketch />
        <BlogPosts />
      </div>
    </section>
  )
}
