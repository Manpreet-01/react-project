import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Provider} from 'react-redux';
import {store} from './app/store.js';


const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
]);


  // <React.StrictMode>
  // </React.StrictMode>,


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
       <RouterProvider router={router} />
    </Provider>
)
