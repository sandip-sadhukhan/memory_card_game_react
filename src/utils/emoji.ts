import { generateUniqueRandomNumbers } from ".";
import { CellsMap, CellType } from "../types";

export const emojiList: string[] = [
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
  "😅",
  "🙄",
  "💩",
  "👽",
  "✌️",
  "🤟",
  "🤙",
  "👕",
  "🎩",
  "🌂",
  "👟",
  "🐵",
  "🦒",
  "🌈",
  "⚡️",
  "🍉",
  "🍓",
  "🥥",
  "🍦",
  "🍺",
  "🥤",
  "🍫",
  "🏀",
];

export const getAllEmojis = (totalCells: number): CellsMap => {
  let totalPairs: number = totalCells / 2;
  let randomNumbers = generateUniqueRandomNumbers(totalPairs, emojiList.length);
  let randomEmojiList: string[] = randomNumbers.map((num: number) => {
    return emojiList[num];
  });

  let cellsMap: CellsMap = new Map<number, CellType>();
  randomEmojiList.forEach((emoji: string, index: number) => {
    cellsMap.set(index, {
      state: "hidden",
      emoji,
    });
  });
  return cellsMap;
};
