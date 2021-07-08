// createStoreは同名で使いたいので別名を割り当てる
import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
  // DevTool用
  compose,
} from 'redux'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
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
export default function createStore(history: any) {
  // storeを作成
  return reduxCreateStore(
    // 分割したReducersをまとめる
    // stateのカテゴリ毎にReducerを割り当てる
    // オブジェクトをリターンする
    combineReducers({
      router: connectRouter(history),
      users: UserResucer,
    }),
    // DevTool用の設定
    composeReduxDevToolsEnhancers(
      // ルーターに利用することを宣言しておく
      applyMiddleware(routerMiddleware(history), thunk)
    )
  )
}
