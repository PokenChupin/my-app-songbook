import Songbar from "./Songbar"

export default function Songtable(props){
    
    const {
        song_list,
        searched_songs,
        search
    } = {...props}

    return (
        <div class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <div>
                {
                    search ? (
                        searched_songs.map( (song) => 
                            <Songbar song={{...song}}/>
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