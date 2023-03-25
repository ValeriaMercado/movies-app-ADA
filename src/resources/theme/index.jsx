// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      primary: "#ffd60a", //amarillo claro
      secondary: "#E3CCAE", //amarillo oscuro
      accent:
        "linear-gradient(to right top, #1d0537, #220025, #1f0018, #16000a, #000000)",

      //azul
    },
  },
  components: {
    Button: {
      variants: {
        custom: {
          bg: "purple.500",
          color: "white",
          _hover: {
            bg: "purple.600",
          },
        },
      },
    },
  },
});

// 3. Pass the new theme to `ChakraProvider`
{
  /* <ChakraProvider theme={theme}>
  <App />
</ChakraProvider> */
}

// 4. Now you can use these colors in your components
// function Usage() {
//   return <Box bg="brand.100">Welcome</Box>
// }
