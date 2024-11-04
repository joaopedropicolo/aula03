import { useEffect, useState } from "react";
import ListadeProdutos from "../components/Listadeprodutos";
import Loading from "../components/loading";

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

    if (lista.length === 0) { 
        return <Loading />; 
    }

    return (
        <div>
            <h2 className="Home">Listagem de Produtos</h2>
            <ListadeProdutos lista={lista} />
        </div>
    );
}
