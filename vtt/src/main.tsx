import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import NotFound from './components/NotFound.tsx'
import Home from './containers/Home.tsx'

import Home2 from './containers/Home2.tsx'

import Login from './containers/Login.tsx'
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
      <Route path='/home' element={<Home2 />}></Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
