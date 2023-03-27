import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { useEffect, useState } from "react";
import { FlagIcon } from 'react-flag-kit';

const LANGUAGES = {
  en: "US",
  es: "ES",
  fr: "FR",
  it: "IT",
  ru: "RU",
  zh: "CN",
};

export const AlternativeSelectLanguage = () => {
  const context = useContext(Context);
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("selectedLanguage") || "en");
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    context.setLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    onToggle();
  };

  return (
    <Box position="relative" width="45px" display="flex" justifyContent="center" alignItems="center">
      <Box onClick={onToggle}>
        <Flex alignItems="center">
          <FlagIcon code={LANGUAGES[selectedLanguage]} size={24} />
        </Flex>
      </Box>
      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          width="100%"
          bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
          color={context.clearTheme ? "black" : "white"}
          border={context.clearTheme ? "1px solid black" : "1px solid white"}
          boxShadow="md"
          zIndex={10}
        >
          {Object.keys(LANGUAGES).map((lang) => (
            <Box
              key={lang}
              px={2}
              py={1}
              cursor="pointer"
              _hover={{ bg: context.clearTheme ? "brand.accent" : "brand.secondary" }}
              onClick={() => handleLanguageChange(lang)}
            >
              <Flex alignItems="center">
                <FlagIcon code={LANGUAGES[lang]} size={24} />
              </Flex>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};


