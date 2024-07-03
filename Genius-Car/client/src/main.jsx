import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './components/Route/Route.jsx'
import {
  RouterProvider
} from "react-router-dom";
import AuthProvider from './components/Contexts/AuthProvider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    
  
)
