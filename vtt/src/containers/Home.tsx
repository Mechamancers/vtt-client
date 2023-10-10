import { Link } from 'react-router-dom'
import Overview from '../components/Overview'

const Home=() => {

    const isLoggedIn = true

    if (!isLoggedIn) {
        return (
            <div className='h-[100svh] w-[100svw] bg-blackish flex items-center justify-center'>
                {/* Header */}
                <header className='h-[20rem] flex flex-col justify-center content-center text-center'>
                    {/* Heading - Primary */}
                    <span className='block font-title text-5xl text-center text-platinum'>
                        Mechamancers</span>
                    {/* Headig - Secondary */}
                    <span className='block font-title text-3xl mt-2 text-center text-platinum'>
                        Intuitive Tabletop</span>
                
                    {/* Redirect to login route - Authentication Button (Google) */}
                    <div className='flex text-white justify-around w-40 mx-auto mt-4'>
                        <Link to='/login' className='cursor-pointer'>Sign In</Link>
                        <Link to='/login' className='cursor-pointer'>Sign Up</Link>
                    </div>
                </header>
            </div>
        )
    }

    return (
        <Overview />
    )
}

export default Home;