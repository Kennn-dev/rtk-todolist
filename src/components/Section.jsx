import React from "react";
import { Box, Text } from "@chakra-ui/react";
const Section = ({ title, children }) => (
  <Box marginTop="30px">
    <Text fontWeight="bold" mb="8px" as="div">
      {title}
    </Text>
    <>{children}</>
  </Box>
);
export default Section;
