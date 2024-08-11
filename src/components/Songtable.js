import Songbar from "./Songbar"

export default function Songtable(props){
    
    const {
        song_list,
        searched_songs,
        search,
        filter
    } = {...props}

    return (
        <div class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <div>
                {
                    search ? (
                        searched_songs.length ?
                        searched_songs.map( (song) => 
                            <Songbar song={{...song}} search = {search} filter = {filter}/>
                        ) :
                        (
                            <div
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex">
                                <div class="px-5 py-4 w-4/5">
                                    <div class="font-normal text-gray-500 mx-auto">No Song Found</div>
                                </div>
                            </div>
                        )
                    ) : (
                        song_list.map( (song) => 
                            <Songbar song={{...song}}/>
                        ) 
                    )                    
                }			
            </div>
        </div>
    )
}