import { useEffect } from "react"

export const useFetch = (url) => {

    const getFetch = async ()=>{
        const resp = await fetch (url);
        const data = await resp.json()
    }

    useEffect(()=>{
        getFetch()

    }, [url])


    return {}
    
    
}
