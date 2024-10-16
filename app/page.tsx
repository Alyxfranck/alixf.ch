
import { BlogPosts } from 'app/components/posts'
import MandelbulbSketch from 'app/components/MandelbulbSketch';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, Iam Alix Franck
      </h1>
      <p className="mb-4">
       I’m a developer and tech enthusiast, combining creative problem-solving with efficiency. As co-founder of Buillt.ch and Swiss Founders Lab, I modernize websites and implement innovative business ideas with modern technology.
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
