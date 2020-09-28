export default function Component() {
    return (
        <div id="About" className="w-full h-screen flex flex-col justify-center">
            {/* <div className="font-bold text-xl " className="animate-bounce"> */}
            <span className="flex">
                <span className="animate-bounce w-6 h-6"> &#128075; </span>
                <span className="font-bold text-xl">Hello, I'm Shah</span>
            </span>

            {/* </div> */}
            <div className="font-normal text-gray-600 leading-10 tracking-wide text-lg md:text-2xl text-justify">
                a web developer who recently just graduated from University of Malaya with a degree in Computer Science. I have passion in web development as well  as (sometimes) in mobile app development.
                I love to explore, experiment and learn new things which allow me to catch up to the high-speed technologies evolutions.
                I’m looking forward opportunities that will allow me to enjoy working in a friendly and balanced environment.
            </div>
        </div>
    )
}