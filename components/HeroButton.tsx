const HeroButton = (props: { title: string | undefined }) => {
    return (
        <button className=' bg-[#227AB5] hover:bg-blue-700 text-white py-2 px-4 rounded-full mr-2 mb-3 '>
            {props.title}
        </button>
    )
}


export default HeroButton