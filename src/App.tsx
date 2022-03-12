import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Score from "./components/Score";
import CopyRight from "./components/CopyRight";
import CardGrid from "./components/CardGrid";
import { CellsMap, CellType } from "./types";
import { getAllEmojis } from "./utils/emoji";

const TOTAL_CELLS: number = 16;

const App: React.FC = () => {
  // States
  const [cellsState, setCellsState] = useState<CellsMap>(
    getAllEmojis(TOTAL_CELLS)
  );
  const [pairedMatched, setPairedMatched] = useState<number>(0);
  const [totalMoves, setTotalMoves] = useState<number>(0);

  // reset game
  const resetGame = () => {
    setCellsState(getAllEmojis(TOTAL_CELLS));
    setPairedMatched(0);
    setTotalMoves(0);
  };

  // which cells are currently opened
  const getOpenedCells = (): number[] => {
    let openedIds: number[] = [];
    cellsState.forEach((cell, id) => {
      if (cell.state === "show") {
        openedIds.push(id);
      }
    });

    return openedIds;
  };

  // check matching
  const checkMatching = (currentlyOpenedCells: number[]): void => {
    if (currentlyOpenedCells.length === 2) {
      // check the matching and close all
      setTimeout(() => {
        let cell1 = cellsState.get(currentlyOpenedCells[0]) as CellType;
        let cell2 = cellsState.get(currentlyOpenedCells[1]) as CellType;
        if (cell1.emoji === cell2.emoji) {
          // update the cell
          let newCellsState = new Map(cellsState);
          cell1.state = "matched";
          cell2.state = "matched";
          newCellsState.set(currentlyOpenedCells[0], cell1);
          newCellsState.set(currentlyOpenedCells[1], cell2);
          setCellsState(newCellsState);

          // update paired Matched
          setPairedMatched((_pairedMatched) => _pairedMatched + 1);
        } else {
          // update the cell
          let newCellsState = new Map(cellsState);
          cell1.state = "hidden";
          cell2.state = "hidden";
          newCellsState.set(currentlyOpenedCells[0], cell1);
          newCellsState.set(currentlyOpenedCells[1], cell2);
          setCellsState(newCellsState);
        }
        // update moves
        setTotalMoves((_totalMoves) => _totalMoves + 1);
      }, 1500);
    }
  };

  // onclick event on cell grid
  const onClick = (cellId: number) => {
    // get the current cell
    let cell = cellsState.get(cellId) as CellType;
    // flip the card
    if (cell.state === "hidden") {
      if (getOpenedCells().length < 2) {
        cell.state = "show";
        // update the cell
        let newCellsState = new Map(cellsState);
        newCellsState.set(cellId, cell);
        setCellsState(newCellsState);

        // check matched or not
        checkMatching(getOpenedCells());
      }
    }
  };

  return (
    <Container maxW="container.sm" p={[2, 2, 2, 4, 6]} my={[2, 2, 2, 4, 4]}>
      {/* Header Section */}
      <Header
        resetGame={resetGame}
        gameOver={pairedMatched === TOTAL_CELLS / 2}
      />

      {/* Score Section */}
      <Score
        totalCells={TOTAL_CELLS}
        pairsMatched={pairedMatched}
        totalMoves={totalMoves}
      />

      {/* Card Grid */}
      <CardGrid cellsState={cellsState} onClick={onClick} />

      {/* CopyRight Text */}
      <CopyRight text="Made with 💝 by Sandip Sadhukhan." />
    </Container>
  );
};

export default App;
