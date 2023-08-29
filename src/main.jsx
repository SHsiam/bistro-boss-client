import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Pages/providers/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <div className='container max-2xl mx-auto'>
   <RouterProvider router={router} />
   </div>
   </QueryClientProvider>
   </HelmetProvider>
    </AuthProvider>
      
  </React.StrictMode>,
)
