import CrawlerModel from "../models/CrawlerModel";

const storeKey = 'crawlers';
export default class CrawlerStore {

    static addItem(id: string, keyword: string): void {
        const consultas = this.list();
        consultas.push(new CrawlerModel(id, keyword));
        this.setList(consultas);
    }
    static updateItemStatus(id: string, status: string, urls?: string[]): void {
        const consultas = this.list();
        const consulta = consultas.find(c => c.id === id);

        if (!consulta) return;

        consulta.status = status;
        consulta.urls = urls;

        this.setList(consultas);
    }

    static deleteItem(id: string): void {
        const crawlers = this.list();
        const aux = crawlers.filter((c) => c.id !== id);
        this.setList(aux);
    }

    static list(): CrawlerModel[] {
        const valor = localStorage.getItem(storeKey);

        if (!valor) return [];

        return JSON.parse(valor) as CrawlerModel[];
    }

    static setList(consultas: CrawlerModel[]) {
        localStorage.setItem(storeKey, JSON.stringify(consultas));
    }
}
