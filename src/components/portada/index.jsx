import { useFetch } from "../../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";


export const Portada = () => {
const context = useContext(Context);
const [randomMovie, setRandomMovie] = useState(null);

  const { movies } = useFetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US&page=1`,
    context.language
  );

  return (
    <>
    
    </>
  )
}
