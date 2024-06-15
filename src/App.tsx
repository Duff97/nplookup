import Navbar from './components/Navbar';
import PackageInput from './components/PackageInput';
import PackageList from './components/PackageList';
import { usePackage } from './providers/PackageProvider';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const {packageLoaded} = usePackage()
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center my-16">
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
