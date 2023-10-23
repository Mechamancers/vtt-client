import { Link } from 'react-router-dom'
import dummyGameData from '../components/DummyData.js'

import { BsFillTagsFill } from 'react-icons/bs'

 const Games=() => {

    const tags = ['Fun', 'Scary', 'Role-Playing Heavy', 'Friendly']

    return (
        <div className='bg-blackish text-platinum h-[100svh] w-[100svw] overflow-y-scroll flex justify-center'>

            {/* Main Container*/}
            <div className='w-[80rem] '>

                {/* Header */}
                <span className='block m-8 mb-10 text-4xl font-title'>My Games</span>

                {/* Toolbar - search, create, join, & tags */}
                <div className='px-2 w-full'>
                    {/* Toolbar - top row (search, create, & join) */}
                    <div className='flex gap-2 mb-4'>
                        {/* Search */}
                        <form className='w-[25rem]'>   
                            <div className='relative'>
                                {/* Search - Icon */}
                                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                    <svg 
                                        className='w-4 h-4 text-platinum dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                                        <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'/>
                                    </svg>
                                </div>
                                {/* Search - Input & Placeholder */}
                                <input 
                                    type='search' 
                                    id='search-games' 
                                    className='block w-full p-4 pl-10 text-sm border bg-blackish border-platinum rounded-lg focus:outline-none' 
                                    placeholder='Search Games' 
                                    required />
                                {/* Search - Button */}
                                <button 
                                    type='submit' 
                                    className='text-platinum absolute transition-all duration-300 right-2.5 bottom-2.5 bg-aero 
                                    hover:bg-aero-dark focus:outline-none font-medium rounded-lg text-sm px-4 py-2 '>
                                        Search</button>
                            </div>
                        </form>
                        <button className='text-platinum transition-all duration-300 right-2.5 bottom-2.5 bg-cadet-grey-dark hover:bg-cadet-grey focus:outline-none font-medium rounded-lg text-sm px-4 py-2 '>
                            Create New Game</button>
                        <button className='text-platinum transition-all duration-300 right-2.5 bottom-2.5 bg-cadet-grey-dark hover:bg-cadet-grey focus:outline-none font-medium rounded-lg text-sm px-4 py-2 '>
                            Join Existing Game</button>
                    </div>
                    {/* Tags */}
                    <div className='flex gap-2 px-2'>
                        <BsFillTagsFill style={{transform: 'translate(0,25%)'}}/> 
                        My Tags: 
                    {tags.map((tags) => {
                        return (
                            <div className='bg-rich-hover-light hover:bg-rich-hover-dark py-[1px] px-2 rounded-md cursor-pointer'>
                                {tags}
                            </div>
                        )
                    })}
                    </div>
                
                </div>

                {/* Divider Line */}
                <span className='block w-full bg-platinum h-[2px] mt-4 mb-2'></span>

                {/* Games (that user is registered in) */}
                <div className='flex flex-wrap pt-4 gap-2'>
                    {dummyGameData.map((gameObj) => {
                        return (
                            // Individual Game Card
                            <Link to='/games' key={gameObj.id} className='w-[20rem] max-w-[25rem] grow mb-4 bg-rich-black rounded-md overflow-hidden p-2
                                hover:bg-rich-hover-dark mx-auto hover:transform hover:translate-y-[-4px] transition duration-180 ease-in
                                active:transform active:translate-y-[-1px] active:bg-rich active:bg-rich-black'>
                                {/* Image */}
                                <div className='m-[-1rem] mb-1'><img src={gameObj.img} className='mx-auto mb-2 h-[10rem] w-[20rem] w-[100%] '></img></div>
                                {/* Game Details */}
                                <div>
                                    {/* Name */}
                                    <span className='block font-bold text-xl mb-2'>{gameObj.name}</span>
                                    {/* Launch Game Button */}
                                    <Link to='/' className='rounded-md bg-aero hover:bg-aero-dark text-white px-4 py-2'>Launch Game</Link>
                                    {/* Divider Line */}
                                    <span className='block w-full bg-platinum h-[2px] mt-4 mb-2'></span>
                                    {/* Players List */}
                                    <div className='flex flex-row mb-1'>
                                    {gameObj.players.map((playersObj) => {
                                        return (
                                            <img 
                                                key={playersObj.id} 
                                                src={playersObj.img} 
                                                className='h-[2rem] w-[2rem]'/>
                                        )
                                    })}</div>
                                    {/* Hosted by */}
                                    <span className='block mb-[1px]'>Hosted by {gameObj.host}</span>
                                    {/* Last Played */}
                                    <span className='block mb-1'>Last played on {gameObj.lastPlayed}</span>
                                    {/* Tags */}
                                    {gameObj.tags.map((tagsObj) => {
                                        return (
                                            <span className='bg-rich-hover-light py-[1px] px-2 rounded-md mr-2'>{tagsObj.tag}</span>
                                        )
                                    })}</div>
                            </Link>
                        )
                    })}
                </div>

            </div>

        </div>
    )
 }

 export default Games;