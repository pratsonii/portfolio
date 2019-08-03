export class Routes {
  static readonly demo = [
    { name: "Home", path: "home" },
    { name: "Table", path: "table" },
    { name: "Login", path: "login" },
    { name: "UI/UX", path: "uiux/buttons/uiux" }
  ];

  static readonly uiux = [{ name: "Dynamic CSS", path: "uiux/lazyImage" }];

  public static getRoutes(property: string): [] {
    return Routes[property];
  }
}
