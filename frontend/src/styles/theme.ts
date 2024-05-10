import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./buttonTheme";
import "@fontsource/poppins";

export const theme = extendTheme({
  components: { Button: buttonTheme },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});
