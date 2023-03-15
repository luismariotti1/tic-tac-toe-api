import { GridSpace } from "./grid-space";

export class GameRoom {
  private players: any[] = [];
  private markers: string[] = ["X", "O"];
  private maxPlayers: number = 2;
  private id: number;
  private playerTurn = 0;
  private roomReady: boolean = false;
  private board: GridSpace[][] = [];

  constructor(id: number) {
    this.id = id;
  }

  public joinRoom(userId: any, client: any): void {
    let player = {
      id: userId,
      room: this.id,
      marker: this.getMarker(),
      turn: this.playerTurn++ % 2 === 0 ? true : false
    }

    this.players.push(player);

    client.join(this.id);

    if (this.players.length === this.maxPlayers) {
      this.roomReady = true;
    }
  }

  public findPlayer(id: any): any {
    return this.players.find((player) => player.id === id);
  }

  public checkIfRoomIsFull(): boolean {
    return this.players.length === this.maxPlayers;
  }

  public getMarker(): string {
    if (this.players.length === 0) {
      return this.markers[0];
    }

    return this.markers[1];
  }
}