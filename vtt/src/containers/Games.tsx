import { Link } from 'react-router-dom'
import dummyGameData from '../components/DummyData.js'

 const Games=() => {
    return (
        <div className='bg-blackish text-platinum h-[100svh] w-[100svw] overflow-y-scroll flex justify-center'>

            {/* Main Container*/}
            <div className='border-red-500 border-[2px]'>

                {/* Header */}
                <span className='block m-8 mb-6 text-4xl font-title'>My Games</span>

                {/* Toolbar - search, create, join, & tags */}
                <div className='border-white border-[2px] w-full'>
                    Search. Create. Join. <br /> Tags.
                </div>

                {/* Games (that user is registered in) */}
                <div className='flex w-[65rem] flex-wrap justify-around p-2'>
                    {dummyGameData.map((gameObj) => {
                        return (
                            // Individual Game Card
                            <Link to='/games' key={gameObj.id} className='w-[20rem] h-[22rem] m-2 bg-rich-black rounded-md overflow-hidden p-2
                                hover:bg-rich-hover-dark mx-auto hover:transform hover:translate-y-[-4px] transition duration-180 ease-in
                                active:transform active:translate-y-[-1px] active:bg-rich active:bg-rich-black'>
                                {/* Image */}
                                <div ><img src={gameObj.img} className='mx-auto mb-2  h-[10rem] w-[20rem] rounded-md'></img></div>
                                {/* Game Details */}
                                <div>
                                    {/* Name */}
                                    <span className='block font-bold text-xl'>{gameObj.name}</span>
                                    {/* Launch Game Button */}
                                    <Link to='/' className='rounded-md bg-aero text-white px-2'>Launch Game</Link>
                                    {/* Divider Line */}
                                    <span className='block w-full bg-platinum h-[2px] mb-2'></span>
                                    {/* Players List */}
                                    <div className='flex flex-row'>
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
                                    <span className='block mb-[1px]'>Last played on {gameObj.lastPlayed}</span>
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