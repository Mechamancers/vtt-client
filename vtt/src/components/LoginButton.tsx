import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { BsGoogle } from 'react-icons/bs'

const LoginButton=() =>{

    const navigate = useNavigate()

    const login=useGoogleLogin({
        onSuccess: tokenResponse => { 
            console.log(tokenResponse)
            navigate('/') 
        }
    });

    return (
        <button onClick={() => login()}  
            className='p-2 w-[20rem] bg-google font-google rounded-lg  text-white text-lg flex justify-center items-center '>
            <BsGoogle />
            <div className='pl-4'>Continue with Google</div>
        </button>
    )
}

export default LoginButton;