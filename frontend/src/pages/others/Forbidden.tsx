import { Box, Text } from '@chakra-ui/react';

const Forbidden = () => {
  return (
    <Box textAlign="center" mt={10}>
      <Text fontSize="3xl" fontWeight="bold" color="red.500">
        403 Forbidden
      </Text>
      <Text mt={4} fontSize="xl">
        Oops! You don't have permission to access this page.
      </Text>
    </Box>
  );
};

export default Forbidden;