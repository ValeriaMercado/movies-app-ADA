import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../context/Context";

export const useFetchTVDetails = () => {
  const [tv, setTv] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const context = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/tv/${params.TVDetails}?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US/`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status_code === 34) {
          navigate(`*`);
        } else {
          setTv(data);
        }
        setLoading(false);
      }, 3000);
  }, [params.TVDetails, context.language]);

  return {
    tv: tv,
    loading: loading,
  };
};
