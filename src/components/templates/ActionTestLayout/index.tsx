/**
 * Templates/ActionTestLayout
 * @package Component
 */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInAction } from '../../../reducks/users/actions'

/**
 * @param props TProps
 * @returns
 */
const ActionTestLayout: React.FC = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)

  console.log(selector)

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            signInAction({
              uid: '00001',
              username: 'ryota',
            })
          )
        }
      >
        Sign In
      </button>
    </div>
  )
}

export default ActionTestLayout
