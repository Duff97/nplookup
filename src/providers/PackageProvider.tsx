import React, { createContext, useContext, useEffect, useState } from 'react'
import { IPackage, IPackageDetails, IRepository } from '../interface'

interface IPackageContext {
  repository: IRepository
  setRepository: React.Dispatch<React.SetStateAction<IRepository>>
  selectedPackage: IPackageDetails | null
  setSelectedPackage: React.Dispatch<React.SetStateAction<IPackageDetails | null>>
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const PackageContext = createContext<IPackageContext>({repository: {name: '', packages: []}, setRepository: () => {}, selectedPackage: null, setSelectedPackage: () => {}, isLoading: false, setIsLoading: () => {}})

const PackageProvider = ({children} : {children: React.ReactNode}) => {

  const storedRepository = window.localStorage.getItem('repository')
  const defaultRepository = storedRepository ? JSON.parse(storedRepository) : {name: '', packages: []}
  const [repository, setRepository] = useState<IRepository>(defaultRepository)
  const [selectedPackage, setSelectedPackage] = useState<IPackageDetails | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('repository', JSON.stringify(repository))
  }, [repository])

  return (
    <PackageContext.Provider value={{repository, setRepository, selectedPackage, setSelectedPackage, isLoading, setIsLoading}}>
      {children}
    </PackageContext.Provider>
  )
}

const usePackage = () => {
  const {repository, setRepository, selectedPackage, setSelectedPackage, isLoading, setIsLoading} = useContext(PackageContext)

  const packageLoaded = repository.packages.length > 0

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

    setRepository({
      name: packageJson.name ?? '',
      packages: dependencies
    })
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
    setRepository({
      ...repository,
      packages: []
    })
    unselectPackage()
  }

  const unselectPackage = () => {
    setSelectedPackage(null)
  }

  

  return {repository, selectedPackage, isLoading, packageLoaded, loadPackages, clearPackages, setPackageDetails, unselectPackage}
}

export {PackageProvider, usePackage}