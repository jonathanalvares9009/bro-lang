export default class nothingPointerException extends Error {
  constructor(errorMessage: string) {
    console.log("nothingPointerException");
    const errorName = "nothingPointerException";
    errorMessage = errorName + ": " + errorMessage;
    super(errorMessage);
    this.name = errorName;
    this.message = errorMessage;
  }
}
