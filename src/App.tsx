import React, { MouseEvent, useState } from "react";
import {
  Divider,
  Button,
  HStack,
  VStack,
  Container,
  Heading,
  Box,
  Text,
  Progress,
  SimpleGrid,
  Image,
  Center,
} from "@chakra-ui/react";
import Header from "./components/Header";
import Score from "./components/Score";

const App: React.FC = () => {
  const [cardState, setCardState] = useState([
    {
      card: 0,
      open: false,
    },
    {
      card: 1,
      open: false,
    },
    {
      card: 2,
      open: true,
    },
    {
      card: 3,
      open: false,
    },
    {
      card: 4,
      open: true,
    },
    {
      card: 5,
      open: false,
    },
    {
      card: 6,
      open: false,
    },
    {
      card: 7,
      open: false,
    },
    {
      card: 8,
      open: false,
    },
    {
      card: 9,
      open: false,
    },
    {
      card: 10,
      open: false,
    },
    {
      card: 11,
      open: false,
    },
    {
      card: 12,
      open: false,
    },
    {
      card: 13,
      open: false,
    },
    {
      card: 15,
      open: false,
    },
    {
      card: 16,
      open: false,
    },
  ]);

  // setTimeout(() => {
  //   let newCardState = [...cardState];
  //   newCardState[0] = {
  //     card: 0,
  //     open: true,
  //   };
  //   setCardState(newCardState);
  // }, 2000);

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    let element = e.currentTarget;
    if (element.classList.contains("card")) {
      if (element.style.transform === "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
      } else {
        element.style.transform = "rotateY(180deg)";
      }
    }
  };

  return (
    <Container maxW="container.sm" p={[2, 2, 2, 4, 6]} my={[2, 2, 2, 4, 4]}>
      {/* Header Section */}
      <Header />

      {/* Score Section */}
      <Score />

      {/* Card Grid */}
      <SimpleGrid columns={[2, 2, 2, 4, 4]} spacing={4} w="full">
        {cardState.map((card) => (
          <VStack
            h="105px"
            key={card.card}
            bgColor="#48565B"
            border="2px solid #7E878B"
            borderRadius={5}
            w="full"
            alignItems="center"
            justifyContent="center"
            shadow="sm"
            className="card"
            onClick={onClick}
          >
            <VStack
              className="front"
              w="full"
              h="full"
              alignItems="center"
              justifyContent="center"
            >
              <Image src="/logo.png" w="60px" h="60px" />
            </VStack>
            <VStack
              className="back"
              w="full"
              h="98%"
              bgColor="green.800"
              alignItems="center"
              justifyContent="center"
            >
              <Heading>{card.card}</Heading>
            </VStack>
          </VStack>
        ))}
      </SimpleGrid>

      {/* CopyRight Text */}
      <Center>
        <Text color="gray.600" pt={4} fontSize={14}>
          Made with 💝 by Sandip Sadhukhan.
        </Text>
      </Center>
    </Container>
  );
};

export default App;
