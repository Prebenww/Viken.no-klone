
const PageLayout = () => {
    return (
        <div className='flex bg-[#E0F3F9] h-40'>

            {/*Nav location text*/}
            <div className='p-4'>
                <p className='hover:cursor-pointer '><span className='underline underline-offset-2 hover:underline-offset-2 hover:decoration-2'>Forsiden</span> / <span className='hover:underline hover:underline-offset-1 hover:decoration-2'>Tjenester</span></p>
            </div>

            {/*Heading*/}
            <div className='flex justify-center items-center' >
                <h1 className='text-5xl font-semibold' >Tjenester</h1>
            </div>

        </div>
    )
}

export default PageLayout;