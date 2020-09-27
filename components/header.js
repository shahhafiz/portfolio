import { useEffect } from "react"
import Head from 'next/head'
export default function Header() {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

    }, [])

    function handleScroll() {
        const scrollY = window.scrollY
        console.log(scrollY)
        if (scrollY < 50){
            document.querySelector("#navbar").classList.remove("shadow-sm")
           
        } else if (scrollY > 50 ){
            document.querySelector("#navbar").classList.add("shadow-sm")
           
        }
    }

    return (
        <>
            <Head><title>Shah Al-Hafiz</title></Head>
            <div id="navbar" className="flex w-full px-5 fixed bg-white z-40">
                <div className="w-full my-5 flex items-center">
                    {/* Now available */}
                    <div className="w-40 py-2 px-4 bg-blue-100 rounded-full flex justify-center items-center">
                        <span className="text-blue-400 hover:text-blue-500">Now available</span>
                    </div>

                    {/* Hamburger */}
                    <div className="ml-auto md:hidden cursor-pointer">
                        <div className="h-1 w-8 mb-1 bg-gray-300 rounded"></div>
                        <div className="h-1 w-8 mb-1 bg-gray-300 rounded"></div>
                        <div className="h-1 w-8 mb-1 bg-gray-300 rounded"></div>
                    </div>

                    {/* Navigation */}
                    <div className="hidden md:block ml-auto">
                        <ul className="flex justify-end">
                            <li className="ml-20">
                                <a className="text-gray-500 hover:text-blue-500" href="#">Home</a>
                            </li>
                            <li className="ml-20">
                                <a className="text-gray-500 hover:text-blue-500" href="#">About</a>
                            </li>
                            <li className="ml-20">
                                <a className="text-gray-500 hover:text-blue-500" href="#">Work</a>
                            </li>
                            <li className="ml-20">
                                <a className="text-gray-500 hover:text-blue-500" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}