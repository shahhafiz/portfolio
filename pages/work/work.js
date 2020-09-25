export default function Component() {
    return (
        <div className={"w-full h-screen flex flex-col justify-center"}>
            <div className="grid grid-cols-4 gap-4 ">
                <div className="flex flex-col">
                    <div className="h-full bg-gray-200 shadow-lg rounded-lg z-10">
                        <div className="text-center text-gray-600 my-5">Shopum</div>
                        <div className="flex justify-center items-end bg-indigo-500 text-center text-white text-2xl py-24">
                            Shopum
                        </div>
                        <div className={"text-center text-gray-600 py-5"}>An e-commerce app  which specifically catered for the students of University of Malaya to sell their second  hand or preloved items</div>
                    </div>
                    <div className="bg-blue-500 h-10 text-center transform -translate-y-2 flex justify-center items-end rounded-lg shadow-lg">
                        #ionic #firebase
                    </div>    
                </div>
                <div className="flex flex-col">
                    <div className="h-full bg-gray-200 shadow-lg rounded-lg z-10">
                        <div className="text-center text-gray-600 my-5">Shopum Admin</div>
                        <div className="flex justify-center items-end bg-blue-500 text-white text-2xl py-24">
                            Shopum
                            <div className="text-sm transform -translate-y-1">Admin</div>
                        </div>
                        <div className="text-center text-gray-600 py-5">Admin portal to monitor the users’ behavior and to display informative statistics of ShopumAdmin portal to monitor the users’ behavior and to display informative statistics of Shopum</div>
                    </div>
                    <div className="bg-blue-500 h-10 text-center transform -translate-y-5 flex justify-center items-end z-0">
                        #ionic #firebase
                    </div>  
                </div>
                <div className="bg-gray-200 shadow-lg rounded-lg">
                    <div className="text-center text-gray-600 my-5">What The Food</div>
                    <div className="flex justify-center items-end bg-green-500 text-center text-white text-2xl py-24">
                        What The Food
                      </div>
                    <div className="text-center text-gray-600 py-5">Native Android mobile app that use image recognition to identify items in wet market using machine learning from Firebase</div>
                </div>
                <div className="bg-gray-200 shadow-lg rounded-lg">
                    <div className="text-center text-gray-600 my-5">shahhafiz.com</div>
                    <div className="flex justify-center items-end bg-teal-500 text-center text-white text-2xl py-24">
                        shahhafiz.com
                      </div>
                    <div className="text-center text-gray-600 py-5">An online web portfolio to showcase my experiences, competencies, and skill sets as well as to attract potential employer</div>
                </div>
            </div>
        </div>
    )
}