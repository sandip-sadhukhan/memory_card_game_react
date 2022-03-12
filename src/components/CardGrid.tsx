import { Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import { CellsMap } from "../types";

interface CardGridProps {
  cellsState: CellsMap;
  onClick: (id: number) => void;
}

const CardGrid: React.FC<CardGridProps> = (props: CardGridProps) => {
  const { cellsState, onClick } = props;

  return (
    <SimpleGrid columns={[2, 2, 2, 4, 4]} spacing={4} w="full">
      {Array.from(cellsState).map(([id, cell]) => (
        <VStack
          h="105px"
          key={id}
          w="full"
          alignItems="center"
          justifyContent="center"
          shadow="sm"
          className="card"
          onClick={() => onClick(id)}
          transform={
            cell.state !== "show" ? "rotateY(0deg)" : "rotateY(180deg)"
          }
        >
          <VStack
            className="front"
            w="full"
            h="full"
            bgColor={"#48565B"}
            border="2px solid #7E878B"
            borderRadius={5}
            alignItems="center"
            justifyContent="center"
            opacity={cell.state === "matched" ? 0.8 : 1}
          >
            {cell.state === "matched" ? (
              <Heading size="3xl">{cell.emoji}</Heading>
            ) : (
              <Image src="/logo.png" w="60px" h="60px" />
            )}
          </VStack>
          <VStack
            className="back"
            w="full"
            h="98%"
            bgColor={cell.state === "matched" ? "#48565B" : "#083532"}
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
  );
};

export default CardGrid;
