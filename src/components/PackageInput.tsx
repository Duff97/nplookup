import { usePackage } from "../providers/PackageProvider"
import { packagePlaceholder } from "../utils/constants"
import {motion} from 'framer-motion'

const PackageInput = () => {

  const {loadPackages} = usePackage()

  const handlePackagePaste = (e : React.ClipboardEvent<HTMLTextAreaElement>) => {
    const packages = e.clipboardData.getData('Text')

    loadPackages(packages)
  }

  return (
    <motion.div 
      className='flex flex-col items-center justify-center h-svh absolute top-0 w-full'
      initial={{opacity: 1, translateX: 0}}
      exit={{opacity: 0, translateX: '-100%'}}
      transition={{duration:0.5}}
    >
      <div className="text-center space-y-3 pb-3">
        <h2 className='text-3xl text-palette-3'>Paste your package.json file</h2>
        <h3 className="text-xl">Get useful details on your project!</h3>
      </div>
      <textarea className='resize-none hidescroll max-w-[500px] w-[90vw] h-[300px] rounded-2xl p-5 shadow-lg shadow-gray-900 bg-palette-2 focus:outline outline-2 outline-palette-3' placeholder={packagePlaceholder} onPaste={handlePackagePaste} />
    </motion.div>
  )
}

export default PackageInput