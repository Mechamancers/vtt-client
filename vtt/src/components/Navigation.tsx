import { useState } from 'react'
import { Link } from 'react-router-dom'

// SVGs - React Icons
import { GiMagicPortal } from 'react-icons/gi'
import { RiPagesLine } from 'react-icons/ri'
import { PiGameController } from 'react-icons/pi'
import { LuFiles, LuUserCircle } from 'react-icons/lu'
import { BsGear } from 'react-icons/bs'

const Navigation=() => {
    const [navOpen, setNavOpen] = useState(false);

    const navUpper = [
        {
            id: 1,
            label: 'Overview',
            icon: <RiPagesLine/>,
            path: '/',
        },
        {
            id: 2,
            label: 'Games',
            icon: <PiGameController />,
            path: '/games'
        },
        {
            id: 3,
            label: 'File Explorer',
            icon: <LuFiles />,
            path: '/files'
        }
    ]

    const navLower = [
        {
            id: 1,
            label: 'Account',
            icon: <LuUserCircle />,
            path: '/account'
        },
        {
            id: 2,
            label: 'Settings',
            icon: <BsGear />,
            path: '/settings'
        }
    ]

    return (
        <div className={`bg-rich-black text-platinum w-[15rem] h-[100svh] relative flex flex-col justify-between transition duration-300
            ${navOpen ? 'translate-x-0' : 'translate-x-[-100%]' } md:translate-x-0`}>

            {/* Button: Toggle Navigation Visibility */}
            <div
                onClick={()=>{setNavOpen(!navOpen)}} 
                className=' md:hidden absolute end-[-3.5rem] top-[1rem] z-20 cursor-pointer rounded-r-md bg-rich-black h-[3.5rem] w-[3.5rem] flex justify-center items-center'>
                {navOpen ? 'X' : 'O'}
            </div>

            {/* Nav-Upper: Overview, Games, File Explorer */}
            <div className='flex flex-col'>
                {/* Website Logo - Return to Home */}
                <Link to='/' className='p-4 my-4'>
                    <GiMagicPortal style={{ fontSize: '2.5rem', margin: '0 auto' }}/></Link>
                {navUpper.map((navObj) => {
                    return(
                        <Link to={navObj.path} key={navObj.id} 
                            className='nav-link'>
                            <span className='p-2 pl-6'>{navObj.icon}</span> 
                            <span className='p-2 text-xl'>{navObj.label}</span>
                        </Link>
                    )
                })}
            </div>

            {/* Nav-Lower: Account, Settings */}
            <div className='flex flex-col mb-4'>
                {navLower.map((navObj) => {
                    return(
                        <Link to={navObj.path} key={navObj.id} 
                            className='nav-link'>
                            <span className='p-2 pl-6'>{navObj.icon}</span> 
                            <span className='p-2 text-xl'>{navObj.label}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Navigation;