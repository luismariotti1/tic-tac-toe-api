import { Module } from '@nestjs/common';
import { GameGateway } from './game.gateway';
import { BoardService } from './board.service';
import { JoinService } from './join.service';
import { JoinGateway } from './join.gateway';
import { GameRoomService } from './game-room.service';

@Module({
  providers: [
    GameGateway,
    BoardService,
    JoinService,
    JoinGateway,
    GameRoomService
  ]
})
export class GameModule {}
