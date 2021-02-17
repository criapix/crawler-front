import CrawlerModel from "../models/CrawlerModel";

const storeKey = 'crawlers';
export default class CrawlerStore {

    static addItem(id: string, keyword: string): void {
        const consultas = this.list();
        consultas.push(new CrawlerModel(id, keyword));
        this.setList(consultas);
    }

    static deleteItem(consulta: CrawlerModel): void {
        const crawlers = this.list();

        const index = crawlers.indexOf(consulta);
        if (index > -1)
            crawlers.splice(index, 1);

        this.setList(crawlers);
    }

    static list(): CrawlerModel[] {
        const valor = localStorage.getItem(storeKey);

        if (!valor) return [];

        return JSON.parse(valor) as CrawlerModel[];
    }

    private static setList(consultas: CrawlerModel[]) {
        localStorage.setItem(storeKey, JSON.stringify(consultas));
    }
}
