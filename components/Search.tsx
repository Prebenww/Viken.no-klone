import {SearchCircleIcon} from "@heroicons/react/solid";

const Search = (props: { placeholder: string | undefined; }) => {
    return (
        <div className='flex flex-row p-5 transition '>
            <label className='flex border-solid border rounded-full border-[#5999C6] focus-within:ring-1 ring-[#227AB5]  p-3 w-full bg-white text-xl   '>
                <input className=' ml-4 outline-none form-input w-full h-full' placeholder={props.placeholder}/>
                <SearchCircleIcon  className='-rotate-90 h-10 w-10 text-[#227AB5]'/>
            </label>
        </div>
    )
}

export default Search;