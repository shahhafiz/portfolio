export default function Card(props) {
    return (
        <div className="flex flex-col">
            <div className="h-full bg-gray-200 shadow-lg rounded-lg z-10">
                <div className="text-center text-gray-600 my-5">{props.title}</div>
                {props.children}
                <div className={"text-center text-gray-600 p-5"}>{props.description}</div>
            </div>
            <div className="bg-blue-100 text-gray-700 h-8 text-center transform -translate-y-1 flex justify-center items-end rounded-lg shadow-lg">
                {props.hashtags}
            </div>
        </div>
    )
}