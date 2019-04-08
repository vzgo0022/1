import { fecHandler } from "../../Type/Interface";

class Server {
  private url: string = "https://foo0022.firebaseio.com/";

  public async request(id: string): Promise<object | string> {
    try {
      const res = await fetch(`${this.url}${id}`);
      if (!res.ok) {
        throw Error("Page Not Found 404");
      }
      const resArr: object = await res.json();
      return resArr;
    } catch (error) {
      return error.message;
    }
  }

  public async handler(id: string, valueSearch: string): Promise<fecHandler> {
    switch (id) {
      case "All":
        id = ".json";
        break;

      case "Mens":
        id = "man.json";
        break;

      case "Womens":
        id = "woman.json";
        break;

      case "Childrens":
        id = "child.json";
        break;
    }
    return await this.request(id)
      .then(resArray => {
        if (typeof resArray === "string") {
          throw Error(resArray); 
        } else if (valueSearch) {
          return {
            array: Object.values(resArray)
              .flat()
              .filter(({ title }) => title.includes(valueSearch)),
            value: valueSearch,
            error: "successfully"
          };
        } else {
          return {
            array: Object.values(resArray).flat(),
            value: valueSearch,
            error: "successfully"
          };
        }
      })
      .catch(error => {
        console.error(error);
        return {
          array: [],
          value: valueSearch,
          error: error.message
        };
      });
  }
}

export default Server;
