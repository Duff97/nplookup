import React, { createContext, useContext, useEffect, useState } from 'react'
import { IPackage, IPackageDetails } from '../interface'

interface IPackageContext {
  packages: IPackage[]
  setPackages: React.Dispatch<React.SetStateAction<IPackage[]>>
  selectedPackage: IPackageDetails | null
  setSelectedPackage: React.Dispatch<React.SetStateAction<IPackageDetails | null>>
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const PackageContext = createContext<IPackageContext>({packages: [], setPackages: () => {}, selectedPackage: null, setSelectedPackage: () => {}, isLoading: false, setIsLoading: () => {}})

const PackageProvider = ({children} : {children: React.ReactNode}) => {

  const storedPackages = window.localStorage.getItem('packages')
  const defaultPackages = storedPackages ? JSON.parse(storedPackages) : []
  const [packages, setPackages] = useState<IPackage[]>(defaultPackages)
  const [selectedPackage, setSelectedPackage] = useState<IPackageDetails | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('packages', JSON.stringify(packages))
  }, [packages])

  return (
    <PackageContext.Provider value={{packages, setPackages, selectedPackage, setSelectedPackage, isLoading, setIsLoading}}>
      {children}
    </PackageContext.Provider>
  )
}

const usePackage = () => {
  const {packages, setPackages, selectedPackage, setSelectedPackage, isLoading, setIsLoading} = useContext(PackageContext)

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

  const fetchPackageDetails = async (name: string) => {
    const fetchUrl = `${import.meta.env.VITE_NPM_REGISTRY_URL}${name}/latest`
  
    const response = await fetch(fetchUrl)
    const details : IPackageDetails = await response.json()

    return details
  }

  const setPackageDetails = (name: string) => {
    setIsLoading(true)
    fetchPackageDetails(name).then((value) => {
      setIsLoading(false)
      if (packageLoaded)
        setSelectedPackage(value)
    })
  }

  const clearPackages = () => {
    setPackages([])
    setSelectedPackage(null)
  }

  

  return {packages, selectedPackage, isLoading, packageLoaded, loadPackages, clearPackages, setPackageDetails}
}

export {PackageProvider, usePackage}