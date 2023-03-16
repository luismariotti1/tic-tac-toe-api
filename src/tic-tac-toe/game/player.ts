export class Player {
  public id: string;
  public room: string;
  public marker: string;

  constructor(id: string, marker: string, room: string) {
    this.id = id;
    this.room = room;
    this.marker = marker;
  }
}
