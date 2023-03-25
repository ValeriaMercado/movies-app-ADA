import { Select } from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { generalTranslations } from "../../translations/generalTranslations";
import { useTranslate } from "../../hooks/useTranslate";

export const SelectLanguage = () => {
  const context = useContext(Context);
  const translations = useTranslate(generalTranslations(context));

  const handleChangeLanguage = (e) => {
    context.setLanguage(e.target.value);
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
      </Select>
    </>
  );
};
