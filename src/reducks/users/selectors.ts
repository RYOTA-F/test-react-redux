import { createSelector } from 'reselect'
import { IRootState } from '../../types'

const usersSelector = (state: IRootState) => state.users

export const getUserId = createSelector([usersSelector], (state) => state.uid)

export const getUsername = createSelector(
  [usersSelector],
  (state) => state.username
)
