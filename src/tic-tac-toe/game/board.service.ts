import { Injectable } from "@nestjs/common";
import { GridSpace } from "./grid-space";

@Injectable()
export class BoardService {
  public players: any[] = [];

  private board: GridSpace[][] = [];

  constructor() {
    this.resetBoard();
  }

  getBoard(): GridSpace[][] {
    return this.board;
  }

  mark(row: number, column: number, marker: string): void {
    this.board[row][column].setMark(marker);
    this.checkWinner();
  }

  resetBoard(): void {
    for (let i = 0; i < 3; i++) {
      this.board[i] = [];
      for (let j = 0; j < 3; j++) {
        this.board[i][j] = new GridSpace();
        this.board[i][j].setRow(i);
        this.board[i][j].setColumn(j);
      }
    }
  }

  checkWinner(): boolean {
    let winner = false;
    if (this.checkRows() || this.checkColumns() || this.checkDiagonals()) {
      winner = true;
    }
    return winner;
    // this.checkTie();
  }

  private checkRows(): boolean {
    let winner = false;
    this.board.forEach((row) => {
      if (row.every((value) => value.getMark() === row[0].getMark() && value.getMark() !== "")) {
        winner = true;
      }
    });
    return winner;
  }

  private checkColumns(): boolean {
    let winner = false;
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[0][i].getMark() === this.board[1][i].getMark() &&
        this.board[0][i].getMark() === this.board[2][i].getMark() &&
        this.board[0][i].getMark() !== ""
      ) {
        winner = true;
      }
    }
    return winner;
  }

  private checkDiagonals(): boolean {
    let winner = false;

    if (
      this.board[0][0].getMark() === this.board[1][1].getMark() &&
      this.board[0][0].getMark() === this.board[2][2].getMark() &&
      this.board[0][0].getMark() !== ""
    ) {
      winner = true;
    }

    if (
      this.board[0][2].getMark() === this.board[1][1].getMark() &&
      this.board[0][2].getMark() === this.board[2][0].getMark() &&
      this.board[0][2].getMark() !== ""
    ) {
      winner = true;
    }

    return winner;
  }
}
