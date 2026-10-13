import styles from './testimonials.module.css'
import React from 'react';
const TestimonialsContext = React.createContext();
export default function TestimonialsContainer({ children , ...rest}) {
    console.log('TestimonialsContainer', children)
    const childrenArray = React.Children.toArray(children);
    const hasImage = childrenArray.some(child => {
      return child.type?.name === 'TestimonialsImage';
  });
  console.log('hasImage', hasImage)
    return(
        <TestimonialsContext.Provider value={{ hasImage }}>
        <div className={!hasImage ? styles['testimonials-container'] + ' ' + styles['testimonials-container-no-image'] : styles['testimonials-container']} {...rest}>
            {children}
        </div> 
        </TestimonialsContext.Provider>
    )
}
export { TestimonialsContext };