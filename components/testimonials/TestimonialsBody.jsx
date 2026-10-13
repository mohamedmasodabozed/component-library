
import styles from './testimonials.module.css'
import { FaQuoteLeft } from "react-icons/fa";
import {TestimonialsContext} from './TestimonialsContainer';
import React from 'react';
export default function TestimonialsBody({ children , ...rest}) {
    const { hasImage } = React.useContext(TestimonialsContext);
    return(
        <div {...rest} className={!hasImage ? styles['testimonialsBody'] + ' ' + styles['testimonialsBodyNoImage'] : styles['testimonialsBody']}>
            <FaQuoteLeft />
            {children}
        </div>
    )
}