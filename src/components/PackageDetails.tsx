import { Home } from 'lucide-react'
import { IPackageDetails } from '../interface'

const PackageDetails = ({details} : {details: IPackageDetails}) => {
  return (
    <div className='w-[95%] p-5 mx-auto bg-gray-700 text-white rounded-b-2xl flex flex-col sm:flex-row justify-between'>
      <div className='space-y-3'>
        <h2 className='text-3xl'>{details.name}</h2>
        <p>{details.description}</p>
      </div>
      <div className='space-y-3'>
        <h2>Latest: <span className='text-3xl'>{details.version}</span></h2>
        <a href={details.homepage} target='_blank' className='flex items-center gap-2'><Home /> <span className='underline'>Homepage</span></a>
        <p>License: {details.license}</p>
      </div>
    </div>
  )
}

export default PackageDetails