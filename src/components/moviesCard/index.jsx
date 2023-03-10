//import { Link as ReactLink } from 'react-router-dom'

import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const MoviesCards = ({
  alt,
  movieTitle,
  movieDetails,
  img,
  id,
  serieOrMovie,
}) => {
  return (
    <Card
      maxW="25%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      m={4}
    >
      <CardBody display="flex" flexDirection="column" alignItems="center">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt={alt}
          borderRadius="lg"
          width={"90%"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{movieTitle}</Heading>
          <Text noOfLines={[1, 2, 3]}>{movieDetails}</Text>
          <Divider />
          <CardFooter>
            {movieTitle ? (
              <Link to={`/details/movie/${id}`}>
                <Button variant="ghost" colorScheme="blue" size="sm">
                  See Details
                </Button>
              </Link>
            ) : (
              <Link to={`/details/tv/${id}`}>
                <Button variant="ghost" colorScheme="blue" size="sm">
                  See Details
                </Button>
              </Link>
            )}
          </CardFooter>
        </Stack>
      </CardBody>
    </Card>
  );
};
