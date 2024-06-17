import { ArrowLeft } from "lucide-react"
import { usePackage } from "../providers/PackageProvider"
import {motion} from 'framer-motion'
import PackageDetails from "./PackageDetails"

const PackageList = () => {
  
  const {packages, clearPackages, setPackageDetails} = usePackage()

  const handleReturnClick = () => {
    clearPackages()
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateX: '100%' }}
      animate={{ opacity: 1, translateX: '0' }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="h-full w-screen flex"
    >
      <div className="block w-[66vw] space-y-10 px-20 pt-10 flex-grow overflow-y-scroll overflow-x-hidden">
        <button onClick={handleReturnClick} className="flex gap-3 bg-gray-500 text-white p-2 rounded-2xl">
          <ArrowLeft className="m-auto" />
          Return
        </button>
        <div className="flex gap-3 flex-wrap">
          {packages.map((item) => (
            <button key={item.name} onClick={() => { setPackageDetails(item.name) }} className="bg-gray-800 rounded-2xl text-white p-5 flex flex-col gap-2">
              <h2 className="text-xl">{item.name}</h2>
              <h3>{item.version}</h3>
            </button>
          ))}
        </div>
      </div>
      <div className="block w-[33vw] border-l bg-gray-300 border-gray-800 h-full">
        <PackageDetails />
      </div>
    </motion.div>
  )
}

export default PackageList