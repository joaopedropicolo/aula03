import styles from '../styles/listaProdutos.module.css'

export default function ListaProdutos({ Lista }) {
  return (
    <div className={styles.blocoPrincipal}>
      <ul className={styles.blocoProdutos}>
        {Lista.map(produto => (
          <li key={produto.id} className={styles.blocoProduto}>
            <div className={styles.produtoContainer}>
              <h2>{produto.title}</h2>
              <p>{produto.description}</p>
              <p>Preço: ${produto.price}</p>
              <img src={produto.image} alt={produto.title} width={100} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}