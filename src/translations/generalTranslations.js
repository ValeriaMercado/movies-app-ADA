
export const generalTranslations = (par) =>{
   
    if (par.language === 'en'){ return{
    selectLanguage: "Select Language",
    topRated: "Top Rated Series",
    popular: "Popular Movies",
    trailer: "Watch Trailer",
    play: "Play"
}}

if (par.language === 'es'){
   return {
    selectLanguage: "Selecccione lenguaje",
    popular: "Películas Populares",
    topRated: " Series Mejor Puntuadas",
    trailer: "Ver Trailer",
    play: "Reproducir"
    
    }
}

if (par.language === 'fr'){
  return{
    selectLanguage: "Langue de sélection",
    topRated: "la série la mieux notée",
    popular: "Populaire",
    trailer: "Voir la bande-annonce",
    reproducir:"Jouer"
    }
}

if (par.language === 'it'){
  return{
    selectLanguage: "Lingua di selezione",
    topRated: "la serie più votata",
    popular: "Popolare",
    trailer: "Guarda il trailer",
    play:"Giocare"
    }
}
if (par.language === 'ru'){
  return {
    selectLanguage: "выберите язык",
    popular: "Популярные фильмы",
    topRated: "сериал с лучшим рейтингом",
    trailer: "Смотреть трейлер",
    play: "играть"
   }
}

}
