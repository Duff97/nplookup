import React, { createContext, useContext, useState } from 'react'
import { IPackage } from '../interface'

interface IPackageContext {
  packages: IPackage[]
  setPackages: React.Dispatch<React.SetStateAction<IPackage[]>>
}

const PackageContext = createContext<IPackageContext>({packages: [], setPackages: () => {}})

const PackageProvider = ({children} : {children: React.ReactNode}) => {

  const [packages, setPackages] = useState<IPackage[]>([])

  return (
    <PackageContext.Provider value={{packages, setPackages}}>
      {children}
    </PackageContext.Provider>
  )
}

const usePackage = () => {
  const {packages, setPackages} = useContext(PackageContext)

  const packageLoaded = packages.length > 0

  const loadPackages = (strPackages : string) => {
    const packageJson = JSON.parse(strPackages)

    console.log(packageJson)

    const dependencies: IPackage[] = []

    for (const data in packageJson) {
      if (data.includes('ependencies')){
        for (const dependency in packageJson[data]){
          dependencies.push({name: dependency, version: packageJson[data][dependency]})
        }
      }
    }

    setPackages(dependencies)
  }

  const clearPackages = () => {
    setPackages([])
  }

  

  return {packages, packageLoaded, loadPackages, clearPackages}
}

export {PackageProvider, usePackage}