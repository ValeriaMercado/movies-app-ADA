import { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { Context } from "../../context/Context";
import { useMediaQuery } from "react-responsive";

const MovieTrailer = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const api_key= import.meta.env.VITE_API_KEY
  const context = useContext(Context);
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieDetails}}/videos?api_key=${api_key}&language=${context.language}-US/`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results[0]);
        console.log(data);
      });
  }, [params.movieDetails]);

  const messages = {
    en: "No trailer was found for this movie or series",
    es: "No se encontró ningún tráiler para esta película o serie",
    fr: "Aucune bande-annonce n'a été trouvée pour ce film ou cette série",
    it: "Nessun trailer è stato trovato per questo film o questa serie",
    ru: "Для этого фильма или сериала не найдено трейлеров",
  };

  return (
    <Box pos={"absolute"}>
      {movie && movie.key ? (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${movie.key}`}
          playing={true}
          controls={true}
          width={isSmallScreen ? "90vw" : "90vh"}
        />
      ) : (
        <Text color={"white"} mt="150px">
          {messages[context.language]}
        </Text>
      )}
    </Box>
  );
};

export default MovieTrailer;
