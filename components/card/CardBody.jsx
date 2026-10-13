import styles from './card.module.css'
export default function CardBody({ children , ...rest}) {
    return(
        <div className={styles['card-body']} {...rest}>
            {children}
        </div>
    )
}