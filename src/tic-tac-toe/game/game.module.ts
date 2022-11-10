import { Module } from '@nestjs/common';
import { GameGateway } from './game.gateway';
import { BoardService } from './board.service';
import { JoinService } from './join.service';

@Module({
  providers: [
    GameGateway,
    BoardService,
    JoinService,
  ]
})
export class GameModule {}
