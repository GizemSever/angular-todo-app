export class ApiResponse<T> {
  public success = false;
  public message = '';
  public data?: T | null;
  public errors?: T[] | null;
}
