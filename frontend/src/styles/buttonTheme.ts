import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const xl = defineStyle({
  h: "16",
  w: "16",
});

export const buttonTheme = defineStyleConfig({
  sizes: { xl },
});
