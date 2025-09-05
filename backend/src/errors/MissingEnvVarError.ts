export class MissingEnvVarError extends Error {
  constructor(varName: string) {
    super(`Missing required environment variable: ${varName}`);
    this.name = "MissingEnvVarError";
  }
}
