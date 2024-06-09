export default class UnsupportedTypeException extends Error {
  constructor(errorMessage: string) {
    console.log("Parser => UnsupportedTypeException");
    super(errorMessage);
    this.name = "UnsupportedTypeException";
    this.message = errorMessage;
  }
}
