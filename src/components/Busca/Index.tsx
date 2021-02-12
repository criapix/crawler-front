import React, { FormEvent, useState } from "react";
import CrawlApiClient from "../../ApiClients/CrawlApiClient";
import ConsultasStore from "../../store/ConsultasStore";
import { Formulario, Campo, Botao } from "../../styled/Index";


const Busca = () => {
    const [termoBusca, setTermoBusca] = useState("");

    return (
        <Formulario onSubmit={onSubmit}>
            <Campo type="text" placeholder="Digite o termo buscado" value={termoBusca} onChange={onChange} minLength={4} maxLength={32} required={true} />
            <Botao>Buscar</Botao>
        </Formulario>
    );


    function onChange(Event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = Event.target;
        setTermoBusca(value);
    }



    function onSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(e);

        const valido = validarConsulta();

        if (valido)
            new CrawlApiClient().post({ "keyword": termoBusca }).then(consulta => {
                ConsultasStore.adicionar(consulta.id, termoBusca);
                setTermoBusca('');
            });
    };

    function validarConsulta(): boolean {
        var consultas = ConsultasStore.listar();

        if (consultas.some(c => c.keyword === termoBusca)) {
            alert("Termo buscado já inserido anteriormente");
            return false;
        }

        return true;
    }
};

export default Busca;