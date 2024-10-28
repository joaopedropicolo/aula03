import styles from '../styles/listaProdutos.module.css'

export default function ListaProdutos( {Lista} ){
    return(
        <div className={styles.blocoPrincipal}>
        <ul className={styles.blocoLista}>
        {Lista.map(produto => (
            <li key={produto.id}>
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
            <p>Preço: ${produto.price}</p>
            <img src={produto.image} alt={produto.title} width={100} />
          </li>
        ))}
    </ul>
    </div>
    )
}