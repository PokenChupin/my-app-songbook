export default function SongTab(props) {

    const {
        filter,
        setFilter
    } = {...props}

    const handleClick = (name) => {
        setFilter(name)
    }

    const active = "text-gray-900 bg-gray-100   dark:border-gray-700 focus:outline-none dark:bg-gray-600 dark:text-white"
    const inactive = "bg-white dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"

    return (
        <div class="text-sm font-medium text-center text-gray-500 rounded-lg shadow dark:divide-gray-700 dark:text-gray-400 flex">
            <div class="w-1/2 focus-within:z-10" onClick={() => handleClick("TITLE")}>
                <a href="#" class={`inline-block w-full p-4 border-gray-200 border-r ${filter === "TITLE" ? active : inactive}`} aria-current="page">Title</a>
            </div>
            <div class="w-1/2 focus-within:z-10" onClick={() => handleClick("SINGER")}>
                <a href="#" class={`inline-block w-full p-4 border-gray-200 border-s-0 ${filter === "SINGER" ? active : inactive}`}>Artist</a>
            </div>
        </div>
    )
}