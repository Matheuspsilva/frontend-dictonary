export class AppConstants {

  public static get baseServidor(): string {
    return "http://localhost:8080/api-dictionary/"
  }

  public static get baseLogin(): string {
    return this.baseServidor + "auth/signin"
  }

  public static get baseUrl(): string {
    return this.baseServidor
  }

}
