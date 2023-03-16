import { Player } from './player';
import { GridSpace } from './grid-space';

export class GameRoom {
  public id: string;
  private maxPlayers = 2;
  private numberOfPlayers = 0;
  private markers = ['X', 'O'];
  public players: Player[] = [];
  public gameState: GridSpace[][] = [];

  constructor(id: string) {
    this.id = 'room' + id;
  }

  public addPlayer(player: Player): void {
    this.players.push(player);
    this.numberOfPlayers++;
  }

  checkIfRoomIsFull(): boolean {
    return this.numberOfPlayers === this.maxPlayers;
  }

  getMarker(): string {
    return this.markers[this.numberOfPlayers];
  }

  findPlayer(userId: string): any {
    return this.players.find((player) => player.id === userId);
  }
}
