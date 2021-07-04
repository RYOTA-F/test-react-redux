/**
 * Templates/Home
 * @package Component
 */
import React from 'react'
import { getUserId } from '../../../reducks/users/selectors'
import { useSelector } from 'react-redux'
import { IRootState } from '@types'

/**
 * @param props TProps
 * @returns
 */
const Home: React.FC = () => {
  const selector = useSelector((state: IRootState) => state)
  const uid = getUserId(selector)

  return (
    <div>
      <h2>Home</h2>
      <p>{uid}</p>
    </div>
  )
}

export default Home
