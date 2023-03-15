import { Injectable } from "@nestjs/common";
import { GameRoom } from "./game-room";

@Injectable()
export class GameRoomService {
    private rooms: any[] = [];
    private id = 1;

    getPlayerData(room: string, userId: string): any {
        return this.rooms[room].findPlayer(userId);
    }

    getLastRoom(): any {
        return this.rooms[this.id - 1];
    }

    setupRoom(): void {
        if (this.rooms.length === 0) {
            this.rooms.push(new GameRoom(this.id));
        }

        if (this.rooms[this.id - 1].checkIfRoomIsFull()) {
            this.id++;
            this.rooms.push(new GameRoom(this.id));
        }
    }

    findRoom(roomId: string): any {
        return this.rooms.find((room) => room.id == roomId);
    }

    findPlayer(userId: string): any {
        for (const room of this.rooms) {
            const player = room.findPlayer(userId);
            if (player) {
                return player;
            }
        }
        return null;
    }
}