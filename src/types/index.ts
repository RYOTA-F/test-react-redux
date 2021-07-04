import { IUsers } from '../reducks/users/types'

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

export interface IRootState {
  router: IRouter
  users: IUsers
}
