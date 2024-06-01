import { ArrowLeft } from "lucide-react"
import { IPackage } from "../interface"
import { usePackage } from "../providers/PackageProvider"

const PackageItem = ({packageItem} : {packageItem: IPackage}) => {
  return (
    <div className="max-w-[1200px] w-[95vw] bg-gray-800 text-white py-5 px-3 rounded-xl">
      {packageItem.name}
      {packageItem.version}
    </div>
  )
}

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