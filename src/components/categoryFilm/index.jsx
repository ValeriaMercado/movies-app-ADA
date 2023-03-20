
import { Box,Text,} from '@chakra-ui/react'
import { useFetch } from '../../hooks/useFetch'
import { useContext } from "react"
import { Context } from "../../context/Context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MoviesCards } from '../moviesCard';

export const CategoryFilms = ({categoryTitle,searchCategory,serieOrMovie}) => {


    const context = useContext(Context)

    const {movies, isLoading} = useFetch(`https://api.themoviedb.org/3/${serieOrMovie}/${searchCategory}?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US&page=1`,context.language)


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        rows:1,

        responsive: [
            {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
            }
        ]
        };

        return (
        <Box width="70%" margin="0 auto" marginTop="50 px">
            <Text>{categoryTitle}</Text>
            <Slider {...settings}>
            {movies?.map((movie) => {
            (
                <MoviesCards
                    searchCategory={searchCategory}
                    key={movie.id}
                    alt={movie.title}
                    movieTitle={movie.title}
                    movieDetails={movie.overview}
                    img={movie.poster_path}
                    id={movie.id}
                />
        );
        })}
            </Slider>
        </Box>
            )
}



