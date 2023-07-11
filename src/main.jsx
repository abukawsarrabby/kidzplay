import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProviders from './providers/AuthProviders'
import Font from 'react-font'
import { HelmetProvider } from 'react-helmet-async'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <React.StrictMode>
      <Font family='Baloo Paaji 2'>
        <HelmetProvider>
          <AuthProviders>
          <Toaster />
            <QueryClientProvider client={queryClient}>
              <RouterProvider
                router={router}
              ></RouterProvider>
            </QueryClientProvider>
          </AuthProviders>
        </HelmetProvider>
      </Font>
    </React.StrictMode>
  </div>,
)
