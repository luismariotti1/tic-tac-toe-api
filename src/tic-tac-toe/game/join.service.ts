import { Injectable } from '@nestjs/common';
import { GameRoom } from './game-room';
import { GameRoomService } from './game-room.service';
import { Socket } from 'socket.io';
import { Player } from './player';

@Injectable()
export class JoinService {
  private id = 1;
  private gameRooms: GameRoom[] = [];
  constructor(private gameRoomService: GameRoomService) {}

  joinRoom(userId: string, client: Socket): any {
    const roomId = 'room' + this.id;
    let readyToStart = false;

    if (this.gameRooms.length === 0) {
      this.gameRooms.push(new GameRoom(roomId));
    }

    const gameRoom = this.gameRooms[this.gameRooms.length - 1];
    console.log(this.gameRooms.length);

    const player = new Player(userId);
    gameRoom.addPlayer(player);

    if (gameRoom.checkIfRoomIsFull()) {
      readyToStart = true;
      this.id++;
      this.gameRooms.push(new GameRoom(roomId));
    }

    console.log(roomId);
    client.join(roomId);

    return {
      room: gameRoom.id,
      startGame: readyToStart,
    };
  }
}
