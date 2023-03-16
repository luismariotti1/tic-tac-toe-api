import { Injectable } from '@nestjs/common';
import { GameRoomService } from './game-room.service';
import { GridSpace } from './grid-space';

@Injectable()
export class BoardService {
  constructor(private gameRoomService: GameRoomService) {}

  getBoard(room: string): GridSpace[][] {
    return this.gameRoomService.findGameRoom(room).gameState;
  }

  mark(
    room: string,
    row: number,
    column: number,
    marker: string,
  ): GridSpace[][] {
    const board = this.getBoard(room);
    board[row][column].setMark(marker);
    return board;
    // this.checkWinner();
  }

  resetBoard(room: string): void {
    const board = this.getBoard(room);
    for (let i = 0; i < 3; i++) {
      board[i] = [];
      for (let j = 0; j < 3; j++) {
        board[i][j] = new GridSpace();
        board[i][j].setRow(i);
        board[i][j].setColumn(j);
      }
    }
  }

  checkWinner(room: string): boolean {
    const board = this.getBoard(room);
    let winner = false;
    if (
      this.checkRows(board) ||
      this.checkColumns(board) ||
      this.checkDiagonals(board)
    ) {
      winner = true;
    }
    return winner;
    // this.checkTie();
  }

  private checkRows(board: GridSpace[][]): boolean {
    let winner = false;
    board.forEach((row) => {
      if (
        row.every(
          (value) =>
            value.getMark() === row[0].getMark() && value.getMark() !== '',
        )
      ) {
        winner = true;
      }
    });
    return winner;
  }

  private checkColumns(board: GridSpace[][]): boolean {
    let winner = false;
    for (let i = 0; i < board.length; i++) {
      if (
        board[0][i].getMark() === board[1][i].getMark() &&
        board[0][i].getMark() === board[2][i].getMark() &&
        board[0][i].getMark() !== ''
      ) {
        winner = true;
      }
    }
    return winner;
  }

  private checkDiagonals(board: GridSpace[][]): boolean {
    let winner = false;

    if (
      board[0][0].getMark() === board[1][1].getMark() &&
      board[0][0].getMark() === board[2][2].getMark() &&
      board[0][0].getMark() !== ''
    ) {
      winner = true;
    }

    if (
      board[0][2].getMark() === board[1][1].getMark() &&
      board[0][2].getMark() === board[2][0].getMark() &&
      board[0][2].getMark() !== ''
    ) {
      winner = true;
    }

    return winner;
  }
}
