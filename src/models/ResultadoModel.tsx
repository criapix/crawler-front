export default class ResultadoModel {
  id: string;
  status: string;
  urls: string[];

  constructor(id: string, status: string, urls: string[]) {
    this.id = id;
    this.status = status;
    this.urls = urls;
  }
}
