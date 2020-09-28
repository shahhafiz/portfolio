import { useEffect } from "react"
import Head from 'next/head'
export default function Header() {
    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll())
        window.addEventListener('resize', () => handleResize())
        
        document.querySelector("#hamburger").addEventListener("click", () => toggleSideMenu())
        document.querySelector("#closeSideMenu").addEventListener("click", () => toggleSideMenu())
        
        const menus = document.querySelectorAll(".menu")
        menus.forEach(menu => {
            menu.addEventListener("click",() => handleNavigate(menu.innerHTML))
        })
    }, [])

    function toggleSideMenu() {
        const sideMenu = document.querySelector("#sideMenu")
        const hamburger = document.querySelector("#hamburger")
        
        sideMenu.classList.toggle("hidden")
        sideMenu.classList.toggle("block")
        
        hamburger.classList.toggle("hidden")
        
        document.querySelector('body').classList.toggle('overflow-hidden')
    }
    
    function handleResize() {
        const sideMenu = document.querySelector("#sideMenu")
        if(window.innerWidth > 767){
            sideMenu.classList.remove("block")
            sideMenu.classList.add("hidden")
            document.querySelector('body').classList.remove('overflow-hidden')
        }
    }

    function handleScroll() {
        const scrollY = window.scrollY
        if (scrollY < 50){
            document.querySelector("#navbar").classList.remove("shadow-sm")
        } else if (scrollY > 50 ){
            document.querySelector("#navbar").classList.add("shadow-sm")
        }
    }
    
    function handleNavigate(section) { 
        console.log(section)
        var elem = document.getElementById(section); 
        elem.scrollIntoView(); 
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
                    <div id="hamburger" className="ml-auto md:hidden cursor-pointer">
                        <div className="h-1 w-8 mb-1 bg-gray-300 rounded"></div>
                        <div className="h-1 w-8 mb-1 bg-gray-300 rounded"></div>
                        <div className="h-1 w-8 mb-1 bg-gray-300 rounded"></div>
                    </div>

                    {/* Navigation */}
                    <div className="hidden md:block ml-auto">
                        <ul className="flex justify-end">
                            <li className="menu cursor-pointer ml-20">Home</li>
                            <li className="menu cursor-pointer ml-20">About</li>
                            <li className="menu cursor-pointer ml-20">Work</li>
                            <li className="menu cursor-pointer ml-20">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Side menu */}
            <div id="sideMenu" className="bg-black bg-opacity-75 h-screen w-screen fixed hidden z-40">
                <div className="w-64 fixed z-40 inset-y-0 right-0">
                    <div className="flex justify-end m-6">
                        <img id="closeSideMenu" src="close.svg" alt="" className="w-5 cursor-pointer" />
                    </div>
                    <ul className="flex flex-col items-center text-white">
                        <li className="menu cursor-pointer hover:text-blue-500 my-5">Home</li>
                        <li className="menu cursor-pointer hover:text-blue-500 my-5">About</li>
                        <li className="menu cursor-pointer hover:text-blue-500 my-5">Work</li>
                        <li className="menu cursor-pointer hover:text-blue-500 my-5">Contact</li>
                    </ul>
                </div>

            </div>
        </>
    )
}