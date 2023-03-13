import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { JoinService } from "./join.service";
// import { UseGuards } from "@nestjs/common";
// import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";


@WebSocketGateway({ namespace: "game" })
// @UseGuards(JwtAuthGuard)
export class JoinGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private numOnline: number = 0;

  constructor(private joinService: JoinService) {
  }

  @SubscribeMessage("joinRoom")
  handleJoinRoom(client: Socket, player: any): void {
    this.joinService.joinRoom(player);
  }

  // leave a room
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

// console.log("Client joined room: " + room);
// client.join(room);
// client.emit("joinedRoom", {
//   room: room,
//   success: true,
//   marker: this.numOnline % 2 === 0 ? "X" : "O"
// });