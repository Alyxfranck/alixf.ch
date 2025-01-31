import { DocsPosts } from '../components/docsPosts'
import BlogSketch from '../components/BlogSketch';

export const metadata = {
  title: 'Docs',
  description: 'Read my Docs',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Documentation</h1>
     
      <DocsPosts/>
    </section>
  )
}
