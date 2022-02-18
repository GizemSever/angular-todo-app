import {BoardType} from './board-type.enum';
import {Task} from '../task/task.model';

export class Board {

  constructor(
    public id: number,
    public project_id: number,
    public name: string,
    public type?: BoardType,
    public created_at?: Date,
    public updated_at?: Date,
    public tasks?: Task[]
  ) {
  }
}
