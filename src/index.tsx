import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './state/store'
import App from './App'
import './styles/global.css'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
)
