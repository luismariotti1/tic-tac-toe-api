import { Injectable } from "@nestjs/common";

@Injectable()
export class PlayerService {
  private readonly id: number = 0;
  private readonly name: string = "";
  private wins: number = 0;
  private losses: number = 0;
  private ties: number = 0;
  private marker: string = "";

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getWins(): number {
    return this.wins;
  }

  getLosses(): number {
    return this.losses;
  }

  getTies(): number {
    return this.ties;
  }

  getMarker(): string {
    return this.marker;
  }

  setMarker(marker: string): void {
    this.marker = marker;
  }

  addWin(): void {
    this.wins++;
  }

  addLoss(): void {
    this.losses++;
  }

  addTie(): void {
    this.ties++;
  }
}
