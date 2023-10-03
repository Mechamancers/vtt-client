const Home=() => {
    return (
        <div className='h-[100svh] w-[100svw] bg-blackish flex items-center justify-center'>
            {/* Header */}
            <header className='h-[20rem] flex flex-col justify-center content-center text-center'>
                {/* Heading - Primary */}
                <span className='block font-title text-5xl text-center text-platinum'>
                    Mechamancers</span>
                {/* Headig - Secondary */}
                <span className='block font-title text-3xl mt-2 text-center text-platinum'>
                    Intuitive Tabletop</span>
                {/* Authentication Button (Google) - Opens Modal */}
                <button className='mt-8 bg-white'>Sign In / Sign Up</button>
            </header>
        </div>
    )
}

export default Home;