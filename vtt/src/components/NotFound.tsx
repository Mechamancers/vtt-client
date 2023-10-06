import { Link } from 'react-router-dom'
import { GiMagicPortal } from 'react-icons/gi'

const NotFound=() =>{
    return(
        <div className='bg-blackish h-[100svh] w-[100svw] flex flex-col justify-center items-center text-platinum'>
            <Link to='/' className='mb-2'>
                <GiMagicPortal style={{ fontSize: '2.5rem' }}/>
            </Link>
            <div className='flex '>
                <span className='mb-10'>Page Not Found. </span>
                &nbsp;
                <Link to='/' className='font-sans text-platinum'> Return Home</Link>
            </div>

        </div>
    )
}

export default NotFound;