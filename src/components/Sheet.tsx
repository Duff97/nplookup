import React, { useEffect, useState } from 'react'
import { usePackage } from '../providers/PackageProvider';
import { X } from 'lucide-react';
import {motion} from 'framer-motion'

const Sheet = ({children} : {children: React.ReactNode}) => {
  
  const [isMobile, setIsMobile] = useState(true);

  const {unselectPackage, selectedPackage, isLoading} = usePackage()

  const visible = !isMobile || isLoading || selectedPackage

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }

    handleResize()

    addEventListener('resize', handleResize)

    return () => {
      removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {visible && <div>
        <div className='absolute h-full w-full sm:w-0 bg-palette-1/70' />
        <motion.div 
          className='absolute right-0 w-[80%] sm:w-[33%] border-l border-palette-2 h-full bg-palette-1'
          initial={isMobile ? {translateX: '100%'} : false}
          animate={{translateX: '0'}}
          transition={{duration:0.5}}
        >
          {isMobile && <button onClick={unselectPackage} className='absolute right-5 top-5 text-palette-3'>
            <X />
          </button>}
          {children}
        </motion.div>
      </div>}
    </>
  )
}

export default Sheet