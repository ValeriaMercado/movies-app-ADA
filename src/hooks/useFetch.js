import { useEffect, useState } from "react"

export const useFetch = (url,dependence) => {

    const [movies , setMovies] = useState([])

    useEffect(()=>{
       fetch(url)
       .then(res=>res.json())
       .then(data=>setMovies(data.results))
    },[dependence])

    return movies


}
