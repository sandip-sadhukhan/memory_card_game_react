export const shuffleArray = (array: number[]): number[] => {
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
export const generateUniqueRandomNumbers = (
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
