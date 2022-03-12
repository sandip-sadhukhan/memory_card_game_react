/*
    This 'state' variable represent what the current
    state of a specific state type.
    "show" means card content(emoji) is visible
    "hidden" means it is not visible (react logo is shown)
    "matched" means user matched the 2 cells
*/
export type state = "show" | "hidden" | "matched";

// This interface hold the information about a perticular cell with an unique id
export interface CellType {
  state: state;
  emoji: string;
}

export type CellsMap = Map<number, CellType>;
