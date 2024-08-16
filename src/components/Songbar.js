import { useEffect } from "react"

export default function Songbar(props){
    const {song, style } = {...props}
    const {
        LANGUAGE,
        SONGNO,
        TITLE,
        SINGER,
        GENRE
    } = {...song}

    return (
        <div style={style}
            class="bg-white text-sm dark:text-gray-400 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex">
            
            <div scope="row" class="px-2 py-1 font-medium justify-center text-gray-900 dark:text-white w-1/5 flex items-center">
                {SONGNO}
            </div>
            <div class="px-5 py-4 w-4/5">
                <div class="text-base break-all font-semibold">{TITLE}</div>
                <div class="font-normal text-gray-500">{SINGER}</div>
                <div class="font-normal text-gray-500">{LANGUAGE}</div>
                <div class="font-normal text-gray-500">{GENRE ? "Builtin" : "USB"}</div>
            </div>
        </div>
    )
}