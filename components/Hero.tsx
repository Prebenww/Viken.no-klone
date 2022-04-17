import Searchbar from "./Searchbar";
import Search from "./Search";
import HeroButton from "./HeroButton";


const Hero = (props: any) => {
    return (
        <div className='flex mt-10 justify-between'>

            {/*hero items*/}
            <div className='flex-col space-y-6 pl-20'>
                {/*Heading*/}
                <div>
                    <h1 className=' flex text-5xl'>Hva kan vi hjelpe deg med?</h1>
                </div>
                {/*Search*/}
                <div className='max-w-lg'>
                    <Search placeholder='Søk etter ord'/>
                </div>

                <div className='max-w-2xl'>
                    <HeroButton title={'Skoleferie og fridager'}/>
                    <HeroButton title={'Tilskudd og støtte'}/>
                    <HeroButton title={'Politisk møteplan'}/>
                    <HeroButton title={'Bærekraft'}/>
                    <HeroButton title={'TT-kort'}/>
                    <HeroButton title={'Privatist'}/>
                    <HeroButton title={'Oppdeling av Viken'}/>
                </div>

                {/*img container*/}
            </div>
            <img alt='hero-image' src='../hero-img.png' className=''/>
        </div>
    )
}

export default Hero;