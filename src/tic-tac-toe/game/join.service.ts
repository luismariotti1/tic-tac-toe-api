import { Injectable } from "@nestjs/common";
import { GameRoom } from "./game-room";
import { GameRoomService } from "./game-room.service";

@Injectable()
export class JoinService {
  constructor(private gameRoomService: GameRoomService) {
  }

  joinRoom(userId: any, client: any): any {
    this.gameRoomService.setupRoom();
    let room = this.gameRoomService.getLastRoom();
    room.joinRoom(userId, client);

    if (room.roomReady) {
      return { room: room.id, success: true, startGame: true }
    } else {
      return { room: room.id, success: true, startGame: false }
    }
  }
}
