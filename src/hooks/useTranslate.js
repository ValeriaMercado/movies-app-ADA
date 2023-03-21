
import { Context } from "../context/Context"
import { useContext,useEffect,useState } from "react"


export const useTranslate = (transFolder) => {

    const context = useContext(Context)
    const [translations, setTranslations] = useState({})

    useEffect(()=>{
        setTranslations(transFolder)
      },[context.language])


  
    return (
    translations
    )
}

