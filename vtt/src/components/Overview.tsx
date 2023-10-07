import { Link } from 'react-router-dom'
import Navigation from "./Navigation";

const Overview=() => {

    const user = {
        id: 1,
        name: 'Drewford',
        avatar: 'https://i.imgur.com/SGTvQJ7.png',
        pronouns: 'He/Him',
        timezone: 'CST',
        status: 'Why did nobody trust the low dex wizard? Because he cantrip at any moment'
    }

    const dummyGameData = [
        {
            id: 1,
            name: 'Plight of the Sunseekers',
            host: 'Drewford',
            img: 'https://i.imgur.com/VP9HxsY.png',
            lastPlayed: 'Oct. 5, 2023'
        },
        {
            id: 2,
            name: 'Gribbitz Detective Agency',
            host: 'Ori',
            img: 'https://i.imgur.com/eDONaHc.png',
            lastPlayed: 'Oct. 1, 2023'
        },
        {
            id: 3,
            name: '20th Annual Hunger Games',
            host: 'Tessa',
            img: 'https://i.imgur.com/iakxUSR.png',
            lastPlayed: 'Oct. 3, 2023'
        },
        {
            id: 4,
            name: 'Phantom of the Music',
            host: 'Tessa',
            img: 'https://i.imgur.com/X8xJ4dc.png',
            lastPlayed: 'Oct. 6, 2023'
        }
    ]

    return (
        <div className='bg-blackish text-platinum h-[100svh] w-[100svw] flex'>
            {/* JUSTIFY CENTER WHEN NAVIGATION MOVES TO THE RIGHT PLACE */}

            <Navigation />

            {/* Greeing - Contains bento */}
            <div>
                <span className='block m-8 mb-6 text-4xl font-title'>Welcome, {user.name}</span>

                {/* Overview - Bento */}
                <div className='flex mx-auto my-0'>

                    {/* Games - Left Column */}
                    <div className='bg-rich-black rounded-md m-4 mr-2 p-4 w-[33rem]'>
                        <span className='block font-title text-3xl mb-4 border-b-2 border-platinum'>Games</span>
                        {/* Game Cards */}
                        {dummyGameData.map((gameObj) => {
                            return (
                                <Link to='/' key={gameObj.id} className='bg-rich-hover-light text-platinum mb-4 flex w-[30rem] rounded-md overflow-hidden
                                    hover:bg-rich-hover-dark mx-auto hover:transform hover:translate-y-[-4px] transition duration-180 ease-in
                                    active:transform active:translate-y-[-1px]'>
                                    <div><img src={gameObj.img} className='h-[7.5rem] w-[7.5rem]'/></div>
                                    <div className='w-3/4 p-4'>
                                        <span className='block font-bold text-xl'>{gameObj.name}</span>
                                        <span className='block mb-[1px]'>Hosted by {gameObj.host}</span>
                                        <span className='block w-3/4 bg-platinum h-[2px] mb-[1px]'></span>
                                        <span className='block'>Last played on {gameObj.lastPlayed}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

                    {/* Profile & File Explorer - Right Column */}
                    <div className='w-30rem'>

                        {/* Profile - Top Quarter */}
                        <div className='bg-rich-black rounded-md m-4 mb-2 p-4'>
                            <span className='block font-title text-3xl mb-4 border-b-2 border-platinum'>Profile</span>
                            <div className='flex px-8'>
                                {/* Profile Icon */}
                                <Link to='/profile' className='w-[12rem] rounded-full'>
                                    <img src={user.avatar} />
                                </Link>
                                {/* Profile Description */}
                                <div className='p-4 w-[20rem]'>
                                    <span className='block text-2xl'>{user.name}</span>
                                    {/* Time Zone, Pronouns */}
                                    <span className='block mb-4'>{user.pronouns} - {user.timezone}</span>
                                    {/* About Me */}
                                    <span className='block italic'>{user.status}</span>
                                </div>
                            </div>
                        </div>

                        {/* File Explorer - Bottom Quarter */}
                        <div className='bg-rich-black rounded-md m-4 p-4'>
                            <span className='block font-title text-3xl mb-4 border-b-2 border-platinum'>File Explorer</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview;