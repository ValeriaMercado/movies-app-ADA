// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    colors: {
        brand: {
            primary: "#ffd60a", //amarillo claro
            secondary:'#ffc300',//amarillo oscuro
            accent: "#003566",//azul
    },
},
})

// 3. Pass the new theme to `ChakraProvider`
{/* <ChakraProvider theme={theme}>
  <App />
</ChakraProvider> */}

// 4. Now you can use these colors in your components
// function Usage() {
//   return <Box bg="brand.100">Welcome</Box>
// }
