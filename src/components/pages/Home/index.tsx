/**
 * Templates/Home
 * @package Component
 */
import React from 'react'
import { getUserId, getUsername } from '../../../reducks/users/selectors'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../types'

/**
 * @param props TProps
 * @returns
 */
const Home: React.FC = () => {
  const selector = useSelector((state: IRootState) => state)
  const uid = getUserId(selector)
  const username = getUsername(selector)

  return (
    <div>
      <h2>Home</h2>
      <p>ユーザーID: {uid}</p>
      <p>ユーザー名: {username}</p>
    </div>
  )
}

export default Home
