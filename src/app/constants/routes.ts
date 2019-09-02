export class Routes {
  static readonly demo = [
    { name: "Home", path: "home" },
    { name: "Table", path: "table" },
    { name: "Login", path: "login" },
    { name: "UI/UX", path: "uiux/buttons/uiux" },
    { name: "AI/ML", path: "artificial/buttons/artificial" }
  ];

  static readonly uiux = [{ name: "Dynamic CSS", path: "uiux/lazyImage" }];

  static readonly artificial = [{ name: "Image Classifier", path: "artificial/imageClassifier" }];

  public static getRoutes(property: string): [] {
    return Routes[property];
  }
}
