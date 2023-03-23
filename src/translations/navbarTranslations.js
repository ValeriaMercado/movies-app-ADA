
export const navbarTranslations = (par) =>{
   
        if (par.language === 'en'){ return{
        home: "Home",
        search: "Search",
        movies: "Movies",
        series: "Series",
        topRated: "Top Rated",
        upcomimg: "Upcoming",
        popular: "Popular",
        latest: "Latest",
        top: "Top Series",
        search: "Search"
    }}

    if (par.language === 'es'){
       return {
            home: "Inicio",
            search: "Busqueda",
            movies: "Películas",
            series: "Series",
            topRated: "Mejor Puntuadas",
            upcomimg: "Próximamente",
            popular: "Populares",
            latest: "Lo último",
            top: "Series Top",
            search: "Busca"
        }
    }

    if (par.language === 'fr'){
      return{
            home: "Maison",
            search: "Chercher",
            movies: "Films",
            series: "Série",
            topRated: "Les mieux notés",
            upcomimg: "Bientôt disponible",
            popular: "Populaire",
            latest: "Dernier",
            top: "Top Série",
            search:"recherche"
        }
    }
}

