import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";

export const useFetchDetails = (url, dependence) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const context = useContext(Context);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      }, 3000);
  }, [
    url,
    params.movieDetails,
    params.TVDetails,
    dependence,
    context.language,
  ]);

  return {
    data: data,
    loading: loading,
  };
};
