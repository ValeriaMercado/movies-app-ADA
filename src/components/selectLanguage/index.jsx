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
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="it">Italiano</option>
        <option value="ru">Pусский</option>
      </Select>
    </>
  );
};
