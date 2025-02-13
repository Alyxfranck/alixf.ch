import MandelbulbSketch from 'app/components/bg-bulb/MandelbulbSketch';
import ArrowIcon from 'app/components/ArrowIcon';
import Tracker from './components/tracker';
export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, I am /\ [ | &#125;&#123; 
      </h1>
      <p className='mb-6'>
        I Graduated from gymnasium Biel Seeland. 
        I am passionate about creating interactive and engaging experiences on the web.
        I am currently working on a few projects that I am excited to share with you.
      </p>
      
     
      <Tracker />
    </section>
  );
}
