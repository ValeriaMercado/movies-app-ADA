import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Box, Text, Card, Image,IconButton } from '@chakra-ui/react';
import { useFetch } from '../../hooks/useFetch';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useTranslate } from '../../hooks/useTranslate';
import { generalTranslations } from '../../translations/generalTranslations';

export const CategoryFilms = ({ searchCategory, serieOrMovie, categoryTitle}) => {
  const context = useContext(Context);
  const translations= useTranslate (generalTranslations(context))

  const { movies, isLoading } = useFetch(
    `https://api.themoviedb.org/3/${serieOrMovie}/${searchCategory}?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US&page=1`,
    context.language
  );

  const options = {
    type: 'slide',
    perPage: 5,
    perMove: 5,
    gap: '1rem',
    breakpoints: {
      1024: {
        perPage: 4,
        perMove: 4,
        gap: '0.5rem',
      },
      600: {
        perPage: 3,
        perMove: 3,
        gap: '0.5rem',
      },
      480: {
        perPage: 2,
        perMove: 2,
        gap: '0.5rem',
      },
    },
  };

  return (
    <Box width="90%" margin="0 auto" marginTop="50px">
     <Text display="flex" justifyContent="center" color="white" fontWeight="bold">{categoryTitle}</Text>
      <Splide options={options} style={{ width: '100%' }}>
        {movies?.map((movie) => (
          <SplideSlide key={movie.id} style={{ padding: 0, margin: 0 }}>
            <Card margin="10px" borderRadius="5%" boxShadow="10px 10px 30px 0px" transition="transform 0.3s ease-in-out" _hover={{ transform: 'scale(1.05)' }}>
              <Image
              borderRadius="5%"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <Link to={`/details/movie/${movie.id}`}>
                <IconButton icon={<FaPlay />} position="absolute" bottom="2" right="2" colorScheme="red" variant={"unstyled"} aria-label={translations.play} />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
};

