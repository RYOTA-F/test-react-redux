// createStoreは同名で使いたいので別名を割り当てる
import {
  createStore as reduxCreateStore,
  combineReducers,
  // DevTool用
  compose,
} from 'redux'
import { UserResucer } from '../users/reducers'

// DevTool用の設定
interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
}
declare var window: ExtendedWindow

// DevTool用の設定
const composeReduxDevToolsEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

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
    }),
    // DevTool用の設定
    composeReduxDevToolsEnhancers()
  )
}
