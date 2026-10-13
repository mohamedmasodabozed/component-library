import React from 'react'
import styles from './card.module.css'
export default function CardHeader({ children  , ...rest}) {
    return(
        <div className={styles['card-header']} {...rest}>
            {children}
        </div>
    )
}