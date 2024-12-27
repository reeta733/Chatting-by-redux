import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import chatSlice from "./redux/chatSlice.jsx"

let rootReducer = combineReducers({ chatSlice })
let store = configureStore({
  reducer: rootReducer

})


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
     
    </StrictMode>,
  </BrowserRouter>
)
