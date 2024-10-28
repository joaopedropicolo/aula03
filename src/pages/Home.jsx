import { useEffect, useState } from "react";
import ListaProdutos from "../components/ListaProdutos";


export default function Home(){

const [Lista,setLista] = useState([]);

    useEffect(() => {
        const receberListaProduto = async () => {
            try{
                const resposta = await fetch('https://fakestoreapi.com/products')
                const dados = await resposta.json();
                setLista(dados)
            } catch (erro) {
                alert("ERROR")
            }
        }
        receberListaProduto()
    }, []);

return (
    <>
    <h1>Lista de Produtos</h1>
    <ListaProdutos Lista={Lista}/>
    </>
)}