import { DocsPosts } from '../components/docsPosts'
import BlogSketch from '../components/bg-bulb/BlogSketch';

export const metadata = {
  title: 'Docs',
  description: 'Read my Docs',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Documentations</h1>
     
      <DocsPosts/>
    </section>
  )
}
