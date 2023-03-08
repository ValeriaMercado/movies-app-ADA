import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const MovieTrailer = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieDetails}}/videos?api_key=ae186e957330197b5106a6c66c8bd1df&/`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results[0]);
        console.log(data);
      });
  }, [params.movieDetails]);

  return (
    <Box pos={"absolute"}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${movie.key}`}
        playing={true}
        controls={true}
        width="100vh"
      />
    </Box>
  );
};

export default MovieTrailer;
