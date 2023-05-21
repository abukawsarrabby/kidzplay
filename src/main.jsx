import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProviders from './providers/AuthProviders'
import Font from 'react-font'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <React.StrictMode>
      <Font family='Baloo Paaji 2'>
        <HelmetProvider>
          <AuthProviders>
            <RouterProvider
              router={router}
            ></RouterProvider>
          </AuthProviders>
        </HelmetProvider>
      </Font>
    </React.StrictMode>
  </div>,
)
