
import { Context } from "../context/Context"
import { useContext,useEffect,useState } from "react"


export const useTranslate = (translationsFolder) => {

    const context = useContext(Context)
    const [translations, setTranslations] = useState({})

    useEffect(()=>{
        setTranslations(translationsFolder)
    },[context.language])

    return (
    translations
    )
}

