import { Link } from 'react-router-dom'
import { BsGoogle } from 'react-icons/bs'
import { GiMagicPortal } from 'react-icons/gi'

const Login=() => {
    return(
        <div className='bg-rich-black h-[100svh] w-[100svw] flex justify-center items-center'>
            <div className='bg-blackish  w-[25rem] flex flex-col items-center px-4 py-10 rounded-lg'>
                <Link to='/' className='block text-platinum pb-6'><GiMagicPortal style={{ fontSize: '2.5rem' }}/></Link>
                <span className='block text-platinum font-title text-[1.3rem] font-bold pb-8 cursor-default'>Welcome to Mechamancers</span>
                <button className='p-2 w-[20rem] bg-google font-google rounded-lg  text-white text-lg flex justify-center items-center'>
                    <span><BsGoogle /></span>
                    <span className='pl-4'>Continue with Google</span>
                </button>
            </div>
        </div>
    )
}

export default Login;