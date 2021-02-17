import React, { FormEvent, useState } from "react";
import CrawlerStore from "../../store/CrawlerStore";
import { StyledForm, StyledField, StyledButton } from "../../styled/Index";


interface FormProps {
    onSend: (keyword: string) => void;
}

const Form = ({ onSend }: FormProps) => {
    const [keyword, setKeyword] = useState("");

    return (
        <StyledForm onSubmit={onSubmit}>
            <StyledField type="text" placeholder="Digite o termo buscado" value={keyword} onChange={onChange} minLength={4} maxLength={32} required={true} />
            <StyledButton>Buscar</StyledButton>
        </StyledForm>
    );


    function onChange(Event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = Event.target;
        setKeyword(value);
    }



    function onSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(e);

        const valido = submitValidate();

        if (valido) {
            onSend(keyword);
            setKeyword('');
        }
    };

    function submitValidate(): boolean {
        var crawlers = CrawlerStore.list();

        if (crawlers.some(c => c.keyword === keyword)) {
            alert("Termo buscado já inserido anteriormente");
            return false;
        }

        return true;
    }
};

export default Form;