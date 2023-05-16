import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'

import { store } from "./Redux/store";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
    <BrowserRouter>
    <ChakraProvider>
    <App />
    
    </ChakraProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
