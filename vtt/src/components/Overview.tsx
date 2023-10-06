import Navigation from "./Navigation";

const Overview=() => {
    return (
        <div className='bg-blackish text-platinum h-[100svh] w-[100svw] flex'>

            <Navigation />

            {/* Greeing - Contains bento */}
            <div>
                <span className='block m-8 mb-6 text-4xl'>Welcome, Username</span>

                {/* Overview - Bento */}
                <div className='flex'>

                    {/* Games - Left Column */}
                    <div className='bg-rich-black w-1/2 rounded-md m-4 mr-2 p-4'>
                        ~~Games~~
                        <div>Game x</div>
                        <div>Game x</div>
                        <div>Game x</div>
                        <div>Game x</div>
                        <div>Game x</div>
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