import styles1 from './badge.module.css'
export default function BadgeContainer({children , axis , styles , ...rest}){
    return(
        <div className={`${styles1.badgeContainer} ${styles1[axis]}`} style={styles} {...rest}>
            {children}
        </div>
    )
}