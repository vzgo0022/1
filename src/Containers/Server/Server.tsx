import { faceProductList } from "../../Type/Interface";

class Server {
  private url: string = "https://foo0022.firebaseio.com/";

  public async request(categories: string): Promise<object | string> {
    try {
      const res = await fetch(`${this.url}${categories}`);
      if (!res.ok) {
        throw new Error("Page Not Found 404");
      }
      const resArr: object = await res.json();
      return resArr;
    } catch (error) {
      return error.message;
    }
  }

  public async handlerSearch(
    categories = ".json",
    valueSearch = ""
  ): Promise<faceProductList[] | string> {
    const prodObj = await this.request(categories);
    if (typeof prodObj === "string") {
      return prodObj;
    } else if (categories === ".json") {
      return Object.values(prodObj)
        .map(v => Object.values(v).flat())
        .flat()
        .filter(({ title }) => title.includes(valueSearch));
    } else {
      return Object.values(prodObj)
        .flat()
        .filter(({ title }) => title.includes(valueSearch));
    }
  }
  public async handlerCategories(
    categories: string
  ): Promise<faceProductList[] | string> {
    const prodObj = await this.request(categories);
    if (typeof prodObj === "string") {
      return prodObj;
    } else {
      return Object.values(prodObj).flat();
    }
  }
}
export default Server;
