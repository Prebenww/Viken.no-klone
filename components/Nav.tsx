import {Input} from "postcss";
import {BeakerIcon, XIcon} from "@heroicons/react/solid";
import {SearchIcon} from "@heroicons/react/outline";
import {useAmp} from "next/amp";
import {useState} from "react";
import Searchbar from "./Searchbar";

const Nav = () => {

    const [showSearchBar, setShowSearchBar] = useState(true);

    const handleShowSearchBar = () => {
        if (!showSearchBar) {
            setShowSearchBar(true)
        } else {
            setShowSearchBar(false)
        }

    }

    return (
        <nav>
            {/*Top navbar*/}
            <div className='
            lg:flex justify-end items-center
             lg:pr-20 pr-10 h-10
             text-md text-white bg-[#003B5C]

             hidden

              '>
                <div className=' flex justify-end items-center gap-8 text-md '>
                    <div>For ansatte</div>
                    <div>Ledige stillinger</div>
                    <div>Kontakt oss</div>
                    <div>language/Språk</div>
                </div>
            </div>


            {/*Navbar*/}
            <div className=' flex justify-between  shadow-md h-full bg-[#FFFFFF]

             '>

                {/*Logo & 3 captions*/}
                <div className='flex justify-start pt-7 pb-4 pl-10 md:gap-12

                 '>
                    <img className='w-44' alt='viken-logo' src='https://viken.no/kunde/grafikk/logo-viken.svg'/>
                    <div className='flex text-2xl font-light text-[#003B5C] gap-8 invisible md:visible '>
                        <div>Våre tjenester</div>
                        <div>Politikk</div>
                        <div>Om oss</div>
                    </div>
                </div>

                {/*Searchbar*/}
                <div onClick={handleShowSearchBar}
                     className='flex justify-center items-center w-28 mr-10 hover:bg-[#E0F3F9] hover:cursor-pointer hover:border-b-[3px] hover:border-[#003B5C] transition '>
                    {showSearchBar ? <SearchIcon className="h-7 w-7 text-[#227AB5] "/> : <XIcon className=' h-5 w-5'/>}
                    <p className="text-[#003B5C] text-xl outline-none pl-2 border-none">Søk</p>
                </div>
            </div>
            {!showSearchBar && <Searchbar placeholder='Hva kan vi hjelpe deg med'/>}

        </nav>
    )
}

export default Nav; 