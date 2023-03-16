import { Player } from './player';
import { GridSpace } from './grid-space';

export class GameRoom {
  public id: string;
  private maxPlayers = 2;
  private numberOfPlayers = 0;
  private markers = ['X', 'O'];
  public players: Player[] = [];
  public gameState: GridSpace[][] = [];
  public turn = 0;

  constructor(id: string) {
    this.id = 'room' + id;
  }

  public addPlayer(player: Player): void {
    if (this.numberOfPlayers === 0) {
      player.isTurn = true;
    }
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

  changeTurn(): void {
    this.players[this.turn % 2].isTurn = false;
    this.players[(this.turn + 1) % 2].isTurn = true;
    this.turn++;
  }
}
