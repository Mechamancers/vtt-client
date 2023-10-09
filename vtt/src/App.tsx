import { Outlet } from 'react-router-dom'
// import * as Google from '@react-oauth/google'

import Navigation from './components/Navigation'

function App() {

  const isLoggedIn = true

  // Game - Outlet Context
  if (location.pathname.startsWith('/game')) {
    return (
        <Outlet />
    ) 
  }

  // Site - Outlet Context (w/ Navigation)
  return (
      <div className='flex'>
        {/* Navigation = hidden when !isLoggedIn */}
        {isLoggedIn && <Navigation /> }
        <Outlet />
      </div>
  )
}

export default App