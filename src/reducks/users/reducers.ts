import * as Actions from './actions' // 全てのモジュールをインポート
import initialState from '../store/initialState' // stateの初期値をインポート

// Reducersは状態を上書きする
// 第一引数にstate, 第二引数にactionがreturnした値
export const UserResucer = (state = initialState.users, action: any) => {
  // Actionのtypeに応じてstateの変更を決定する
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        // stateを渡さないと元あるstateのプロパティが消える
        // 後にあるプロパティが優先されるので結果的に上書き処理となる
        ...action.payload, // actionの中で決められたstateの値を展開して返す
      }
    default:
      return state
  }
}
