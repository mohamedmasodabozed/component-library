import styles from './card.module.css'
export default function CardBody({ children }) {
    return(
        <div className={styles['card-body']}>
            {children}
        </div>
    )
}