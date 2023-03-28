export const generalTranslations = (par) => {
  if (par.language === "en") {
    return {
      selectLanguage: "Select language",
      topRated: "Top Rated",
      popularMovies: "Popular Movies",
      popularSeries: "Popular Series",
      trailer: "Watch Trailer",
      more: "More",
      onAir: "Currently on the air",
      latest:"The most newly created TV show",
      now: "Movies in theatres"
    };
  }
  if (par.language === "es") {
    return {
      selectLanguage: "Selecccione lenguaje",
      popularMovies: "Películas Populares",
      popularSeries: "Series Populares",
      topRated: "Mejor Puntuadas",
      trailer: "Ver Trailer",
      more: "More",
      onAir: "Actualmente al aire",
      latest: "Lo último en programas télevisivos",
      now:"Péliculas en cines"
    };
  }

  if (par.language === "fr") {
    return {
      selectLanguage: "Langue de sélection",
      topRated: "Les mieux notés",
      popularMovies: "Films Populaires",
      popularSeries: "Émissions Populaires",
      trailer: "Voir la bande-annonce",
      more:"Plus",
      onAir:"Actuellement à l'antenne",
      latest:"l'émission télévisée la plus récente.",
      now:"Péliculas en cinés"
    };
  }

  if (par.language === "it") {
    return {
      selectLanguage: "Lingua di selezione",
      topRated: "Più votati",
      popularMovies: "Film Popolari",
      popularSeries: "Spettacoli Popolari",
      trailer: "Guarda il trailer",
      more:"Di più",
      onAir:"Attualmente in onda",
      latest:"Il programma televisivo più recente.",
      now:"Péliculas en cines"
    };
  }
  if (par.language === "ru") {
    return {
      selectLanguage: "выберите язык",
      popularMovies: "популярные фильмы",
      popularSeries: "популярный сериал",
      topRated: "Лучший рейтинг",
      trailer: "Смотреть трейлер",
      more:"дальше",
      onAir:"сейчас в эфире",
      latest:"самое недавно созданное телешоу.",
      now:"Пеликулас в кино"
    };
  }
  if (par.language === "zh") {
    return {
      selectLanguage: "語言",
      topRated: "最高評價",
      popular: "熱門電影",
      trailer: "觀看預告",
      more: "更遠",
      onAir:"目前正在播出",
      latest: "最新制作的电视节目。",
      now:"電影院裡的電影"
    };
  }
};
