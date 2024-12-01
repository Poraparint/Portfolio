import Profile from './components/profile'
import Info from './components/info'

export default function Home() {
  return (
    <div className="bg-secon flex h-full text-xl tracking-wider max-sm:flex-col duration-700">
      <Profile />
      <Info/>
    </div>
  );
}
