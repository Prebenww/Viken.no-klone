import {SearchCircleIcon} from "@heroicons/react/solid";
import Search from "./Search";

const Searchbar = (props: { placeholder: string | undefined; }) => {
    return (
        <div className='transition ease-in-out delay-150 p-5 bg-[#E0F3F9] shadow-md '>
            <div className='  '>
                <Search placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default Searchbar;