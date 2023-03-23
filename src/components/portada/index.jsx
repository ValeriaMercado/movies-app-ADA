import { useFetch } from "../../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { Card, Image,Text,Box,Button } from "@chakra-ui/react";
import { generalTranslations } from "../../translations/generalTranslations";
import { useTranslate } from "../../hooks/useTranslate";
import { Spinner } from "@chakra-ui/react";



export const Portada = () => {
const context = useContext(Context);
const translations = useTranslate(generalTranslations(context))

const [randomMovie, setRandomMovie] = useState(null);

  const { movies, isLoading } = useFetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US&page=1`,
    context.language
  );
  useEffect(() => {
    if (movies) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setRandomMovie(movies[randomIndex]);
    }
  }, [movies]);

  return (
    // <>
    //     {randomMovie && (

    //       <Card border="2px solid red" position="relative">
    //         <Image src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`} alt={randomMovie.title} />
    //         <Box  position="absolute" top="0" left="0" right="0" p="2" bg="rgba(0, 0, 0, 0.6)" color="white" fontWeight="bold" fontSize="2xl" textAlign="center">
    //             <Text>{randomMovie.title}</Text>
    //         </Box>
    //         <Box position="absolute" bottom="0" left="50%" transform="translateX(-50%)" >
    //             <Button colorScheme="yellow" border="white">{translations.trailer}</Button>
    //         </Box>
    //       </Card>
    //   )}
    // </>
    <>
       {isLoading ? (
      <Card
        position="relative"
        // bg="black"
        // h=""
        // w="100%"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="white"
          size="xl"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        />
      </Card>
    ) : randomMovie ? (
      <Card position="relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
          alt={randomMovie.title}
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          p="2"
          bg="rgba(0, 0, 0, 0.6)"
          color="white"
          fontWeight="bold"
          fontSize="2xl"
          textAlign="center"
        >
          <Text>{randomMovie.title}</Text>
        </Box>
        <Box position="absolute" bottom="3" left="50%" transform="translateX(-50%)">
          <Button colorScheme="yellow" border="white">
            {translations.trailer}
          </Button>
        </Box>
      </Card>
    ) : null}
  </>

  )
}
