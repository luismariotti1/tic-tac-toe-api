export class GameRoom {
  private players: any[] = [];
  private playerTurn = 0;
  private markers: string[] = ["X", "O"];
  private maxPlayers: number = 2;
  private id: number;

  constructor(id: number) {
    this.id = id;
    console.log("Created room: " + this.id);
  }

  public joinRoom(player: any): void {
    this.players.push(player);
  }

  public checkIfRoomIsFull(): boolean {
    return this.players.length === this.maxPlayers;
  }

  public getMarker(): string {
    return this.markers[this.players.length - 1];
  }
}