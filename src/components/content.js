import SongTab from "./Songtab"
import Searchbar from "./Searchbar"
import Songtable from "./Songtable"
import INITIAL_SONGS from "./songlist"
import ScrollToTop from "./ScrollToTop"

import { useState, useEffect } from "react"


export default function Content() {
	const song_list = INITIAL_SONGS.sort((a,b) => a.SONGNO - b.SONGNO)
	const [songs, setSongs] = useState(song_list)
	const [filter, setFilter] = useState("TITLE")
	const [search, setSearch] = useState("")
	const [isVisible, setIsVisible] = useState(false)

	const handleScroll = () => {
		if (window.scrollY > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if(search !== ""){
			const result = song_list.reduce((acc, cur) => {
				const song = cur[filter].toString()
				if(song.startsWith(search)){
					acc[0] = [...acc[0], cur]
				}else if(song.includes(search)){
					acc[1] = [ ...acc[1], cur]
				}
				return acc
			},[[],[]])
			const searched_songs = result.flat()
			setSongs(searched_songs)
		} else {
			setSongs(song_list)
		}
	},[search, filter])

    return (
		<div class="container relative overflow-x-hidden shadow-md mx-auto max-w-md w-full scroll-smooth">
			<SongTab filter = {filter} setFilter = {setFilter}/>
			<Searchbar filter = {filter} search = {search} setSearch = {setSearch}/>		
			<Songtable songs = {[...songs]}/>
			{
				isVisible && <ScrollToTop/>
			}
		</div>
    );
  }