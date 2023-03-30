import { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { Context } from "../../context/Context";
import { useMediaQuery } from "react-responsive";
import { generalTranslations } from "../../translations/generalTranslations";
import { useTranslate } from "../../hooks/useTranslate"

const MovieTrailer = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const context = useContext(Context);
  const api_key= import.meta.env.VITE_API_KEY
  const translations = useTranslate(generalTranslations(context))


  const isSmallScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });

  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${params.TVDetails}}/videos?api_key=${api_key}&language=${context.language}-US/`
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
          {translations.NoTrailer}
        </Text>
      )}
    </Box>
  );
};

export default MovieTrailer;
