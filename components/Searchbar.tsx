import {SearchCircleIcon} from "@heroicons/react/solid";
import Search from "./Search";

const Searchbar = (props: { placeholder: string | undefined; }) => {
    return (
        <div className='transition ease-in-out delay-150  '>
            <div className='bg-[#E0F3F9] shadow-md  '>
                <Search placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default Searchbar;