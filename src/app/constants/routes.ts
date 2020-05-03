export class Routes {
  static readonly demo = [
    { name: "Login", path: "login", title: "Login and Registration" },
    {
      name: "UI/UX",
      path: "uiux/buttons/uiux",
      title: "UI/UX related functionalities",
    },
    {
      name: "AI/ML",
      path: "artificial/buttons/artificial",
      title: "Artificial Intelligence and Machine Learning",
    },
  ];

  static readonly uiux = [
    {
      name: "Full Page Dashboard",
      path: "uiux/dashboard",
      title: "Full Page Dashboard",
    },
    {
      name: "Animation on Scroll",
      path: "uiux/animate",
      title: "Animation using Laxx.js",
    },
    {
      name: "Dynamic CSS",
      path: "uiux/dynamicCursor",
      title: "Dynamic CSS on cursor hover",
    },
    {
      name: "Lazy Image",
      path: "uiux/lazyImage",
      title: "Loads images on scrolling",
    },
    { name: "Table", path: "uiux/table", title: "Table using Ant design" },
    {
      name: "Text Outline effect",
      path: "uiux/textOutline",
      title: "Text Outline effect on scroll",
    },
  ];

  static readonly artificial = [
    {
      name: "Image Classifier",
      path: "artificial/imageClassifier",
      title: "Image classifier using Tensorflow",
    },
  ];

  public static getRoutes(property: string): [] {
    return Routes[property];
  }
}
