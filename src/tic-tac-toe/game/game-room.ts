import { Player } from './player';

export class GameRoom {
  public id: string;
  public players: Player[] = [];
  private maxPlayers = 2;
  private numberOfPlayers = 0;

  private markers = ['X', 'O'];

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
