import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { BoardService } from './board.service';
import { Socket, Server } from 'socket.io';
import { GameRoomService } from './game-room.service';

@WebSocketGateway({ namespace: 'game' })
export class GameGateway {
  @WebSocketServer() server: Server;

  constructor(
    private boardService: BoardService,
    private gameRoomService: GameRoomService,
  ) {}

  @SubscribeMessage('getBoard')
  getBoard(client: Socket, room: string): void {
    // this.server.to(room).emit('updateBoard', this.boardService.getBoard(room));
  }

  @SubscribeMessage('getPlayerData')
  getPlayerData(client: Socket, userId: any): void {
    const player = this.gameRoomService.findPlayer(userId);
    console.log(player);
    client.emit('playerData', player);
  }

  @SubscribeMessage('mark')
  handleMark(client, data) {
    const { Row, Column, Marker, Room } = JSON.parse(data);
    const gameState = this.boardService.mark(Room, Row, Column, Marker);

    this.server.to(Room).emit('updateBoard', gameState);

    if (!this.boardService.checkWinner(Room)) return;
    this.server.emit('winner', Marker);
  }

  @SubscribeMessage('restart')
  handleRestart(client: Socket, room: string): void {
    // this.boardService.resetBoard();
    // this.server.to(room).emit("updateBoard", this.boardService.getBoard());
    // this.server.to(room).emit("restarted");
  }
}
