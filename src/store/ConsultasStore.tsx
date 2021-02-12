import ConsultaModel from "../models/ConsultaModel";

const storeKey = 'consultas';
export default class ConsultasStore {

    static adicionar(id: string, keyword: string): void {
        const consultas = this.listar();
        consultas.push(new ConsultaModel(id, keyword));
        this.definir(consultas);
    }

    static deletar(consulta: ConsultaModel): void {
        const consultas = this.listar();

        const index = consultas.indexOf(consulta);
        if (index > -1)
            consultas.splice(index, 1);

        this.definir(consultas);
    }

    static listar(): ConsultaModel[] {
        const valor = localStorage.getItem(storeKey);

        if (!valor) return [];

        return JSON.parse(valor) as ConsultaModel[];
    }

    private static definir(consultas: ConsultaModel[]) {
        localStorage.setItem(storeKey, JSON.stringify(consultas));
    }
}
