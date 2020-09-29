export default function Component() {
    const works = [
        {
            title: "Shopum",
            description: "An e-commerce app  which specifically catered for the students of University of Malaya to sell their second  hand or preloved items",
            link: "https://github.com/shahhafiz/Shopum2",
            hashtags: "#ionic #firebase",
            visual: (
                <div className="flex justify-center items-end bg-indigo-500 text-center text-white text-2xl py-24" >
                    Shopum
                </div >
            )
        },
        {
            title: "What The Food",
            description: "Native Android mobile app that use image recognition to identify items in wet market using machine learning from Firebase",
            link: "https://github.com/shahhafiz/WhatTheFood",
            hashtags: "#android #firebase",
            visual: (
                <div className="flex justify-center items-end bg-green-500 text-center text-white text-2xl py-24">
                    What The Food
                </div>
            )
        },
        {
            title: "shahhafiz.com",
            description: "An online web portfolio to showcase my experiences, competencies, and skill sets as well as to attract potential employer",
            link: "https://github.com/shahhafiz/portfolio",
            hashtags: "#next.js #tailwindcss",
            visual: (
                <div className="flex justify-center items-end bg-teal-500 text-center text-white text-2xl py-24">
                    shahhafiz.com
                </div>
            )
        }
    ]


    return (
        <div id="Work" className={"w-full lg:h-screen flex flex-col justify-center"}>
            <div className="flex flex-wrap justify-center pt-20 lg:pt-10">
                {
                    works.map((work, key) => {
                        return (
                            <Card
                                key={key}
                                work={work}
                            /> 
                        )
                    })
                }
            </div>
        </div>
    )
}

// Card component
function Card(props) {
    const { work } = props
    
    return (
        <div className="max-w-xs flex flex-col m-2 cursor-default">
            <div className="h-full flex flex-col bg-gray-200 shadow rounded-lg z-10">
                <div className="text-center text-gray-600 my-5">{work.title}</div>
                {work.visual}
                <div className={"flex flex-col justify-between text-center text-gray-600 p-5 flex-grow"}>
                    <div>{work.description}</div>
                    <a href={work.link} target="_blank" className="relative top-5">
                        <span className="group cursor-pointer">
                            <img src="github.png" alt="" className="more w-5 m-2 inline-flex animate-wiggle" />
                            <span className="text-xs bg-white p-1 rounded border border-black border-opacity-25 group-hover:border-blue-400 group-hover:text-blue-400">Visit repo</span>
                        </span>
                    </a>
                </div>
            </div>
            <div className="bg-blue-100 text-gray-700 h-8 text-center transform -translate-y-1 flex justify-center items-end rounded-b-lg shadow-lg">
                {work.hashtags}
            </div>
            
        </div>
    )
}