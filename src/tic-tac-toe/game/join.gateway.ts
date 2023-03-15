import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket, Server } from "socket.io";
import { BoardService } from "./board.service";
import { JoinService } from "./join.service";
// import { UseGuards } from "@nestjs/common";
// import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";


@WebSocketGateway({ namespace: "game" })
// @UseGuards(JwtAuthGuard)
export class JoinGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private numOnline: number = 0;

  constructor(private joinService: JoinService, private BoardService: BoardService) {
  }

  @SubscribeMessage("joinRoom")
  handleJoinRoom(client: Socket, player: any): void {
    const res = this.joinService.joinRoom(player, client);
    if (res.success) {
      client.emit("joinedRoom");

      if (res.startGame) {
        this.BoardService.resetBoard(res.room);
        this.server.to(res.room).emit("startGame");
      }
    }
  }
  
  @SubscribeMessage("leaveRoom")
  handleLeaveRoom(client: Socket, room: string): void {
    client.leave(room);
    client.emit("leftRoom", room);
  }

  handleConnection(client: any, ...args: any[]): any {
    console.log("Client connected: " + client.id);
    client.emit("connected", `Client connected: ${client.id}`);
  }

  handleDisconnect(client: any): any {
    console.log("Client disconnected: " + client.id);
  }
}