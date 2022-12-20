import { Module } from '@nestjs/common';
import { GameGateway } from './game.gateway';
import { BoardService } from './board.service';
import { JoinService } from './join.service';
import { JoinGateway } from './join.gateway';

@Module({
  providers: [
    GameGateway,
    BoardService,
    JoinService,
    JoinGateway,
  ]
})
export class GameModule {}
