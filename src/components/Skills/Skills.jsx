import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className={styles.title}>
          <h2>
            <span>My</span> Skills
          </h2>
          <hr/>
        </div>
        <div className={`grid ${styles["skills-grid"]}`}>
            <div className={styles.content}>
                <h1>
                    In <span> Designing</span> <br/>
                    And <span> Developing</span>
                </h1>
                <p>
                    Every day is a new challenge, and I'm
                     trying to gain more knowledge and 
                     experince. Learning new technologies has 
                     always been intersting to me. As 
                     technology is evoving so fast, I try to keep 
                     myself up to date.
                </p>
            </div>
            <div className={styles["skill-bars"]}> </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`${styles.flex} container`}>
          <div>
            <h3> I' am  available for work</h3>
          </div>
        
            <a href="#contact"> Contact Me</a>
          </div>
      </div>
    </section>
  );
};

export default Skills;
