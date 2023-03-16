export class Player {
  public id: string;
  public socketId: string;
  public username: string;
  public room: string;
  public marker: string;
  public isTurn;

  constructor(
    id: string,
    marker: string,
    room: string,
    socketId: string,
    isTurn = false,
  ) {
    this.id = id;
    this.room = room;
    this.marker = marker;
    this.isTurn = isTurn;
    this.socketId = socketId;
  }
}
