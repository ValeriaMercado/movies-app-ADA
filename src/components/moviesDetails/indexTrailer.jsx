import { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { Context } from "../../context/Context";
import { useMediaQuery } from "react-responsive";
import { useTranslate } from "../../hooks/useTranslate";
import { generalTranslations } from "../../translations/generalTranslations";

const MovieTrailer = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const api_key= import.meta.env.VITE_API_KEY
  const context = useContext(Context);
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const translations = useTranslate(generalTranslations(context))

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
          {translations.noTrailer}
        </Text>
      )}
    </Box>
  );
};

export default MovieTrailer;
