import React from 'react'
import styles from "./Footer.module.css";
import {BsGithub, BsLinkedin} from 'react-icons/bs';


const Footer = () => {
  return (
    <Footer className={styles.footer}>
        <div className='container'>
            <div className={styles.flex}>
                <div>
                    <p>&copy; 2023 by Sushil Chand. All rights reserved. </p>

                </div>
                <ul>
                    <li>
                        <a href="#home" >Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">skills</a>
                    </li>
                    <li>
                        <a href="#testimonial">Testimonial</a>
                    </li>
                    <li>
                        <a href="#contact"> Contact</a>
                    </li>
                </ul>
                <div className={styles.icons}>
                    <a href="/#">
                        <BsGithub size={30}/>
                    </a>
                    <a href="/#">
                        <BsLinkedin size= {30}/>
                    </a>

                </div>
            </div>

        </div>

    </Footer>
  )
}

export default Footer