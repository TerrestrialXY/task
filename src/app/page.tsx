import Hero from './(components)/hero/hero';
import Widgets from './(components)/widgets';

export default function Home() {
  return (
    <div className='w-full flex gap-5'>
      <Hero />
      <Widgets />
    </div>
  );
}
