import { useContext, useEffect, useState } from "react"
import GifsContext from "../context/GifsContext"
import getGifs from "../services/getGifs"

const INICIAL_PAGE = 0

export function useGifs({keyword} = { keyword: null }){
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const [page, setPage] = useState(INICIAL_PAGE);
    const {gifs,setGifs} = useContext(GifsContext)
    
      // recuperamos la keyword del localStorage
      const keyworToUse = keyword || localStorage.getItem('lasKeyword') || 'random'

      useEffect(function () {
        setLoading(true)

          getGifs({ keyword: keyworToUse })
          .then(gifs => {
            setGifs(gifs) 
            setLoading(false)
            //guardamos la keyword en el localStorage
            localStorage.setItem('lasKeyword', keyword)
          })
      }, [keyword, keyworToUse, setGifs])

      useEffect(function () { 
        if (page === INICIAL_PAGE) return

        setLoadingNextPage(true)

        getGifs({ keyword: keyworToUse, page })
        .then(nextGifs => {
          setGifs(prevGifs => prevGifs.concat(nextGifs))
          setLoadingNextPage(false)
        })
      }, [keyworToUse, page, setGifs])
      
      return {loading, loadingNextPage, gifs, setPage}
}