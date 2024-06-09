export default class nothingPointerException extends Error {
  constructor(errorMessage: string) {
    console.log("Parser => nothingPointerException");
    const errorName = "nothingPointerException";
    errorMessage = errorName + ": " + errorMessage;
    super(errorMessage);
    this.name = errorName;
    this.message = errorMessage;
  }
}
