import { Link } from 'react-router-dom'

const NotFound=() =>{
    return(
        <div className='bg-blackish h-[100svh] w-[100svw] flex justify-center items-center'>
            <div className='flex '>
                <span className='text-platinum mb-20'>Page Not Found. </span>
                &nbsp;
                <Link to='/' className='font-sans text-platinum'> Return Home</Link>
            </div>

        </div>
    )
}

export default NotFound;