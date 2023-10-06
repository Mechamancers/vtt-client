import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import NotFound from './components/NotFound.tsx'
import Home from './containers/Home.tsx'
import Login from './containers/Login.tsx'

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

      {/* Temporary Route until OAuth works */}
      <Route path='/home' element={<Overview />}></Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
