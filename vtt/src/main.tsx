import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'

import App from './App.tsx'
import NotFound from './components/NotFound.tsx'
import Home from './containers/Home.tsx'
import Login from './containers/Login.tsx'
import Games from './containers/Games.tsx'

// Will be conditionally rendered on Home if user logged in
import Overview from './components/Overview.tsx'

import './style/index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='*' element={<NotFound />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/games' element={<Games />}></Route>

      {/* Temporary Route until OAuth works */}
      <Route path='/home' element={<Overview />}></Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
    <RouterProvider router={router} />
  </GoogleOAuthProvider>
  </React.StrictMode>,
)
