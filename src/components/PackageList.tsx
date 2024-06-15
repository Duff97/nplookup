import { ArrowLeft } from "lucide-react"
import { usePackage } from "../providers/PackageProvider"
import PackageItem from "./PackageItem"
import {motion} from 'framer-motion'

const PackageList = () => {
  
  const {packages, clearPackages} = usePackage()

  const handleReturnClick = () => {
    clearPackages()
  }

  return (
    <motion.div 
      className="space-y-3"
      initial={{opacity: 0, translateX: '100%'}}
      animate={{opacity: 1, translateX: '0'}}
      transition={{duration: 0.5, delay: 0.5}}
    >
      <button onClick={handleReturnClick} className="flex gap-3 bg-gray-500 text-white p-2 rounded-2xl"><ArrowLeft className="m-auto" />Return</button>
      {packages.map((packageItem) => (
        <PackageItem key={packageItem.name} packageItem={packageItem} />
      ))}
    </motion.div>
  )
}

export default PackageList