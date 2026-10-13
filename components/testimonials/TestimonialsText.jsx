import styles from './testimonials.module.css'
export default function TestimonialsText({ children, ...rest }) {
    return(
        <div className={styles['testimonials-text']} {...rest}>
            {children}
        </div>
    )
}