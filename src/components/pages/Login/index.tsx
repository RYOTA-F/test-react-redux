/**
 * Templates/Login
 * @package Component
 */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'
import { IRootState } from '@types'
import { signInAction } from '../../../reducks/users/actions'

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
      <button
        onClick={() => {
          dispatch(
            signInAction({
              uid: '0001',
              username: 'hoge',
            })
          )
          dispatch(push('/'))
        }}
      >
        ログイン
      </button>
    </div>
  )
}

export default Login
