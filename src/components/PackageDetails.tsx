import { Home, LoaderPinwheel } from 'lucide-react'
import { usePackage } from '../providers/PackageProvider'

const PackageDetails = () => {

  const {selectedPackage, isLoading} = usePackage()

  return (
    <>
      {isLoading && <div className='flex h-full justify-center items-center'>
        <LoaderPinwheel width={100} height={100} className='animate-spin text-palette-3' />
      </div>}
      {!isLoading && selectedPackage && <div className='p-5 pt-20'>
        <div className='space-y-5'>
          <h2 className='text-3xl text-palette-3 font-bold'>{selectedPackage.name}</h2>
          <p>{selectedPackage.description}</p>
          <h2>Latest: <span className='text-3xl'>{selectedPackage.version}</span></h2>
          <a href={selectedPackage.homepage} target='_blank' className='flex items-center gap-2'><Home /> <span className='underline'>Homepage</span></a>
          <p>License: {selectedPackage.license}</p>
        </div>
      </div>}
    </>
  )
}

export default PackageDetails