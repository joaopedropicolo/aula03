export default function FiltrosLista({Lista}){

    const ordeAz = () =>{
        const listAux = [...Lista].sort((a, b) => a.title.localeCompare(b.title));
        setLista(listAux);
    }
    
    const ordeZa = () => {
        const listAux = [...Lista].sort((a, b) => b.title.localeCompare(a.title));
        setLista(listAux);
    };

    return(
        <div>
            <button onClick={() => ordeAz()}>A-Z</button>
            <button onClick={() => ordeZa()}>Z-A</button>
        </div>
    )
}