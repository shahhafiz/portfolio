export default function Component() {
    return (
        <div class="grid grid-rows-8 ">
            <div class="row-span-3 flex flex-row justify-center items-center">
                <img class="shadow-xl rounded-full w-48" src="employee.svg" />
            </div>
            <div class="row-span-5 flex flex-col justify-start items-center">
                <div class="text-2xl text-blue-500">Hi there, I'm</div>
                <div class="text-4xl font-semibold">&lt; Shah Al-Hafiz /&gt;</div>
                <div class="text-2xl text-gray-500">Full Stack Developer</div>
            </div>
        </div>
    )
}