import { Injectable } from "@nestjs/common";
import { GameRoom } from "./game-room";

@Injectable()
export class JoinService {
  private rooms: any[] = [];

  joinRoom(room: string, player: any): any {
    if (!this.checkIfRoomExists(room)) this.rooms.push(new GameRoom(room));

    const gameRoom = this.getRoom(room);

    if (gameRoom.joinRoom(player)) {
      player.join(room);
      player.emit("joinedRoom", {
        room: room,
        success: true,
        marker: gameRoom.getMarker()
      });
    } else {
      player.emit("joinedRoom", {
        room: room,
        success: false
      });
    }
  }

  private getRoom(room: string): GameRoom {
    return this.rooms.find((r) => r.roomName === room);
  }

  private checkIfRoomExists(room: string): boolean {
    return this.rooms.some((r) => r.roomName === room);
  }
}
