import {XIcon} from "@heroicons/react/solid";
import {BookOpenIcon} from "@heroicons/react/outline";

const Article = (props: { data: { title: any } }) => {
    console.log(props)


    return (
        <div className='flex flex-row gap-6 '>
            {/*Icon*/}
            <div>
                <BookOpenIcon className=' h-5 w-5'/>
            </div>

            {/*Title ans description*/}
            <div>
                <h2 className='text-2xl font-medium'>Skole og Opplæring</h2>
                <p className='text-lg'>Skoler, inntak, eksamen, elev-PC, skolerute, lærling, fagbrev, lærebedrift, voksenopplæring, ombud
                </p>
            </div>
        </div>
    )
}


// This gets called on every request


export default Article;

