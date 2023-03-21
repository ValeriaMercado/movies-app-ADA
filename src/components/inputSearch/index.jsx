
import { useState, useContext, useEffect} from "react";
import { Input, Flex, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFetchSearch } from "../../hooks/useFetchSearch";
import { navbarTranslations } from "../../translations/navbar";
import { Context } from "../../context/Context";

export const SearchButton = () => {
  const navigate = useNavigate();
  const [valorInput, setValorInput] = useState("");


  const context = useContext(Context)
   const [translations, setTranslations] = useState({})
  useEffect(()=>{
     
    setTranslations(navbarTranslations(context))
   
  },[context.language])



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
          placeholder={translations.search}
          onSubmit={handleClick}
          onChange={handleChange}
          value={valorInput}
          onKeyDown={handleKeyDown}
        />
      </InputGroup>
    </Flex>
  );
};
