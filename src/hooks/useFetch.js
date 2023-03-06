import { useEffect, useState } from "react"

export const useFetch = (url,dependence) => {

    const [movies , setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
       setIsLoading(true)
       fetch(url)
       .then(res=>res.json())
       .then(data=>{
            setMovies(data.results)
            setIsLoading(false)
        })
    },[dependence])

    return [
        movies , isLoading
    ]


}
