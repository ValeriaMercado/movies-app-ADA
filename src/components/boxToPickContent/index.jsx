// import { MoviesCards } from "../moviesCard";
// //import { useState, useEffect } from "react"
// import { Box, Spinner } from "@chakra-ui/react";
// import { useFetch } from "../../hooks/useFetch";
// import { useContext } from "react";
// import { Context } from "../../context/Context";

// export const BoxToPickContent = ({ searchCategory, serieOrMovie }) => {
//   const context = useContext(Context);

//   const { movies, isLoading } = useFetch(
//     `https://api.themoviedb.org/3/${serieOrMovie}/${searchCategory}?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US&page=1`,
//     context.language
//   );

//   return (
//     <Box display="flex" justifyContent="center" flexWrap="wrap">
//       {isLoading && (
//         <Spinner
//           thickness="4px"
//           speed="0.65s"
//           emptyColor="gray.200"
//           color="blue.500"
//           size="xl"
//         />
//       )}
//       {movies?.map((movie) => {
//         return (
//           <MoviesCards
//             searchCategory={searchCategory}
//             key={movie.id}
//             alt={movie.title}
//             movieTitle={movie.title}
//             movieDetails={movie.overview}
//             img={movie.poster_path}
//             id={movie.id}
//           />
//         );
//       })}
//     </Box>
//   );
// };

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MoviesCards } from "../moviesCard";
//import { useState, useEffect } from "react"
import { Box, Spinner } from "@chakra-ui/react";
import { useFetch } from "../../hooks/useFetch";
import { useContext } from "react";
import { Context } from "../../context/Context";


export const BoxToPickContent = ({ searchCategory, serieOrMovie }) => {
  const context = useContext(Context);

  const { movies, isLoading } = useFetch(
    `https://api.themoviedb.org/3/${serieOrMovie}/${searchCategory}?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US&page=1`,
    context.language
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <Slider {...settings}
        // dots={true} // muestra los puntos de navegación
        // infinite={true} // permite navegar infinitamente
        // speed={500} // velocidad de transición
        // slidesToShow={5} // número de tarjetas mostradas a la vez
        // slidesToScroll={1} // número de tarjetas que se desplazan a la vez
    >
      {movies?.map((movie) => {
        return (
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

  );
};