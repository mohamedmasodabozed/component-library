import styles from './testimonials.module.css'
export default function TestimonialsImage({ src , alt , ...rest}) {
    return(
        <div className={styles['testimonials-image']} {...rest}>
            <img src={src} alt={alt} />
        </div>
    )
}