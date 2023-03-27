import { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { Context } from "../../context/Context";
import { useMediaQuery } from "react-responsive";

const MovieTrailer = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const context = useContext(Context);
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const messages = {
    en: "No trailer was found for this movie or series",
    es: "No se encontró ningún tráiler para esta película o serie",
    fr: "Aucune bande-annonce n'a été trouvée pour ce film ou cette série",
    it: "Nessun trailer è stato trovato per questo film o questa serie",
    ru: "Для этого фильма или сериала не найдено трейлеров",
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${params.TVDetails}}/videos?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US/`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results[0]);
        console.log(data);
      });
  }, [params.movieDetails]);

  return (
    <Box pos={"absolute"}>
      {movie && movie.key ? (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${movie.key}`}
          playing={true}
          controls={true}
          width={isSmallScreen ? "100vw" : "100vh"}
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
