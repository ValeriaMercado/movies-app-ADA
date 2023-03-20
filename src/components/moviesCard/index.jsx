
import { Card, CardBody, Image, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlinePlayCircle } from "react-icons/ai";

export const MoviesCards = ({ alt, movieTitle, img, id, TvTitle }) => {
  return (
    <>
      <Card
        maxW="20%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        m={4}
      >
        <CardBody display="flex" flexDirection="column" alignItems="center">
          {img ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500/${img}`}
              alt={alt}
              borderRadius="lg"
              width={"100%"}
            />
          ) : (
            <Text>No image found</Text>
          )}

          {movieTitle ? (
            <Link to={`/details/movie/${id}`}>
              <Button variant="ghost" fontSize={"40px"} ml="180px" mt={"20px"}>
                <AiOutlinePlayCircle />
              </Button>
            </Link>
          ) : (
            <Link to={`/details/tv/${id}`}>
              <Button
                variant="ghost"
                colorScheme="black"
                fontSize={"40px"}
                ml="180px"
                mt={"20px"}
              >
                <AiOutlinePlayCircle />
              </Button>
            </Link>
          )}
        </CardBody>
      </Card>
    </>
>>>>>>> 6e9dc5649ec42501c7b38d06bade9f1d2f9d62cc
  );
};
