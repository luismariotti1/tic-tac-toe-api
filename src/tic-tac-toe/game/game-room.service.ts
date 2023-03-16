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

  findPlayer(userId: string): Player | null {
    for (let i = 0; i < this.gameRooms.length; i++) {
      const player = this.gameRooms[i].findPlayer(userId);
      if (player) {
        return player;
      }
    }

    return null;
  }
}
