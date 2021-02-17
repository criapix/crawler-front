export default class CrawlerModel {
    id: string;
    keyword: string;
    status?: string;

    constructor(id: string, keyword: string) {
        this.id = id;
        this.keyword = keyword;
    }
}