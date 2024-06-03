import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./buttonTheme";
import "@fontsource-variable/raleway";

export const theme = extendTheme({
  components: {
    Button: buttonTheme,
    Heading: {
      baseStyle: {
        fontWeight: 800,
      },
    },
  },
  fonts: {
    heading: `'Raleway Variable', sans-serif`,
    body: `'Raleway Variable', sans-serif`,
  },
});
