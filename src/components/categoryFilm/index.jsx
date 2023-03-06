import { Box, Text} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { EachMovie } from '../eachMovie'

export const CategoryFilms = ({categoryTitle,cat}) => {
    const [movies, setMovies] = useState([])

    //controlar que este fetch me trae solo la pag 1 y solo en lenguaje ingles.
   

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${cat}?api_key=ae186e957330197b5106a6c66c8bd1df&language=en-US&page=1`)
            .then(res=>res.json())
            .then(data=>setMovies(data.results))
    },[])

    return (
        <Box w='30%' h='300px' borderRadius='10px' overflow='scroll'  margin='25px' >
            <Box bg='brand.primary' h='60px'  display='flex' justifyContent='center' alignItems='cen
        '    color='white' w='100%'><Text as='b' fontSize='3xl'>{categoryTitle}</Text></Box>
            {movies.map(movie=>{
                return(
                        <Box key={movie.id} bg='tomato' w='100%'>
                            <EachMovie  title={movie.title} img={movie.poster_path}/>
                        </Box>
                        )
        })}
        </Box>
        )
}
