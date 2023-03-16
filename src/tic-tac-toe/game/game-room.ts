import { Player } from './player';

export class GameRoom {
  public id: string;
  public players: Player[] = [];
  private maxPlayers = 2;
  private numberOfPlayers = 0;

  constructor(id: string) {
    this.id = id;
  }

  public addPlayer(player: Player): void {
    this.players.push(player);
    this.numberOfPlayers++;
  }

  checkIfRoomIsFull(): boolean {
    return this.numberOfPlayers === this.maxPlayers;
  }
}
