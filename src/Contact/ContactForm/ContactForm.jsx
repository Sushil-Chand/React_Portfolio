import React,{useState} from 'react'
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [enteredName, setEnteredName]= useState('');
    const [enteredEmail, setEnteredEmail]=useState('');
    const [enteredMessage,setEnteredMessage] =useState('');


    const handleInputChange =(event) =>{
        console.log(event)
        const {name,value} = event.target;
        if (name==='name'){
            setEnteredName(value);
        
        }else if (name ==='email'){
            setEnteredEmail(value);
        }else if (name==='message'){
            setEnteredMessage(value);
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            enteredName.trim()===''||
            enteredEmail.trim()===''||
            enteredMessage.trim()===''
        ){
            return;
        }

        const formData = {
            name:enteredName,
            email:enteredEmail,
            message:enteredMessage,
        }

        console.log(formData);
    }
    

  return(
    <form onSubmit={handleSubmit}>
        <div className={styles["form-control"]}>
            <input type="text" name="name" placeholder="Name" 
                value={enteredName} onChange={handleInputChange}
                autoComplete="off"
            />
        </div>
        <div className={styles["form-control"]}>
            <input type="email" name="email" placeholder='Email'
                value={enteredEmail} onChange={handleInputChange}
                autoComplete="off"
            />

        </div>
        <div className={styles["form-control"]}>
            <textarea
            name="message"
            palceholder="Message"
            className={styles.textarea}
            vlaue={enteredMessage}
            onChange={handleInputChange}>
            </textarea>
        </div>
        <button className={styles.button}> Send Message</button>
    </form>
  );
  
};

export default ContactForm;