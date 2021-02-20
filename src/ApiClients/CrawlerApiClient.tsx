import CrawlerModel from "../models/CrawlerModel";
import ResultadoModel from "../models/ResultadoModel";

const urlParte1 = "test";
const urlParte2 = "app";
const urlParte3 = "axr";
const urlParte4 = "eng";

export default class CrawlerApiClient {
  resource = "/crawl";

  baseUrl = `http://${urlParte1}${urlParte2}.${urlParte3}${urlParte4}.com:3000`;

  async post(parametros: any): Promise<CrawlerModel> {
    var url = this.baseUrl + this.resource;

    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parametros),
    };

    const response = await fetch(url, config);
    return await response.json();
  }
  async getById(id: string): Promise<ResultadoModel> {
    var self = this;
    var url = this.baseUrl + self.resource + "/" + id;

    const config = {
      method: "GET",
    };

    const response = await fetch(url, config);
    return await response.json();
  }
}
