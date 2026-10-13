import styles from './card.module.css'
export default function CardContainer({ children , axis }) {
    return(
        <div className={styles['card-container'] + ' ' + styles[`card-container-${axis}`]}>
            {children}
        </div>
    )
}