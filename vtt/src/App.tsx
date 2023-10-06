import { GoogleOAuthProvider } from '@react-oauth/google'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <GoogleOAuthProvider clientId='563486037747-jcp30jsmnj5a72e633bquibgsnfsp1lg.apps.googleusercontent.com'>
      <Outlet />
    </GoogleOAuthProvider>
  )
}

export default App
