export class GameRoom {
  private players: any[] = [];
  private playerTurn = 0;
  private markers: string[] = ["X", "O"];
  private maxPlayers: number = 2;
  private roomName: string;

  constructor(roomName: string) {
    this.roomName = roomName;
  }

  public joinRoom(player: any): boolean {
    if (this.checkIfRoomIsFull()) return false;
    this.players.push(player);
    return true;
  }

  public checkIfRoomIsFull(): boolean {
    return this.players.length === this.maxPlayers;
  }

  public getMarker(): string {
    return this.markers[this.players.length - 1];
  }
}