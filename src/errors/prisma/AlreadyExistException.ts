class AlreadyExistException extends Error {
  constructor(column: string) {
    super(`Already exist: ${column}`);
    this.name = "AlreadyExistException";
  }
}

export default AlreadyExistException;
