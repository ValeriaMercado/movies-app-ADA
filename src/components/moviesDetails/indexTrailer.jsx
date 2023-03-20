import { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { Context } from "../../context/Context";

const MovieTrailer = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const context = useContext(Context);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieDetails}}/videos?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US/`
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
          width="100vh"
        />
      ) : (
        <Text color={"white"} mt="150px">
          {context.language === "en"
            ? "No trailer was found for this movie or series"
            : "No se encontró ningún tráiler para esta película o serie"}
        </Text>
      )}
    </Box>
  );
};

export default MovieTrailer;
