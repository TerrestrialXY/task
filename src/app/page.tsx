import Hero from './(components)/hero/hero';

export default function Home() {
  return (
    <div className='w-full flex gap-5'>
      <Hero />
      <aside className='w-80 hidden md:block'>
        Widget section
      </aside>
    </div>
  );
}
