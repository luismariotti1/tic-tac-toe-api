export class GridSpace {
  private Row = 0;
  private Column = 0;
  private Mark = "";
  private IsMarked = false;

  getMark(): string {
    return this.Mark;
  }

  setMark(mark: string): void {
    this.Mark = mark;
  }

  setRow(row: number): void {
    this.Row = row;
  }

  setColumn(column: number): void {
    this.Column = column;
  }
}