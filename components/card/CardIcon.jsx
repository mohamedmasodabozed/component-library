import styles from './Card.module.css'
export default function CardIcon({ children , ...rest}) {
    return(
        <div className={styles['card-icon']} {...rest}>
            {children}
        </div>
    )
}