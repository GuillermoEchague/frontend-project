export class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthError";
  }
}

export class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}
