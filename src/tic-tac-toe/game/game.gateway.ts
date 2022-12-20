import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from "@nestjs/websockets";
import { BoardService } from "./board.service";
import { Socket } from "socket.io";

@WebSocketGateway({ namespace: "game" })
export class GameGateway {
  @WebSocketServer() server;

  constructor(private boardService: BoardService) {
  }

  @SubscribeMessage("getBoard")
  getBoard(client: Socket, room: string): void {
    this.server.to(room).emit("updateBoard", this.boardService.getBoard());
  }

  @SubscribeMessage("mark")
  handleMark(client, data) {
    const { Row, Column, Marker } = JSON.parse(data);
    this.boardService.mark(Row, Column, Marker);

    this.server.emit("updateBoard", this.boardService.getBoard());

    if (!this.boardService.checkWinner()) return;
    this.server.emit("winner", Marker);
  }

  @SubscribeMessage("restart")
  handleRestart(client: Socket, room: string): void {
    this.boardService.resetBoard();
    this.server.to(room).emit("updateBoard", this.boardService.getBoard());
    this.server.to(room).emit("restarted");
  }
}
