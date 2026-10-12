import React from 'react'
import styles1 from './badge.module.css'
export default function Badge({ children , type, bgColor ,styles ,axis ,...rest }) {
    if(!type){
        throw new Error('type is required')
    }
    if(!bgColor){
        throw new Error('bgColor is required')
    } 
    if(type !== 'pill' && type !== 'square'){
        throw new Error('type should be either pill or square')
    }
    return(
        <div className={`${styles1.badge} ${styles1[type]} ${styles1[bgColor]} ${bgColor} ${styles1[axis]}`} style={styles} {...rest}>
            {children}
        </div>
    )
}