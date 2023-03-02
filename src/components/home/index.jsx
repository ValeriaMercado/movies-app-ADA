import { useContext, useEffect } from "react"
import { Context } from "../../context/Context"
import {Box } from "@chakra-ui/react"
import { CategoryFilms } from "../categoryFilm"

export const Home = () => {
const context = useContext(Context)

// useEffect(()=>{
//     fetch(`https://api.themoviedb.org/3/movie/76341?api_key=ae186e957330197b5106a6c66c8bd1df&language=${languaje}`)
// }, [])

return (
    <Box
        as='section'
        display='flex'
        justifyContent='center'
        alignItems='center'
        bg={context.clearTheme ? 'brand.secondary' : 'brand.accent'}
        width='100%'
        height='100vh'
    >
        <CategoryFilms categoryTitle='Popular Movies' cat='popular'/>
        <CategoryFilms categoryTitle='Top Rated' cat='top_rated'/>
    </Box>
)
}
