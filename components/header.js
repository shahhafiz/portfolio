import Head from 'next/head'
export default function Component() {
    return (
        <>
            <Head><title>Shah Al-Hafiz</title></Head>
            <div class="flex mx-5 sticky top-0">{/* container */}
                <div class="w-full mt-5 flex items-center">
                    {/* Now available */}
                    <div class="w-40 py-2 px-4 bg-blue-100 rounded-full flex justify-center items-center">
                        <span class="text-blue-400 hover:text-blue-500">Now available</span>
                    </div>
                    
                    {/* Hamburger */}
                    <div class="ml-auto md:hidden cursor-pointer">
                        <div class="h-1 w-8 mb-1 bg-gray-300 rounded"></div>
                        <div class="h-1 w-8 mb-1 bg-gray-300 rounded"></div>
                        <div class="h-1 w-8 mb-1 bg-gray-300 rounded"></div>
                    </div>
                    
                    {/* Navigation */}
                    <div class="hidden md:block ml-auto">
                        <ul class="flex justify-end">
                            <li class="ml-20">
                                <a class="text-gray-500 hover:text-blue-500" href="#">Home</a>
                            </li>
                            <li class="ml-20">
                                <a class="text-gray-500 hover:text-blue-500" href="#">About</a>
                            </li>
                            <li class="ml-20">
                                <a class="text-gray-500 hover:text-blue-500" href="#">Work</a>
                            </li>
                            <li class="ml-20">
                                <a class="text-gray-500 hover:text-blue-500" href="#">Contact</a>
                            </li>
                        </ul>
                </div>
                </div>
            </div>
        </>
    )
}