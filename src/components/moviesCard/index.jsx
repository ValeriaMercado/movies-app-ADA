import { Card, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import noimage from "../../assets/noimage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export const MoviesCards = ({ movieTitle, img, id }) => {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      <Card
        maxW={isSmallScreen ? "35%" : "20%"}
        height={isSmallScreen ? "190px" : "400px"}
        display="flex"
        m={4}
        ml={isSmallScreen ? 4 : ""}
        backgroundImage={
          img ? `https://image.tmdb.org/t/p/w500/${img}` : `${noimage}`
        }
        backgroundPosition="center"
        width={"100%"}
        backgroundSize="cover"
        alt={movieTitle}
        className="card-background"
      >
        {movieTitle ? (
          <Link to={`/details/movie/${id}`}>
            <Button
              variant={"unstyled"}
              fontSize={isSmallScreen ? "35px" : "45px"}
              ml={isSmallScreen ? "80px" : "210px"}
              mt={isSmallScreen ? "140px" : "330px"}
              position="relative"
              className="btn-card"
            >
              <FontAwesomeIcon icon={faEye} />
            </Button>
          </Link>
        ) : (
          <Link to={`/details/tv/${id}`}>
            <Button
              variant={"unstyled"}
              fontSize={isSmallScreen ? "35px" : "45px"}
              ml={isSmallScreen ? "80px" : "210px"}
              mt={isSmallScreen ? "130px" : "335px"}
              position="relative"
              className="btn-card"
            >
              <FontAwesomeIcon icon={faEye} />
            </Button>
          </Link>
        )}
      </Card>
    </>
  );
};
