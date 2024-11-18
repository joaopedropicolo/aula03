import { useEffect, useState } from "react";
import FiltrosLista from "../components/FiltrosLista";
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

    if (Lista.length === 0){
        return <h1>Carregando...</h1>
    }

return (
    <>
    <h1>Lista de Produtos</h1>
    <FiltrosLista Lista={Lista}/>
    <ListaProdutos Lista={Lista}/>
    </>
)}