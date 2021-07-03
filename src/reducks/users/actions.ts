// storeで判定するためにType名を定義指定奥
export const SIGN_IN = 'SIGN_IN'
// stateとtypeを渡すことで決められた値を返す
export const signInAction = (userState: any) => {
  return {
    type: SIGN_IN,
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username,
    },
  }
}

export const SIGN_OUT = 'SIGN_OUT'
export const signOutAction = () => {
  return {
    type: SIGN_OUT,
    payload: {
      isSignedIn: false,
      uid: '',
      username: '',
    },
  }
}
