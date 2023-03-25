import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Box, Text, Card, Image, Button } from "@chakra-ui/react";
import { useFetch } from "../../hooks/useFetch";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CategoryFilms = ({
  searchCategory,
  serieOrMovie,
  categoryTitle,
}) => {

  const context = useContext(Context);
  const translations= useTranslate (generalTranslations(context))

  const { movies, isLoading } = useFetch(
    `https://api.themoviedb.org/3/${serieOrMovie}/${searchCategory}?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US&page=1`,
    context.language
  );

  const options = {
    type: "slide",
    perPage: 5,
    perMove: 5,
    gap: "1rem",
    breakpoints: {
      1024: {
        perPage: 4,
        perMove: 4,
        gap: "0.5rem",
      },
      600: {
        perPage: 3,
        perMove: 3,
        gap: "0.5rem",
      },
      480: {
        perPage: 2,
        perMove: 2,
        gap: "0.5rem",
      },
    },
  };

  return (
    <Box width="90%" margin="0 auto" marginTop="50px">
      <Text
        display="flex"
        justifyContent="center"
        fontWeight="bold"
        color={context.clearTheme ? "black" : "white"}
      >
        {categoryTitle}
      </Text>
      <Splide
        options={options}
        style={{ width: "100%", paddingRight: 10, margin: 0 }}
      >
        {movies?.map((movie) => (
          <SplideSlide
            key={movie.id}
            style={{ padding: 0, marginRight: 4, margin: 0 }}
          >
            <Card
              backgroundImage={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              backgroundPosition="center"
              backgroundSize="cover"
              height="300px"
              w={"90%"}
              display="flex"
              m={4}
              ml={4}
              className="card-background"
            >
              <Link to={`/details/movie/${movie.id}`}>
                <Button
                  variant={"unstyled"}
                  fontSize={"35px"}
                  ml={"140px"}
                  mt={"250px"}
                  position="relative"
                  className="btn-card"
                >
                  <BsFillPlayCircleFill />
                </Button>
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
};
