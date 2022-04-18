const DummyTitles = () => {
    return (
        <div>
            <div>
                <div className='flex flex-row gap-6 transition ease-in-out  p-5 hover:bg-[#E0F3F9] hover:shadow-md rounded-2xl
                        max-w-sm
                         '>

                    {/*Icon*/}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none"
                             viewBox="0 0 24 24" stroke="#227AB5" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                    </div>


                    {/*Title ans description*/}
                    <div className='max-w-xs group'>
                        <h2 className='text-2xl font-medium group-hover:underline underline-offset-1'>Title</h2>
                        <p className='text-lg  '>Description
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DummyTitles;