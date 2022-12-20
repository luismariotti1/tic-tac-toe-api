import { Injectable } from "@nestjs/common";
import { BoardService } from "./board.service";

@Injectable()
export class RuleService {
  constructor(private boardService: BoardService) {
  }

  // board: string[][] = this.boardService.getBoard();
  //
  // checkWinner() {
  //   this.checkRows();
  //   this.checkColumns();
  //   this.checkDiagonals();
  //   this.checkTie();
  // }
  //
  // checkRows() {
  //   this.board.forEach((row) => {
  //     if (row.every((value) => value === row[0] && value !== "")) {
  //       alert(`${row[0]} wins!`);
  //     }
  //   });
  // }
  //
  // checkColumns() {
  //   for (let i = 0; i < this.board.length; i++) {
  //     if (
  //       this.board[0][i] === this.board[1][i] &&
  //       this.board[0][i] === this.board[2][i] &&
  //       this.board[0][i] !== ""
  //     ) {
  //       alert(`${this.board[0][i]} wins!`);
  //     }
  //   }
  // }
  //
  // checkDiagonals() {
  //   if (
  //     this.board[0][0] === this.board[1][1] &&
  //     this.board[0][0] === this.board[2][2] &&
  //     this.board[0][0] !== ""
  //   ) {
  //     alert(`${this.board[0][0]} wins!`);
  //   }
  //   if (
  //     this.board[0][2] === this.board[1][1] &&
  //     this.board[0][2] === this.board[2][0] &&
  //     this.board[0][2] !== ""
  //   ) {
  //     alert(`${this.board[0][2]} wins!`);
  //   }
  // }
  //
  // checkTie() {
  //   this.board.forEach((row) => {
  //     if (row.every((value) => value !== "")) {
  //       alert("Tie!");
  //     }
  //   });
  // }
}