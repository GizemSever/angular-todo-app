export class Task {
  constructor(
    public title: string,
    public description: string,
    public is_complete: boolean,
    public board_id: number,
    public completed_at?: Date,
    public id?: number,
    public created_at?: Date,
    public updated_at?: Date
  ) {
  }
}
