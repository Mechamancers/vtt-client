import { Link } from 'react-router-dom'
import Navigation from "./Navigation";

const Overview=() => {

    const dummyGameData = [
        {
            id: 1,
            name: "Plight of the Sunseekers",
            host: "Drewford",
            img: "https://i.imgur.com/VP9HxsY.png",
            lastPlayed: "Oct. 5, 2023"
        },
        {
            id: 2,
            name: "Gribbitz Detective Agency",
            host: "Ori",
            img: "https://i.imgur.com/eDONaHc.png",
            lastPlayed: "Oct. 1, 2023"
        }
    ]

    return (
        <div className='bg-blackish text-platinum h-[100svh] w-[100svw] flex'>

            <Navigation />

            {/* Greeing - Contains bento */}
            <div>
                <span className='block m-8 mb-6 text-4xl font-title'>Welcome, Username</span>

                {/* Overview - Bento */}
                <div className='flex'>

                    {/* Games - Left Column */}
                    <div className='bg-rich-black rounded-md m-4 mr-2 p-4 w-[40rem]'>
                        <span className='block font-title text-3xl mb-4 border-b-2 border-platinum'>Games</span>
                        {/* Game Cards */}
                        {dummyGameData.map((gameObj) => {
                            return (
                                <Link to='/' key={gameObj.id} className='bg-rich-hover text-platinum mb-4 flex w-[30rem] rounded-md overflow-hidden'>
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
                    <div className='w-1/2'>

                        {/* Profile - Top Quarter */}
                        <div className='bg-rich-black rounded-md m-4 mb-2 p-4'>Profile</div>

                        {/* File Explorer - Bottom Quarter */}
                        <div className='bg-rich-black rounded-md m-4 p-4'> File Explorer</div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview;