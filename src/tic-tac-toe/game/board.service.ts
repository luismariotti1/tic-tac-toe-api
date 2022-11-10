import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  private board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  getBoard(): string[][] {
    return this.board;
  }

  makeMove(row: number, column: number, player: string) {
    this.board[column][row] = player;
  }

  resetBoard(): void {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }
}
