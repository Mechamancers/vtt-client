import { Link } from 'react-router-dom'
import LoginButton from '../components/LoginButton'
import { GiMagicPortal } from 'react-icons/gi'
import '../style/login.css'

const Login=() => {
    return(
        <div className='login-background'>

            {/* Login Container */}
            <div className='bg-rich-black border-blackish border-[2px]  w-[25rem] z-[1000] flex flex-col items-center px-4 py-10 rounded-lg absolute left-[50%] top-[50%]'
                style={{ position: 'absolute', transform: 'translate(-50%, -50%)'}}>
                <Link to='/' className='block text-platinum pb-6'><GiMagicPortal style={{ fontSize: '2.5rem' }}/></Link>
                <div className='block text-platinum font-title text-[1.3rem] font-bold pb-8 cursor-default'>Welcome to Mechamancers</div>
                <LoginButton />
            </div>

            {/* Animated Background */}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Login;