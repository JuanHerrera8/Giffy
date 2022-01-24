import React, {useRef} from "react"
import ListOfGifs from "components/ListOfGifs/ListOfGifs"
import Spinner from "components/Spinner"
import { useGifs } from "hooks/useGifs"
import useNearScreen from "hooks/useNearScreen"

export default function SearchResults({ params }) {
  const {keyword} = params
  const {loading, gifs, setPage} = useGifs({keyword})
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({externalRef: loading ? null : externalRef})
  
 // const handleNextPage = () => setPage(prevPage => prevPage + 1)
  return <>
    {loading
      ? <Spinner/>
      : <>
        <h3 className="App-title">
          {decodeURI(keyword)}
        </h3>
        <ListOfGifs gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </>
    }
  </> 
}