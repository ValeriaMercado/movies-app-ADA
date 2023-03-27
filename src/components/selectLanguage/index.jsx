import { Select } from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { useEffect } from "react";
import { FlagIcon } from 'react-flag-kit';


export const SelectLanguage = () => {
  const context = useContext(Context);
  const selectedLanguage = localStorage.getItem("selectedLanguage");

  useEffect(() => {
    if (selectedLanguage) {
      context.setLanguage(selectedLanguage);
    }
  }, []);


  const handleChangeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    context.setLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  };

  return (
    <>
      {/* <Select
        height={"40px"}
        onChange={handleChangeLanguage}
        variant="unstyled"
        sx={{
          backgroundColor: context.clearTheme
            ? "brand.secondary"
            : "brand.accent",
          color: context.clearTheme ? "black" : "white",
          border: context.clearTheme ? "1px solid black" : "1px solid white",
          option: {
            backgroundColor: context.clearTheme
              ? "brand.secondary"
              : "brand.accent",
            color: context.clearTheme ? "black" : "black",
            _hover: {
              backgroundColor: context.clearTheme
                ? "brand.accent"
                : "brand.secondary",
              color: context.clearTheme ? "white" : "black",
            },
            _selected: {
              backgroundColor: context.clearTheme
                ? "brand.accent"
                : "brand.secondary",
              color: context.clearTheme ? "white" : "black",
            },
          },
        }}
      >
        {/* <option value="en" label={languages.english}>{languages.english}</option>
        <option value="es" label={languages.spanish}>{languages.spanish}</option>
        <option value="fr" label={languages.french}>{languages.french}</option>
        <option value="it" label={languages.italian}>{languages.italian}</option>
        <option value="ru" label={languages.russian}>{languages.russian}</option>
        <option value="zh" label={languages.chinesse}>{languages.chinesse}</option> */}

        {/* <option value="en" >English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="it">Italiano</option>
        <option value="ru">Pусский</option>
        <option value="zh">中國人</option>

      </Select> */} 


<Select
  height={"40px"}
  color={context.clearTheme ? "black" : "white"}
  onChange={handleChangeLanguage}
  variant="unstyled"
  colorScheme="red"
  bg={"transparent"}
  //placeholder={selectedLanguage?selectedLanguage:"Seleccione un lenguaje"}//necesito que aqu'í me aparezca el contenido del label option
  sx={{
    select: {
      _focus: {
        boxShadow: "none",
        bg: "transparent"
      }
    },
    option: {
      bg: "black",
      color: "white",
      _hover: {
        bg: "purple.500"
      },
      _selected: {
        bg: "purple.500"
      }
    },
    select: {
      _menu: {
        bg: "black",
        color: "white",
        boxShadow: "none",
        borderRadius: "none",
        borderWidth: "1px",
        borderColor: "white",
        fontSize: "md",
        fontWeight: "normal",
        _focus: {
          bg: "transparent",
          boxShadow: "none"
        }
      }
    }
  }}
>
  <option value="en">English</option>
  <option value="es">Español</option>
  <option value="fr">Français</option>
  <option value="it">Italiano</option>
  <option value="ru">Pусский</option>
  <option value="zh">中國人</option>
</Select>

    </>
  );
};
