export const generalTranslations = (par) => {
  if (par.language === "en") {
    return {
      selectLanguage: "language",
      topRated: "Top Rated",
      popular: "Popular Movies",
      trailer: "Watch Trailer",
    };
  }
  if (par.language === "es") {
    return {
      selectLanguage: "Selecccione lenguaje",
      popular: "Películas Populares",
      topRated: "Mejor Puntuadas",
      trailer: "Ver Trailer",
    };
  }

  if (par.language === "fr") {
    return {
      selectLanguage: "Langue de sélection",
      topRated: "Les mieux notés",
      popular: "Populaire",
      trailer: "Voir la bande-annonce",
    };
  }

  if (par.language === "it") {
    return {
      selectLanguage: "Lingua di selezione",
      topRated: "Più votati",
      popular: "Popolare",
      trailer: "Guarda il trailer",
    };
  }
  if (par.language === "ru") {
    return {
      selectLanguage: "выберите язык",
      popular: "Популярные фильмы",
      topRated: "Лучший рейтинг",
      trailer: "Смотреть трейлер",
    };
  }
};

