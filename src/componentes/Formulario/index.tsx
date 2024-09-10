import { useEffect, useState } from "react";

const Formulario = () => {

    // cria um estado p/ alterar valores reativos no compente
    let [materiaA, setValorA] = useState(0);
    let [materiaB, setValorB] = useState(0);
    let [materiaC, setValorC] = useState(0);
    let [nome, setNome] = useState('');

    // criar um efeito atrelado a alguma mudanca
    useEffect(() => {
        console.log('o fomulario comecou');

        return () => {
            console.log('o formulario fechou');
        }
    }, [])

    useEffect(() => {
        console.log('o estado mudou')
    }, [nome, materiaA, materiaB, materiaC])

    const alteraNome = (evento: any) => {
        console.log(evento.target.value);
        nome = evento.target.value;
        // primeira maneira
        // setNome(nome);
        // segunda maneira
        setNome(estadoAnterior => {
            console.log(estadoAnterior);
            return nome;
        })
    }

    const renderizaResultado = () => {
        try {
            const soma = (materiaA as number) + (materiaB as number) + (materiaC as number);
            const media = soma / 3;

            console.log(media);

            if (media >= 7) {
                return (
                    <p>{nome} voce foi aprovado</p>
                )
            } else {
                return (
                    <p>{nome} voce nao foi aprovado</p>
                )
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form action="">
                <input type="text" placeholder="Digite seu nome" onChange={alteraNome} />
                <input type="number" placeholder="Nota materia A" onChange={(evento) => setValorA(parseFloat(evento.target.value))} />
                <input type="number" placeholder="Nota materia B" onChange={(evento) => setValorB(parseFloat(evento.target.value))} />
                <input type="number" placeholder="Nota materia C" onChange={(evento) => setValorC(parseFloat(evento.target.value))} />
                {renderizaResultado()}
            </form>
            <ul>
                {[1, 2, 3, 4, 5].map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Formulario