import React, { createContext, useContext, useEffect, useState } from 'react'
import { IPackage, IPackageDetails } from '../interface'

interface IPackageContext {
  packages: IPackage[]
  setPackages: React.Dispatch<React.SetStateAction<IPackage[]>>
}

const PackageContext = createContext<IPackageContext>({packages: [], setPackages: () => {}})

const PackageProvider = ({children} : {children: React.ReactNode}) => {

  const storedPackages = window.localStorage.getItem('packages')
  const defaultPackages = storedPackages ? JSON.parse(storedPackages) : []
  const [packages, setPackages] = useState<IPackage[]>(defaultPackages)

  useEffect(() => {
    window.localStorage.setItem('packages', JSON.stringify(packages))
  }, [packages])

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

  const setPackageDetails = async (name: string) => {
    const fetchUrl = `${import.meta.env.VITE_NPM_REGISTRY_URL}${name}/latest`
  
    const response = await fetch(fetchUrl)
    const details : IPackageDetails = await response.json()

    const newPackages = packages.map((item) => {
      
      if (item.name == name){
        return {
          ...item,
          details
        }
      }
      
      return item
    })

    setPackages(newPackages)
  }

  

  return {packages, packageLoaded, loadPackages, clearPackages, setPackageDetails}
}

export {PackageProvider, usePackage}