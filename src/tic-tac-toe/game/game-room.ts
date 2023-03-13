export class GameRoom {
  private players: any[] = [];
  private playerTurn = 0;
  private markers: string[] = ["X", "O"];
  private maxPlayers: number = 2;
  private id: number;

  constructor(id: number) {
    this.id = id;
  }

  public joinRoom(player: any, client: any): void {
    this.players.push(player);
    client.join(this.id);
  }

  public checkIfRoomIsFull(): boolean {
    return this.players.length === this.maxPlayers;
  }

  public getMarker(): string {
    return this.markers[this.players.length - 1];
  }
}