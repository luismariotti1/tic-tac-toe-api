import { Injectable } from '@nestjs/common';
import { GameRoomService } from './game-room.service';
import { Socket } from 'socket.io';
import { Player } from './player';

@Injectable()
export class JoinService {
  constructor(private gameRoomService: GameRoomService) {}

  // return a object
  joinRoom(userId: string, client: Socket): any {
    this.gameRoomService.setupGameRoom();

    const gameRoom = this.gameRoomService.getGameRoom();
    const marker = gameRoom.getMarker();

    const player = new Player(userId, marker, gameRoom.id, client.id);

    gameRoom.addPlayer(player);
    client.join(gameRoom.id);

    // console.log(gameRoom);

    const readyToStart = this.gameRoomService.getGameRoom().checkIfRoomIsFull();

    return {
      room: gameRoom.id,
      startGame: readyToStart,
    };
  }
}
