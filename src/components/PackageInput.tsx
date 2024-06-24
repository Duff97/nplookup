import { usePackage } from "../providers/PackageProvider"
import { packagePlaceholder, previewPackages } from "../utils/constants"
import {motion} from 'framer-motion'

const PackageInput = () => {

  const {loadPackages} = usePackage()

  const handlePackagePaste = (e : React.ClipboardEvent<HTMLTextAreaElement>) => {
    const packages = e.clipboardData.getData('Text')

    loadPackages(packages)
  }

  const handlePreviewSelection = async (url: string) => {
    const request = await fetch(url)
    const raw = await request.text()
    loadPackages(raw)
  }

  return (
    <motion.div 
      className='absolute inset-0 lg:flex flex-col lg:flex-row items-center justify-center bg-palette-1 overflow-y-auto px-3 py-10 lg:py-0'
      initial={{opacity: 1, translateX: 0}}
      exit={{opacity: 0, translateX: '-100%'}}
      transition={{duration:0.5}}
    >
      <div>
        <div className="text-center space-y-3 pb-3">
          <h2 className='text-3xl text-palette-3'>Paste your package.json file</h2>
          <h3 className="text-xl">Get useful details on your project!</h3>
        </div>
        <textarea className='resize-none hidescroll max-w-[500px] w-[90vw] h-[300px] rounded-2xl p-5 shadow-lg shadow-gray-900 bg-palette-2 focus:outline outline-2 outline-palette-3' placeholder={packagePlaceholder} onPaste={handlePackagePaste} />
      </div>
      <div className="relative border-t lg:border-l border-palette-2 h-0 lg:h-full my-10 lg:my-0 w-full lg:w-0 flex justify-center items-center lg:mx-10">
        <p className="relative bg-palette-1 p-2 flex flex-col justify-center lg:-top-0 font-semibold tracking-wide">OR</p>
      </div>
      <div className="space-y-5">
        <h2 className="text-3xl text-palette-3">Try with a popular open-source repository</h2>
        <div className='flex gap-3 flex-wrap'>
          {previewPackages.map((preview, index) => (
            <button key={index} className="bg-palette-3 rounded-xl p-3 text-palette-1 font-semibold font-xl" onClick={() => {handlePreviewSelection(preview.url)}}>
              {preview.name}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default PackageInput