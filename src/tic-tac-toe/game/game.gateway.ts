import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { BoardService } from './board.service';
import { JoinService } from "./join.service";

@WebSocketGateway({cors: true})
export class GameGateway {
  @WebSocketServer() server;

  constructor(private boardService: BoardService,
              private joinService: JoinService) {}

  @SubscribeMessage('joinGame')
  joinGame(client, data): string {
    this.updateBoard();
    return this.joinService.joinGame(data.player);
  }

  @SubscribeMessage('updateBoard')
  updateBoard() {
    this.server.emit('updateBoard', this.boardService.getBoard());
  }

  @SubscribeMessage('checkWinner')
  checkWinner() {

  }

  @SubscribeMessage('makeMove')
  makeMove(client, data) {
    this.boardService.makeMove(data.row, data.column, data.player);
    this.updateBoard();
  }
}
