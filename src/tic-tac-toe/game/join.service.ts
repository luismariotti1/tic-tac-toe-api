import { Injectable } from "@nestjs/common";
import { GameRoom } from "./game-room";

@Injectable()
export class JoinService {
  // private rooms: any[] = [];
  // private roomId = 1;
  private players: number = 0;

  joinRoom(player: any, client: any): any {
    client.join("room1");
    this.players++;
    if (this.players === 2) {
      return { room: "room1", success: true, startGame: true, marker: "X" }
    } else {
      return { room: "room1", success: true, startGame: false, marker: "O" }
    }

    // console.log(player);

    // this.setUpRoom();

    // let room = this.rooms[this.rooms.length - 1];
    // console.log(room.id)
    // room.joinRoom(room.id, client);

    // client.to(room.id).emit("startGame");

    // if (!this.checkIfRoomExists(room)) this.rooms.push(new GameRoom(room));

    // const gameRoom = this.getRoom(room);

    // if (gameRoom.joinRoom(player)) {
    //   player.join(room);
    //   player.emit("joinedRoom", {
    //     room: room,
    //     success: true,
    //     marker: gameRoom.getMarker()
    //   });
    // } else {
    //   player.emit("joinedRoom", {
    //     room: room,
    //     success: false
    //   });
    // }
  }

  // private setUpRoom(): void {
  //   // if the array is empty create a new room
  //   if (this.rooms.length === 0) {
  //     this.rooms.push(new GameRoom(this.roomId));
  //     this.roomId++;
  //     return;
  //   }

  //   const lastRoom = this.rooms[this.rooms.length - 1];
  //   if (lastRoom.checkIfRoomIsFull()) {
  //     this.rooms.push(new GameRoom(this.roomId));
  //     this.roomId++;
  //   }
  // }

  // private getRoom(room: string): GameRoom {
  //   return this.rooms.find((r) => r.roomName === room);
  // }

  // private checkIfRoomExists(room: string): boolean {
  //   return this.rooms.some((r) => r.roomName === room);
  // }
}
