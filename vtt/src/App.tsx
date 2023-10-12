import { Outlet } from 'react-router-dom'
// import * as Google from '@react-oauth/google'

import Navigation from './components/Navigation'

function App() {

  const isLoggedIn = true

  // Game - Outlet Context
  if (location.pathname.startsWith('/game-id')) {
    return (
        <Outlet />
    ) 
  }

  // Site - Outlet Context (w/ Navigation)
  return (
      <div className='bg-blackish flex'>
        {isLoggedIn && <Navigation /> }
        <Outlet />
      </div>
  )
}

export default App