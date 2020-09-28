import { useEffect } from "react"
import Head from 'next/head'
export default function Header() {

    const menuList = ["Home", "About", "Work", "Contact"]


    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll())
        window.addEventListener('resize', () => handleResize())

        document.querySelector("#hamburger").addEventListener("click", () => toggleSideMenu())
        document.querySelector("#closeSideMenu").addEventListener("click", () => toggleSideMenu())

        const menus = document.querySelectorAll(".menu")
        menus.forEach(menu => {
            menu.addEventListener("click", () => handleNavigate(menu.innerHTML))
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
        if (window.innerWidth > 767) {
            sideMenu.classList.remove("block")
            sideMenu.classList.add("hidden")
            document.querySelector('body').classList.remove('overflow-hidden')
        }
    }

    function handleScroll() {
        const scrollY = window.scrollY
        if (scrollY < 50) {
            document.querySelector("#navbar").classList.remove("shadow-sm")
        } else if (scrollY > 50) {
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
                    <div className="w-42 py-2 px-4 bg-blue-100 rounded-full flex justify-center items-center">
                        <span className="text-blue-700 hover:text-blue-400">Now available</span>
                        <span class="ml-1 flex h-3 w-3">
                            <span class="animate-ping absolute h-3 w-3 rounded-full bg-yellow-400 opacity-75"></span>
                            <span class="rounded-full h-3 w-3 bg-yellow-400"></span>
                        </span>
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
                            {
                                menuList.map(menu => {
                                    return (
                                        <li className="menu cursor-pointer ml-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:text-blue-400">{menu}</li>
                                    )
                                })
                            }
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
                        {
                            menuList.map(menu => {
                                return (
                                <li className="menu cursor-pointer hover:text-blue-500 my-5">{menu}</li>)
                            })
                        }
                    </ul>
                </div>

            </div>
        </>
    )
}