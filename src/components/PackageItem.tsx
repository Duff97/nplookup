import { useState } from 'react'
import { IPackage } from '../interface'
import { usePackage } from '../providers/PackageProvider'
import PackageDetails from './PackageDetails'
import { LoaderPinwheel } from 'lucide-react'

const PackageItem = ({packageItem} : {packageItem: IPackage}) => {

  const {setPackageDetails} = usePackage()
  const [expanded, setExpanded] = useState(false)

  const handleHeaderClick = () => {
    setExpanded((prevExpanded) => !prevExpanded)
    if (packageItem.details == null){
      setPackageDetails(packageItem.name)
    }
  }

  return (
    <div className='max-w-[1200px] w-[95vw]'>
      <button onClick={handleHeaderClick} className="w-full bg-gray-800 text-white py-5 px-3 rounded-xl flex gap-5 text-lg font-semibold">
        <h1>{packageItem.name}</h1>
        <h2>{packageItem.version}</h2>
      </button>
      {expanded && !packageItem.details && <div className='bg-gray-700 w-[64px] h-[64px] mx-auto rounded-b-full flex items-center text-gray-300'>
        <LoaderPinwheel width={32} height={32} className='mx-auto animate-spin' />
      </div>}
      {expanded && packageItem.details && <PackageDetails details={packageItem.details} />}
    </div>
  )
}

export default PackageItem