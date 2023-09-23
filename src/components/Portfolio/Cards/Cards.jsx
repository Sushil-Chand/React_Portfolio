import React from "react";
import styles from "./Cards.module.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Cards = ({ image, title }) => {
  return (
    <li>
      <div className={styles.card}>
        <img src={image} alt="" />
        <div className={styles["card-overlay"]}>
          <div className={styles["card-header"]}>
            <IoIosArrowDroprightCircle size={45}
              className={styles['card-icon']}/>
            <div className={styles['card-content']}>
              <h3 className={styles['card-title']}> 
              {title}</h3>
              <a href="/#">Demo</a>
            </div>
          </div>
          <p className={styles["card-description"]}>
            Lorem ispsum dolor sit amet consectetur adipisicing elit. Incidunt,
            repudiandae!
          </p>
        </div>
      </div>
    </li>
  );
};

export default Cards;
