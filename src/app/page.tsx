import GridWrapper from './(components)/grid/gridWrapper';
import Hero from './(components)/banner/banner';
import Widgets from './(components)/widgets';

export default function Home() {
  return (
    <div className='flex flex-grow gap-5'>
      <div
        className='flex flex-col flex-grow bg-no-repeat bg-auto lg:bg-cover h-2/4 px-12 py-9'
        style={{ backgroundImage: `url(/assets/background.png)` }}
      >
        <Hero />
        <GridWrapper />
      </div>
      <Widgets />
    </div>
  );
}
