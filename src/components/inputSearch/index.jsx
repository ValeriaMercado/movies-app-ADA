import { useState, useContext } from "react";
import { Input, Flex, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Context } from "../../context/Context";
import { useMediaQuery } from "react-responsive";

export const SearchButton = () => {
  const navigate = useNavigate();
  const [valorInput, setValorInput] = useState("");
  const context = useContext(Context);
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });

  useFetch(
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
    <Flex>
      <InputGroup
        ml={isSmallScreen ? "20px" : "400px"}
        mr={isSmallScreen ? "30px" : "30px"}
        w={{ base: "100%", md: "300px" }}
        _focus={{ boxShadow: "none" }}
        _focusVisible={{ boxShadow: "none", outline: "none" }}
      >
        <InputLeftElement
          pointerEvents="none"
          children={
            <SearchIcon
              color={context.clearTheme ? "brand.accent" : "brand.secondary"}
            />
          }
        />
        <Input
          focusBorderColor={
            context.clearTheme ? "brand.accent" : "brand.secondary"
          }
          type="search"
          onSubmit={handleClick}
          onChange={handleChange}
          value={valorInput}
          onKeyDown={handleKeyDown}
          borderColor={context.clearTheme ? "brand.accent" : "brand.secondary"}
          fontSize={"13px"}
          _hover={{ borderColor: "black" }}
        />
      </InputGroup>
    </Flex>
  );
};
