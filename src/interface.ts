export interface IPackage {
  name: string
  version: string
  details?: IPackageDetails
}

export interface IPackageDetails {
  name: string
  description: string
  version: string
  license: string
  homepage: string
}