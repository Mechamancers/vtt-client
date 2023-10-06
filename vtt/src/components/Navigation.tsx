import { Link } from 'react-router-dom'
import { GiMagicPortal } from 'react-icons/gi'
import { RiPagesLine } from 'react-icons/ri'
import { PiGameController } from 'react-icons/pi'
import { LuFiles, LuUserCircle } from 'react-icons/lu'
import { BsGear } from 'react-icons/bs'

const Navigation=() => {

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
        <div className='bg-rich-black w-[15rem] h-[100svh] flex flex-col justify-between'>

            {/* Nav-Upper: Overview, Games, File Explorer */}
            <div className='flex flex-col'>
                {/* Website Logo - Return to Home */}
                <Link to='/' className='p-4 my-4'>
                    <GiMagicPortal style={{ fontSize: '2.5rem', margin: '0 auto' }}/></Link>
                {navUpper.map((navObj) => {
                    return(
                        <Link to={navObj.path} key={navObj.id} 
                            className='flex justify-start mb-2 nav-icons'>
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
                            className='flex justify-start mb-2 nav-icons'>
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