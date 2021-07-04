import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// モジュールをインポート
import { ConnectedRouter } from 'connected-react-router'
// Hisotoryパッケージをインポート
import * as History from 'history'
import createStore from './reducks/store/store'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// Historyを生成
const history = History.createBrowserHistory()
// createStoreを呼び出すことでStoreが生成される / historyを引数に渡す
export const store = createStore(history)

ReactDOM.render(
  <React.StrictMode>
    {/* ラップしたコンポーネントにstoreの情報を渡す */}
    {/* reactコンポーネント内で react-redux のconnect関数が使える */}
    <Provider store={store}>
      {/* ラップすることでAppコンポーネント内のPathの変更をhistoryが管理出来るようになる */}
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
