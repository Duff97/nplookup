import Navbar from './components/Navbar';
import PackageInput from './components/PackageInput';

export default function App() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center">
        <PackageInput />
      </div>
    </main>
  );
}
