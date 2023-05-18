import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProviders from './providers/AuthProviders'
import Font from 'react-font'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <React.StrictMode>
      <Font family='Baloo Paaji 2'>
        <AuthProviders>
          <RouterProvider
            router={router}
          ></RouterProvider>
        </AuthProviders>
      </Font>
    </React.StrictMode>
  </div>,
)
