import ConsultaModel from "../models/ConsultaModel";

const urlParte1 = 'test';
const urlParte2 = 'app';
const urlParte3 = 'axr';
const urlParte4 = 'eng';

export default class CrawlApiClient {
    resource = '/crawl';

    baseUrl = `http://${urlParte1}${urlParte2}.${urlParte3}${urlParte4}.com:3000`;

    post(parametros: any): Promise<ConsultaModel> {
        var url = this.baseUrl + this.resource;

        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(parametros)
        };

        return fetch(url, config).then(response => response.json());
    }
    getById(id: string): Promise<any> {
        var self = this;
        var url = this.baseUrl + self.resource + '/' + id;

        const config = {
            method: 'GET'
        };

        return fetch(url, config).then(response => response.json());
    }
}