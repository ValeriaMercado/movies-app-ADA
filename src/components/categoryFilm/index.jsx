import { Box, Text} from '@chakra-ui/react'
import { useFetch } from '../../hooks/useFetch'
import { EachMovie } from '../eachMovie'
import { useContext } from "react"
import { Context } from "../../context/Context"

export const CategoryFilms = ({categoryTitle,searchCategory,serieOrMovie}) => {


    const context = useContext(Context)

    const {movies, isLoading} = useFetch(`https://api.themoviedb.org/3/${serieOrMovie}/${searchCategory}?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US&page=1`,context.language)


    return (
        <Box w='40%' h='300px' borderRadius='10px' overflow='scroll'  margin='25px' >
            <Box bg='brand.primary' h='60px'  display='flex' justifyContent='center' alignItems='cen
        '    color='white' w='100%'><Text as='b' fontSize='3xl'>{categoryTitle}</Text></Box>
            {movies?.map(movie=>{
                return(
                        <Box key={movie.id} bg='tomato' w='100%'>
                            <EachMovie  title={movie.title} img={movie.poster_path}/>
                        </Box>
                        )
        })}
        </Box>
        )
}
