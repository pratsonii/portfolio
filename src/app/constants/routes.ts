export class Routes {
  static readonly demo = [
    { name: "Login", path: "login", title: "Login and Registration" },
    {
      name: "UI/UX",
      path: "uiux/buttons/uiux",
      title: "UI/UX related functionalities"
    },
    {
      name: "AI/ML",
      path: "artificial/buttons/artificial",
      title: "Artificial Intelligence and Machine Learning"
    }
  ];

  static readonly uiux = [
    {
      name: "Dynamic CSS",
      path: "uiux/lazyImage",
      title: "Dynamic CSS on cursor hover"
    },
    { name: "Table", path: "uiux/table", title: "Table using Ant design" },
    {
      name: "Animation on Scroll",
      path: "uiux/animate",
      title: "Animation using Laxx.js"
    }
  ];

  static readonly artificial = [
    {
      name: "Image Classifier",
      path: "artificial/imageClassifier",
      title: "Image classifier using Tensorflow"
    }
  ];

  public static getRoutes(property: string): [] {
    return Routes[property];
  }
}
