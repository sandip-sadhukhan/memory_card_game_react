import React, { MouseEvent, useState } from "react";
import {
  VStack,
  Container,
  Heading,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import Header from "./components/Header";
import Score from "./components/Score";
import CopyRight from "./components/CopyRight";

const TOTAL_CELLS: number = 16;

const App: React.FC = () => {
  /*
    This 'state' variable represent what the current
    state of a specific state type.
    "show" means card content(emoji) is visible
    "hidden" means it is not visible (react logo is shown)
    "matched" means user matched the 2 cells
  */
  type state = "show" | "hidden" | "matched";

  // This interface hold the information about a perticular cell with an unique id
  interface CellType {
    id: number;
    state: state;
    emoji: string;
  }

  const emojiList: string[] = [
    "🐱",
    "🐗",
    "🐷",
    "🐭",
    "😨",
    "🤡",
    "🐺",
    "🦍",
    "😸",
    "😹",
    "😻",
    "😺",
    "😾",
    "🙀",
    "🥝",
    "🪁",
    "🤯",
    "🎤",
    "🗂️",
    "🥙",
  ];

  // const getSingleRandomEmoji = (): string => {
  //   let length: number = emojiList.length;
  //   let randomEmoji: string = emojiList[Math.floor(Math.random() * length)];
  //   return randomEmoji;
  // };

  const shuffleArray = (array: number[]): number[] => {
    let currentIndex = array.length,
      randomIndex;

    // while there remain elements to shuffle
    while (currentIndex !== 0) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  // it will generate a unique list of items from a list
  // totalLength -> 20 means [0, 1, 2, ..., 19]
  // length -> 8 means [8 unique elements from totalLengthArr]
  const generateUniqueRandomNumbers = (
    length: number,
    totalLength: number
  ): number[] => {
    let randomNumbers: number[] = [];

    while (randomNumbers.length < length * 2) {
      let randomNumber: number = Math.floor(Math.random() * totalLength);
      if (!randomNumbers.includes(randomNumber)) {
        // add twice as a pair
        randomNumbers.push(randomNumber);
        randomNumbers.push(randomNumber);
      }
    }

    // mix those list
    let mixedNumbers: number[] = shuffleArray(randomNumbers);

    return mixedNumbers;
  };

  const getAllEmojis = (totalCells: number): CellType[] => {
    let totalPairs: number = totalCells / 2;
    let randomNumbers = generateUniqueRandomNumbers(
      totalPairs,
      emojiList.length
    );
    let randomEmojiList: string[] = randomNumbers.map((num: number) => {
      return emojiList[num];
    });

    let cells: CellType[] = randomEmojiList.map(
      (emoji: string, index: number) => {
        return {
          id: index,
          state: "hidden",
          emoji,
        };
      }
    );
    return cells;
  };

  const [cellsState, setCellsState] = useState<CellType[]>(
    getAllEmojis(TOTAL_CELLS)
  );

  // reset game
  const resetGame = () => {
    alert("Resetting the game...");
  };

  // onclick event on cell grid
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
      <Header resetGame={resetGame} />

      {/* Score Section */}
      <Score totalCells={TOTAL_CELLS} pairsMatched={6} totalMoves={0} />

      {/* Card Grid */}
      <SimpleGrid columns={[2, 2, 2, 4, 4]} spacing={4} w="full">
        {cellsState.map((cell: CellType) => (
          <VStack
            h="105px"
            key={cell.id}
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
              bgColor="#48565B"
              border="2px solid #7E878B"
              borderRadius={5}
              alignItems="center"
              justifyContent="center"
            >
              <Image src="/logo.png" w="60px" h="60px" />
            </VStack>
            <VStack
              className="back"
              w="full"
              h="98%"
              bgColor="#083532"
              border="2px solid teal"
              borderRadius={5}
              alignItems="center"
              justifyContent="center"
            >
              <Heading size="3xl">{cell.emoji}</Heading>
            </VStack>
          </VStack>
        ))}
      </SimpleGrid>

      {/* CopyRight Text */}
      <CopyRight text="Made with 💝 by Sandip Sadhukhan." />
    </Container>
  );
};

export default App;
