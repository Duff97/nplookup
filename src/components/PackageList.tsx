import { ArrowLeft } from "lucide-react"
import { usePackage } from "../providers/PackageProvider"
import PackageItem from "./PackageItem"

const PackageList = () => {
  
  const {packages, clearPackages} = usePackage()

  const handleReturnClick = () => {
    clearPackages()
  }

  return (
    <div className="space-y-3">
      <button onClick={handleReturnClick} className="flex gap-3 bg-gray-500 text-white p-2 rounded-2xl"><ArrowLeft className="m-auto" />Return</button>
      {packages.map((packageItem) => (
        <PackageItem key={packageItem.name} packageItem={packageItem} />
      ))}
    </div>
  )
}

export default PackageList