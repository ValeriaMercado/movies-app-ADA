import { Select } from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { useEffect } from "react";

export const SelectLanguage = () => {
  const context = useContext(Context);

  useEffect(() => {
    const selectedLanguage = localStorage.getItem("selectedLanguage");
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
