import React, {useCallback, useEffect, useRef} from "react"
import ListOfGifs from "components/ListOfGifs/ListOfGifs"
import Spinner from "components/Spinner"
import { useGifs } from "hooks/useGifs"
import useNearScreen from "hooks/useNearScreen"
import debounce from "just-debounce-it"
import { Helmet } from "react-helmet"
import SearchForm from "components/SearchForm"

export default function SearchResults ({ params }) {
  const { keyword, rating, lang } = params
  const { loading, gifs, setPage } = useGifs({ keyword, rating, lang })
  
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const title = gifs ? `${gifs.length} resultados de ${decodeURI(keyword)}` : ''

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(prevPage => prevPage + 1), 200
  ), [setPage])

  useEffect(function () {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return <>
    {loading
      ? <Spinner/>
      : <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      <header>
      <SearchForm initialKeyword={keyword} initialRating={rating} initialLang={lang}/>
      </header>
        <h3 className="App-title">
          {decodeURI(keyword)}
        </h3>
        <ListOfGifs gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </>
    }
  </> 
}