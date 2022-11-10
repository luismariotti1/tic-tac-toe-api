import { Injectable } from '@nestjs/common';
import { WsException } from "@nestjs/websockets";

@Injectable()
export class JoinService {
  private players: string[] = [];

  joinGame(player: string): string {
    this.players.push(player);
    return this.players.length === 1 ? 'X' : 'O';
  }
}
