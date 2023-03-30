export const navbarTranslations = (par) => {
  if (par.language === "en") {
    return {
      home: "Home",
      movies: "Movies",
      series: "Series",
      topRated: "Top Rated",
      upcoming: "Upcoming",
      popular: "Popular",
      latest: "Latest",
      top: "Top Series",
      search: "Search",
    };
  }

  if (par.language === "es") {
    return {
      home: "Inicio",
      movies: "Películas",
      series: "Series",
      topRated: "Mejor Puntuadas",
      upcoming: "Próximamente",
      popular: "Populares",
      latest: "Lo último",
      top: "Series Top",
      search: "Búsqueda",
    };
  }

  if (par.language === "pt") {
    return {
      home: "Começar",
      movies: "Filmes",
      series: "Series",
      topRated: "Melhor avaliado",
      upcoming: "Breve",
      popular: "Popular",
      latest: "O último",
      top: "Melhor série",
      search: "Procurar",
    };
  }

  if (par.language === "fr") {
    return {
      home: "Maison",
      search: "Chercher",
      movies: "Films",
      series: "Série",
      topRated: "Les mieux notés",
      upcoming: "Bientôt disponible",
      popular: "Populaire",
      latest: "Dernier",
      top: "Top Série",
    };
  }
  if (par.language === "it") {
    return {
      home: "Inizio",
      search: "Cercare",
      movies: "Films",
      series: "Serie",
      topRated: "Miglior voto",
      upcoming: "Imminente",
      popular: "Popolare",
      latest: "L'ultimo",
      top: "Massima serie",
    };
  }
  if (par.language === "ru") {
    return {
      home: "Начинать",
      movies: "Фильмы",
      series: "сериал",
      topRated: "Лучший рейтинг",
      upcoming: "Скоро",
      popular: "популярный",
      latest: "Последний",
      top: "Топ серии",
      search: "Ищет",
    };
  }
  if (par.language === "zh") {
    return {
      home: "開始",
      movies: "電影",
      series: "電視劇",
      topRated: "最高評價",
      upcoming: "很快",
      popular: "受歡迎的",
      latest: "最後",
      top: "頂級系列",
      search: "尋求",
    };
  }
};
