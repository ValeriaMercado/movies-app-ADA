export const generalTranslations = (par) => {
  if (par.language === "en") {
    return {
      selectLanguage: "language",
      topRated: "Top Rated",
      popularMovies: "Popular Movies",
      popularSeries: "Popular Series",
      trailer: "Watch Trailer",
    };
  }
  if (par.language === "es") {
    return {
      selectLanguage: "Selecccione lenguaje",
      popularMovies: "Películas Populares",
      popularSeries: "Series Populares",
      topRated: "Mejor Puntuadas",
      trailer: "Ver Trailer",
    };
  }

  if (par.language === "fr") {
    return {
      selectLanguage: "Langue de sélection",
      topRated: "Les mieux notés",
      popularMovies: "Films Populaires",
      popularSeries: "Émissions Populaires",
      trailer: "Voir la bande-annonce",
    };
  }

  if (par.language === "it") {
    return {
      selectLanguage: "Lingua di selezione",
      topRated: "Più votati",
      popularMovies: "Film Popolari",
      popularSeries: "Spettacoli Popolari",
      trailer: "Guarda il trailer",
    };
  }
  if (par.language === "ru") {
    return {
      selectLanguage: "выберите язык",
      popularMovies: "популярные фильмы",
      popularSeries: "популярный сериал",
      topRated: "Лучший рейтинг",
      trailer: "Смотреть трейлер",
    };
  }
};
