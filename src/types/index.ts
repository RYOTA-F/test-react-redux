export interface IRouterLocation {
  hash: string
  pathname: string
  query: object
  search: string
  state: object
}

export interface IRouter {
  action: string
  location: IRouterLocation
}

export interface IUsers {
  isSignedIn: boolean
  uid: string
  username: string
}

export interface IRootState {
  router: IRouter
}
