import { usePackage } from "../providers/PackageProvider"
import { packagePlaceholder } from "../utils/constants"

const PackageInput = () => {

  const {loadPackages} = usePackage()

  const handlePackagePaste = (e : React.ClipboardEvent<HTMLTextAreaElement>) => {
    const packages = e.clipboardData.getData('Text')

    loadPackages(packages)
  }

  return (
    <div className='flex flex-col items-center gap-10'>
      <div className="text-center space-y-3">
        <h2 className='text-3xl'>Paste your package.json file</h2>
        <h3 className="text-xl text-gray-500">Get useful details on your project!</h3>
      </div>
      <textarea className='resize-none hidescroll max-w-[500px] w-[90vw] h-[300px] border rounded-2xl p-5 shadow-md' placeholder={packagePlaceholder} onPaste={handlePackagePaste} />
    </div>
  )
}

export default PackageInput