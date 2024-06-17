import { Home, LoaderPinwheel } from 'lucide-react'
import { usePackage } from '../providers/PackageProvider'

const PackageDetails = () => {

  const {selectedPackage, isLoading} = usePackage()

  return (
    <>
      {isLoading && <div className='h-full w-full flex justify-center items-center'>
        <LoaderPinwheel width={100} height={100} className='animate-spin' />
      </div>}
      {selectedPackage && <div>
        <div className='space-y-3'>
          <h2 className='text-3xl'>{selectedPackage.name}</h2>
          <p>{selectedPackage.description}</p>
        </div>
        <div className='space-y-3'>
          <h2>Latest: <span className='text-3xl'>{selectedPackage.version}</span></h2>
          <a href={selectedPackage.homepage} target='_blank' className='flex items-center gap-2'><Home /> <span className='underline'>Homepage</span></a>
          <p>License: {selectedPackage.license}</p>
        </div>
      </div>}
    </>
  )
}

export default PackageDetails