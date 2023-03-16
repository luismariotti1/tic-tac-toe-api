import { Injectable } from '@nestjs/common';
import { GameRoom } from './game-room';
import { Player } from './player';

@Injectable()
export class GameRoomService {
  public id = 1;
  public gameRooms: GameRoom[] = [];

  setupGameRoom(): void {
    if (this.gameRooms.length === 0) {
      this.createGameRoom();
    }

    if (this.getGameRoom().checkIfRoomIsFull()) {
      this.id++;
      this.createGameRoom();
    }
  }

  private createGameRoom() {
    this.gameRooms.push(new GameRoom(this.id.toString()));
  }

  getGameRoom(): GameRoom {
    return this.gameRooms[this.gameRooms.length - 1];
  }

  findGameRoom(roomId: string): GameRoom | null {
    return this.gameRooms.find((gameRoom) => gameRoom.id === roomId) || null;
  }

  changeTurn(roomId: string): void {
    const gameRoom = this.findGameRoom(roomId);
    gameRoom.changeTurn();
  }

  findPlayer(userId: string): Player | null {
    console.log(userId);
    for (let i = 0; i < this.gameRooms.length; i++) {
      const player = this.gameRooms[i].findPlayer(userId);
      if (player) {
        return player;
      }
    }

    return null;
  }

  getPlayers(roomId: string): Player[] {
    const gameRoom = this.findGameRoom(roomId);
    return gameRoom.players;
  }
}
