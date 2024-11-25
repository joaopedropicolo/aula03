import styles from '../styles/loading.module.css'

export default function Loading (){
    return(
        <>
        <h1>Carregando...</h1>
        <img className={styles.img} src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/refs/heads/main/svg-css/12-dots-scale-rotate.svg"></img>
        </>
    )
}