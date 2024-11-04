import { useEffect, useState } from "react";
import ListadeProdutos from "../components/Listadeprodutos";

export default function App() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                setLista(dados);
            } catch (error) {
                console.error("A conexão com a API falhou:", error);
                alert("A conexão com a API falhou!");
            }
        };
        receberListaProdutos();
    }, []);

    return (
        <>
            <ListadeProdutos lista={lista} />
        </>
    );
}
