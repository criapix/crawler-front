import { useState } from "react";
import ConsultasStore from "../../store/ConsultasStore";

const Resultado = () => {

    const [lista, setLista] = useState(ConsultasStore.listar());



    return <div>
        {lista.map(i => <div>{ i.keyword }</div>)}
    </div>
}

export default Resultado;