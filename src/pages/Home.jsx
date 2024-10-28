import { useEffect, useState } from "react";

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
    <ul>
        {Lista.map(produto => (
            <li key={produto.id}>
                <h2>{produto.title}</h2>
                <p>{produto.description}</p>
                <p>Preço: R${produto.price}</p>
            </li>
        ))}
    </ul>
    </>
)}


