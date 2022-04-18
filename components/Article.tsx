import {XIcon} from "@heroicons/react/solid";
import {BookOpenIcon} from "@heroicons/react/outline";
import {ReactChild, ReactFragment, ReactPortal} from "react";

// @ts-ignore
const Article = ({data}) => {
    console.log(data)


    return (
        <div className='grid 6xl:flex flex-wrap justify-center'>
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
                    data.articles.map((data: { icon: string | undefined; title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; desc: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
                        return (
                            <div className='flex flex-row gap-6 transition ease-in-out  p-5 hover:bg-[#E0F3F9] hover:shadow-md rounded-2xl
                        max-w-sm
                         '>
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
                                <div className='max-w-xs group'>
                                    <h2 className='text-2xl font-medium group-hover:underline underline-offset-1'>{data.title}</h2>
                                    <p className='text-lg  '>{data.desc}
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




export default Article;

