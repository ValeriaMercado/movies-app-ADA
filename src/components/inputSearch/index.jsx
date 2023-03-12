// import { useState } from "react";
// import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";

// export const InputSearch = () => {
//   const [showInput, setShowInput] = useState(false);

//   const toggleShowInput = () => {
//     setShowInput(!showInput);
//   };

//   return (
//     <>
//       <Button leftIcon={<SearchIcon />} onClick={toggleShowInput}>
//         Search
//       </Button>
//       {showInput && (
//         <InputGroup mt={4}>
//           <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
//           <Input type="text" placeholder="Buscar..." />
//         </InputGroup>
//       )}
//     </>
//   );
// }

import { useState } from "react";
import { Input, Flex, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const SearchButton = () => {
  const navigate = useNavigate();
  const [valorInput, setValorInput] = useState("");
  const [movies, SetMovies] = useState([]);
  const [page, SetPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=ae186e957330197b5106a6c66c8bd1df&query=${searchParams.get(
        "query"
      )}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        SetMovies(data.results);
      });
  }, [searchParams, page]);

  const handleChange = (e) => {
    setValorInput(e.target.value);
    e.target.reset();
  };

  const handleClick = () => {
    setSearchParams({
      query: valorInput,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchParams({
        query: valorInput,
      });
      navigate(`search?query=${valorInput}`);
    }
  };

  return (
    <Flex ml={"80px"} pl={"50px"}>
      <InputGroup w={"80%"} mr="20px">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.700" />}
        />
        <Input
          type="search"
          placeholder="Search"
          onSubmit={handleClick}
          onChange={handleChange}
          value={valorInput}
          onKeyDown={handleKeyDown}
        />
      </InputGroup>
    </Flex>
  );
};
