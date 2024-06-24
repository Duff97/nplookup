export interface IRepository {
  name: string
  packages: IPackage[]
}

export interface IPackage {
  name: string
  version: string
}

export interface IPackageDetails {
  name: string
  description: string
  version: string
  license: string
  homepage: string
}

export interface IPreviewPackage {
  name: string
  url: string
}