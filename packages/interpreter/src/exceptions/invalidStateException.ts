export default class InvalidStateException extends Error {
  constructor(errorMessage: string) {
    console.log("InvalidStateException");
    super(errorMessage);
    this.name = "InvalidStateException";
    this.message = errorMessage;
  }
}
