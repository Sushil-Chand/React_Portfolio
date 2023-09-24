import React from 'react';
import styles from "./TestimonialSlider.module.css";
import {HiOutlineArrowNarrowLeft,HiOutlineArrowNarrowRight} from "react-icons/hi";

const testimonialSlider = ({
    testimonial,
    nextTestimonial,
    previousTestimonial,
})=>{
  return (
    <div className={styles.content}>
        <div className={ `${styles.testimonial} ${styles["fade-in"]}`}>
        <p className={styles.message}> {testimonial.message} </p>
        <p className={styles.name}>{testimonial.name}, Customer</p>

        </div>
        <div className={styles.buttons}>
            <button className={styles["slider-button"]}>
                <HiOutlineArrowNarrowLeft size={30} />
            </button>
            <button className={styles["slider-button"]}>
                <HiOutlineArrowNarrowRight size={30} />
            </button>
        </div>
    
     </div>
    


    );
};

export default testimonialSlider