import React from "react";
import {
  VStack,
  HStack,
  Heading,
  Button,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";

interface HeaderProps {
  resetGame: () => void;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
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
          onClick={props.resetGame}
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
