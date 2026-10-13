import styles from './testimonials.module.css'
export default function TestimonialsFooter({ children }) {
    return(
        <div className={styles.testimonialsFooter}>
            {children}
        </div>
    )
}