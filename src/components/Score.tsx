import React from "react";
import { HStack, Box, Progress, Text } from "@chakra-ui/react";

const Score = () => {
  return (
    <HStack w="full" spacing={[2, 2, 2, 4, 4]} py={[2, 2, 2, 4, 4]}>
      <Box
        flex={1}
        bgColor="whiteAlpha.50"
        p={4}
        rounded="md"
        shadow="md"
        w="full"
      >
        <Progress
          colorScheme="teal"
          size="sm"
          value={20}
          rounded="full"
          mb={2}
        />
        <Text color="gray.100">Pairs matched</Text>
        <HStack spacing={0} color="gray.100" alignItems="baseline">
          <Text fontSize={24} fontWeight={600}>
            0
          </Text>
          <Text color="gray.400">/8</Text>
        </HStack>
      </Box>
      <Box
        flex={1}
        bgColor="whiteAlpha.50"
        p={4}
        rounded="md"
        shadow="md"
        w="full"
      >
        <Text color="gray.100" mt={4}>
          Total moves
        </Text>
        <Text color="gray.100" fontSize={24} fontWeight={600}>
          0
        </Text>
      </Box>
    </HStack>
  );
};

export default Score;
