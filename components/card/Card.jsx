import styles from './Card.module.css'
export default function Card({ children ,...rest}){
    return(
       <div className={styles['card']} {...rest}>
        {children}
       </div>
    )
}