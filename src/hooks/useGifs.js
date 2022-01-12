import { useContext, useEffect, useState } from "react"
import GifsContext from "../context/GifsContext"
import getGifs from "../services/getGifs"

export function useGifs({keyword} = { keyword: null }){
    const [loading, setLoading] = useState(false)
    const {gifs,setGifs} = useContext(GifsContext)
    
      useEffect(function () {
        setLoading(true)
        // recuperamos la keyword del localStorage
        const keyworToUse = keyword || localStorage.getItem('lasKeyword') || 'random'

          getGifs({ keyword: keyworToUse })
          .then(gifs => {
            setGifs(gifs) 
            setLoading(false)
            //guardamos la keyword en el localStorage
            localStorage.setItem('lasKeyword', keyword)
          })
      }, [keyword, setGifs])
      
      return {loading, gifs}
}