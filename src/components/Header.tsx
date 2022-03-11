import React from "react";
import {
  VStack,
  HStack,
  Heading,
  Button,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <VStack w="full" align="start" alignItems="center">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        flexDir={["column", "column", "column", "row", "row"]}
        gap={3}
        spacing={0}
      >
        <Heading size="lg" color="gray.200">
          Match the pairs 🤔
        </Heading>
        <Button
          colorScheme="teal"
          size={useBreakpointValue({ base: "sm", md: "md" })}
        >
          Reset game
        </Button>
      </HStack>
      <VStack w="full">
        <Divider py={2} alignItems="center" justifyContent="center" />
      </VStack>
    </VStack>
  );
};

export default Header;
