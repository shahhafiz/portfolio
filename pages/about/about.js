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
                a web developer who recently just graduated from University of Malaya with a degree in Computer Science major in Software Engineering. I love to do
                web development, explore, learn and experiment with new libraries and stacks. Have extreme love to coffee and currently
                looking forward for opportunities that will allow me to enjoy working in a friendly and balanced environment.
            </div>
        </div>
    )
}