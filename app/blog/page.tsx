import { BlogPosts } from 'app/components/posts'
import BlogSketch from '../components/bg-bulb/BlogSketch';

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
     
      <BlogPosts/>
    </section>
  )
}
