import { Select } from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { useEffect } from "react";

export const SelectLanguage = () => {
  const context = useContext(Context);
  const selectedLanguage = localStorage.getItem("selectedLanguage");
  const languages={
    english: selectedLanguage == "en" && "English",
    spanish: selectedLanguage == "es" && "Español",
    french: selectedLanguage == "fr" && "Français",
    italian: selectedLanguage === "it" && "Italiano",
    russian: selectedLanguage === "ru" && "Pусский",
    chinesse: selectedLanguage =="zh"&& "中國人"
  }

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
      <Select
        height={"40px"}
        color={context.clearTheme ? "black" : "white"}
        onChange={handleChangeLanguage}
        variant="unstyled"
        bg={"transparent"}
        placeholder={selectedLanguage?selectedLanguage:"Seleccione un lenguaje"}
      >
        <option value="en">{languages.english}</option>
        <option value="es">{languages.spanish}</option>
        <option value="fr">{languages.french}</option>
        <option value="it">{languages.italian}</option>
        <option value="ru">{languages.russian}</option>
        <option value="zh">{languages.chinesse}</option>

      </Select>
    </>
  );
};
