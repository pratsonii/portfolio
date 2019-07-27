export class Routes {
  static readonly demo = [
    { name: "Home", path: "home" },
    { name: "Table", path: "table" },
    { name: "Login", path: "login" },
    { name: "lazyImage", path: "uiux/lazyImage" }
  ];

  public static getRoutes(property: string): [] {
    return Routes[property];
  }
}
