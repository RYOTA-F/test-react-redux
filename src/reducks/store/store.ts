// createStoreは同名で使いたいので別名を割り当てる
import { createStore as reduxCreateStore, combineReducers } from 'redux'
import { UserResucer } from '../users/reducers'

// ReducerとStoreを紐づける
export default function createStore() {
  // storeを作成
  return reduxCreateStore(
    // 分割したReducersをまとめる
    // stateのカテゴリ毎にReducerを割り当てる
    // オブジェクトをリターンする
    combineReducers({
      // ストア名: Reducer
      users: UserResucer,
    })
  )
}
