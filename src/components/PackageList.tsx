import { ArrowLeft } from "lucide-react"
import { usePackage } from "../providers/PackageProvider"
import {motion} from 'framer-motion'
import PackageDetails from "./PackageDetails"
import Sheet from "./Sheet"

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
      className="h-full w-screen flex overflow-hidden"
    >
      <div className="absolute w-full sm:w-[67%] left-0 bottom-0 top-0 space-y-10 px-3 sm:px-10 pt-10 flex-grow overflow-y-auto overflow-x-hidden pb-10">
        <button onClick={handleReturnClick} className="flex gap-3 bg-palette-3 text-palette-1 p-2 rounded-2xl">
          <ArrowLeft className="m-auto" />
        </button>
        <div className="flex gap-3 flex-wrap">
          {packages.map((item) => (
            <button key={item.name} onClick={() => { setPackageDetails(item.name) }} className="bg-palette-3 text-palette-1 rounded-2xl p-5 flex flex-col gap-2 font-semibold shadow-md shadow-black">
              <h2 className="text-xl">{item.name}</h2>
              <h3>{item.version}</h3>
            </button>
          ))}
        </div>
      </div>
      <Sheet>
        <PackageDetails />
      </Sheet>
    </motion.div>
  )
}

export default PackageList