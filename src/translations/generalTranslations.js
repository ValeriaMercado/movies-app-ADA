
export const generalTranslations = (par) =>{
   
    if (par.language === 'en'){ return{
    selectLanguage: "Select Language",
    topRated: "Top Rated",
    popular: "Popular Movies",
}}

if (par.language === 'es'){
   return {
    selectLanguage: "Selecccione lenguaje",
    popular: "Películas Populares",
    topRated: "Mejor Puntuadas",
    
    }
}

if (par.language === 'fr'){
  return{
    selectLanguage: "Langue de sélection",
    topRated: "Les mieux notés",
    popular: "Populaire",
    }
}
}
