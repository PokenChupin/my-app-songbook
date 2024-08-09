import SongTab from "./Songtab"
import Searchbar from "./Searchbar"
import Songtable from "./Songtable"
import PaginateBar from "./Paginatebar"
import song_list from "./songlist"

import { useState, useEffect } from "react"


export default function Content() {

	const [songs, setSongs] = useState(song_list.sort((a,b) => a.SONGNO - b.SONGNO))
	const [filter, setFilter] = useState("TITLE")
	const [search, setSearch] = useState("")
	const [searched_songs, setSearchSongs] = useState([])

	useEffect(() => {
		const result = songs.filter(song => {
			return song[filter].toString().startsWith(search);
		})
		setSearchSongs(result)
	},[search, filter])

    return (
		<div class="container relative overflow-x-hidden shadow-md mx-auto max-w-md w-full">
			<SongTab filter = {filter} setFilter = {setFilter}/>
			<Searchbar filter = {filter} search = {search} setSearch = {setSearch}/>		
			<Songtable song_list = {[...songs]} search = {search} searched_songs = {searched_songs}/>
			{/* <PaginateBar/> */}
		</div>
    );
  }