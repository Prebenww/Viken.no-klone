import {ReactChild, ReactFragment, ReactPortal} from "react";
import DummyTitles from "./dummyTitles";

// @ts-ignore
const PageLayout = () => {

    return (
        <div>
            {/*Top bar*/}
            <div className='flex bg-[#E0F3F9] h-40'>

                {/*Nav location text*/}
                <div className='p-4 '>
                    <p className='hover:cursor-pointer flex flex-nowrap gap-2 '><span
                        className='underline underline-offset-2 hover:underline-offset-2 hover:decoration-2'>Forsiden</span> / <span
                        className='hover:underline hover:underline-offset-1 hover:decoration-2'>Tjenester</span></p>
                </div>

                {/*Heading*/}
                <div className='flex justify-center items-center'>
                    <h1 className='text-5xl font-semibold'>Tjenester</h1>
                </div>

                {/*Arrow image*/}

                <div className='flex ml-96'>
                    <img src='/arrow.png' className='h-40' alt='arrow-icon'/>
                </div>

            </div>

            {/*-----------------------------------------------------------------*/}


            {/*Navigation categories section*/}
            <div className='grid 6xl:flex flex-wrap justify-center'>
                <div className=' grid grid-rows-2 grid-cols-2
                                sm:grid-rows-2 sm:grid-cols-2
                                md:grid-rows-2 md:grid-cols-2
                                lg:grid-rows-2 lg:grid-cols-2
                                gap-6
                                max-w-screen-2xl
                                underline underline-offset-1
                                '>
                    <DummyTitles/>
                    <DummyTitles/>
                    <DummyTitles/>
                    <DummyTitles/>
                    <DummyTitles/>
                    <DummyTitles/>
                    <DummyTitles/>
                </div>
            </div>
        </div>


    )
}

export default PageLayout;