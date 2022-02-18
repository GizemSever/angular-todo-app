import {BoardType} from './board-type.enum';

export class Board {

  constructor(
    public id: number,
    public project_id: number,
    public name: string,
    public type?: BoardType,
    public created_at?: Date,
    public updated_at?: Date
  ) {
  }
}
