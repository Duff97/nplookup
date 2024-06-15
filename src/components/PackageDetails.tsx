import { IPackageDetails } from '../interface'

const PackageDetails = ({details} : {details: IPackageDetails}) => {
  return (
    <div className='w-[95%] p-5 mx-auto bg-gray-700 text-white rounded-b-2xl'>
      <h2 className='text-3xl'>{details.name}</h2>
      <p>{details.description}</p>
    </div>
  )
}

export default PackageDetails