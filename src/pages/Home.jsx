import { useEffect, useState } from "react";
import ListaProdutos from "../components/ListaProdutos";

export default function Home(){
const [Lista, setLista] = useState([]);

    useEffect(() => {
        const receberListaProduto = async () => {
            try{
                const resposta = await fetch('https://fakestoreapi.com/products')
                const dados = await resposta.json();
                setLista(dados)
            } catch (erro) {
                console.error("Erro na API! Produtos não exibidos.");
                alert('Erro na API!')
            }
        }
        receberListaProduto()
    }, []);

const ordeAz = () =>{
    const listAux = [...Lista].sort((a, b) => a.title.localeCompare(b.title));
    setLista(listAux);
}

const ordeZa = () => {
    const listAux = [...Lista].sort((a, b) => b.title.localeCompare(a.title));
    setLista(listAux);
};

    if (Lista.length === 0){
        return <h1>Carregando...</h1>
    }

return (
    <>
    <h1>Lista de Produtos</h1>
    <button onClick={() => ordeAz()}>A-Z</button>
    <button onClick={() => ordeZa()}>Z-A</button>
    <ListaProdutos Lista={Lista}/>
    </>
)}