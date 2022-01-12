import { useEffect, useState } from "react"
import getGifs from "../services/getGifs"

export function useGifs({keyword} = { keyword: null }){
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])
    
      useEffect(function () {
        setLoading(true)
        // recuperamos la keyword del localStorage
        const keyworToUse = keyword || localStorage.getItem('lasKeyword')

          getGifs({ keyword: keyworToUse })
          .then(gifs => {
            setGifs(gifs) 
            setLoading(false)
            //guardamos la keyword en el localStorage
            localStorage.setItem('lasKeyword', keyword)
          })
      }, [keyword])
      
      return {loading, gifs}
}