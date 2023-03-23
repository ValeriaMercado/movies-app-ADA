import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Box, Text, Card, Image } from '@chakra-ui/react';
import { useFetch } from '../../hooks/useFetch';
import { useContext } from 'react';
import { Context } from '../../context/Context';



export const CategoryFilms = ({ searchCategory, serieOrMovie, categoryTitle}) => {
  const context = useContext(Context);

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
        perPage: 2,
        perMove: 2,
        gap: '0.5rem',
      },
      600: {
        perPage: 1,
        perMove: 1,
        gap: '0.5rem',
      },
      480: {
        perPage: 1,
        perMove: 1,
        gap: '0.5rem',
      },
    },
  };

  return (
    <Box width={{ base: '50%', md: '60%', lg: '70%' }} margin="0 auto" marginTop="50px">
     <Text display="flex" justifyContent="center" color="white" fontWeight="bold">{categoryTitle}</Text>
      <Splide options={options} style={{ width: '100%' }}>
        {movies?.map((movie) => (
          <SplideSlide key={movie.id} style={{ padding: 0, margin: 0 }}>
            <Card margin="10px">
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
};

