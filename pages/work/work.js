import Card from '../../components/card'
export default function Component() {

    const works = [
        {
            title: "Shopum",
            description: "An e-commerce app  which specifically catered for the students of University of Malaya to sell their second  hand or preloved items",
            hashtags: "#ionic #firebase",
            visual: (
                <div className="flex justify-center items-end bg-indigo-500 text-center text-white text-2xl py-24" >
                    Shopum
                </div >
            )
        },
        {
            title: "Shopum Admin",
            description: "Admin portal to monitor the users’ behavior and to display informative statistics of ShopumAdmin portal to monitor the users’ behavior and to display informative statistics of Shopum",
            hashtags: "#ionic #firebase",
            visual: (
                <div className="flex justify-center items-end bg-blue-500 text-white text-2xl py-24">
                    Shopum
                    <div className="text-sm transform -translate-y-1">Admin</div>
                </div>
            )
        },
        {
            title: "What The Food",
            description: "Native Android mobile app that use image recognition to identify items in wet market using machine learning from Firebase",
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
                {
                    works.map((work,key) => {
                        return (
                            <Card
                                key={key}
                                title={work.title}
                                description={work.description}
                                hashtags={work.hashtags}
                            >
                                {work.visual}
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}