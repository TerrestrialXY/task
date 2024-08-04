import Hero from './(components)/hero/hero';
import Music from '@/app/(components)/widgets/music'
import Avatar from './(components)/widgets/avatar';
import CurrencyTracker from './(components)/widgets/currencyTracker';
import GameStats from './(components)/widgets/gameStats';
import Notification from './(components)/widgets/notification';

export default function Home() {
  return (
    <div className='w-full flex gap-5'>
      <Hero />
      <aside className='w-96 px-2 py-4 mr-10 hidden md:flex flex-col items-center justify-normal gap-10'>
        <Music />
        <Avatar />
        <CurrencyTracker />
        <GameStats />
      <Notification />
      </aside>
    </div>
  );
}
