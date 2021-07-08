/**
 * Templates/Login
 * @package Component
 */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../types'
import { signIn } from '../../../reducks/users/operations'

/**
 * @param props TProps
 * @returns
 */
const Login: React.FC = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state: IRootState) => state)

  console.log(selector.router)

  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => dispatch(signIn())}>ログイン</button>
    </div>
  )
}

export default Login
