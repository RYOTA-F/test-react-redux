import { signInAction } from './actions'
import { push } from 'connected-react-router'

export const signIn = () => {
  // コールバック関数をすぐにリターンする
  return async (dispatch: any, getState: any) => {
    // getState 現在のステートを呼び出す
    const state = getState()
    const isSignedIn = state.users.isSignedIn

    if (!isSignedIn) {
      const url = 'https://api.github.com/users/deatiger'

      const response = await fetch(url)
        .then((res) => res.json())
        .catch(() => null)

      const username = response.login

      // const userData = await emailSignIn(email, password)
      dispatch(
        signInAction({
          isSignedIn: true,
          uid: '00001',
          username: username,
        })
      )

      dispatch(push('/'))
    }
  }
}
