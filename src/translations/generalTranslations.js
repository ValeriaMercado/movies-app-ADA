export const generalTranslations = (par) => {
  if (par.language === "en") {
    return {
      selectLanguage: "Select language",
      topRated: "Top Rated",
      popular: "Popular Movies",
      trailer: "Watch Trailer",
      more: "More"
    };
  }
  if (par.language === "es") {
    return {
      selectLanguage: "Seleccione lenguaje",
      popular: "Películas Populares",
      topRated: "Mejor Puntuadas",
      trailer: "Ver Trailer",
      more: "More"
    };
  }

  if (par.language === "fr") {
    return {
      selectLanguage: "Langue de sélection",
      topRated: "Les mieux notés",
      popular: "Populaire",
      trailer: "Voir la bande-annonce",
      more:"Plus"
    };
  }

  if (par.language === "it") {
    return {
      selectLanguage: "Lingua di selezione",
      topRated: "Più votati",
      popular: "Popolare",
      trailer: "Guarda il trailer",
      more:"Di più"
    };
  }
  if (par.language === "ru") {
    return {
      selectLanguage: "выберите язык",
      popular: "Популярные фильмы",
      topRated: "Лучший рейтинг",
      trailer: "Смотреть трейлер",
      more:"дальше"
    };
  }
  if (par.language === "zh") {
    return {
      selectLanguage: "語言",
      topRated: "最高評價",
      popular: "熱門電影",
      trailer: "觀看預告",
      more: "更遠"
    };
  }
};

