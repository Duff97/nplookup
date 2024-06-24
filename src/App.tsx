import Navbar from './components/Navbar';
import PackageInput from './components/PackageInput';
import PackageList from './components/PackageList';
import { usePackage } from './providers/PackageProvider';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const {packageLoaded} = usePackage()
  return (
    <main className='h-svh w-screen overflow-hidden flex flex-col bg-palette-1 text-palette-4'>
      <Navbar />
      <div className='relative flex-grow'>
        <AnimatePresence>
          {!packageLoaded && <PackageInput />}
        </AnimatePresence>
        <AnimatePresence>
          {packageLoaded && <PackageList />}
        </AnimatePresence>
      </div>
    </main>
  );
}
