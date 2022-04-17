import {XIcon} from "@heroicons/react/solid";
import {BookOpenIcon} from "@heroicons/react/outline";

const Article = (props) => {
    console.log(props.data)


    return (
        <div className='grid 6xl:flex flex-wrap justify-center' >
        <div className='
        grid grid-rows-1 grid-cols-1
        sm:grid-rows-2 sm:grid-cols-2
        md:grid-rows-2 md:grid-cols-2
        lg:grid-rows-3 lg:grid-cols-3
        gap-6
        max-w-screen-2xl
        mb-10
        pl-10
        pr-10

    '>
            {
                props.data.articles.map((data) => {
                    return (
                        <div className='flex flex-row gap-6  '>
                            {/*Icon*/}
                            <div>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none"
                                     viewBox="0 0 24 24" stroke="#227AB5" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d={data.icon}/>
                                </svg>

                                {/*


                                */}
                            </div>

                            {/*Title ans description*/}
                            <div className='max-w-xs'>
                                <h2 className='text-2xl font-medium'>{data.title}</h2>
                                <p className='text-lg'>{data.desc}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>

    )
}


// This gets called on every request


export default Article;

