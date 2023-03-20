import { useContext, useState } from "react";
import { Context } from "../context/Context";

export const navbarTranslations = () =>{
    const context = useContext(Context);
    const [lang, setlang] = useState({
        home: "Home",
        search: "Search",
        movies: "Movies",
        series: "Series",
        topRated: "Top Rated",
        upcomimg: "Upcoming",
        popular: "Popular",
        latest: "Latest"
    })

    if (context.language === 'es'){
        setlang({
            home: "Inicio",
            search: "Busqueda",
            movies: "Películas",
            series: "Series",
            topRated: "Mejor Puntuadas",
            upcomimg: "Próximamente",
            popular: "Populares",
            latest: "Lo último"
        })
    }

    if (context.language === 'fr'){
        setlang({
            home: "Maison",
            search: "Chercher",
            movies: "Films",
            series: "Série",
            topRated: "Les mieux notés",
            upcomimg: "Bientôt disponible",
            popular: "Populaire",
            latest: "Dernier"
        })
    }
    return lang
}

//este codigo me genera un bucle infinito