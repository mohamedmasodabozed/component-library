import styles from './card.module.css'
export default function CardContainer({ children , axis , ...rest}) {
    return(
        <div className={styles['card-container'] + ' ' + styles[`card-container-${axis}`]} {...rest}>
            {children}
        </div>
    )
}