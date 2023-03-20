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

import { useState, useEffect, useContext } from "react";
import { Input, Flex, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useFetchSearch } from "../../hooks/useFetchSearch";

export const SearchButton = () => {
  const navigate = useNavigate();
  const [valorInput, setValorInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });

  useFetchSearch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=ae186e957330197b5106a6c66c8bd1df&page=1`
  );
  const handleChange = (e) => {
    setValorInput(e.target.value);
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
