import DivPrincipal from "@/components/divPrincipal/DivPrincipal";
import styles from "./contact.module.css"
import Image from "next/image";
import imgContact from "../../../public/contact.png"

export default function Contact() {
  return (
    <DivPrincipal>
      <div className={styles.divEsq}>
        <Image
          className={styles.img}
          src={imgContact}
          alt=""
        />
      </div>
      <div className={styles.divDir}>
        <form className={styles.form}>
          <input
            className={styles.input} 
            type="text" 
            placeholder="Name and Surname"
          />
          <input
            className={styles.input} 
            type="text"
            placeholder="Email adress" 
          />
          <input
            className={styles.input} 
            type="text"
            placeholder="Phone Number (Optional)" 
          />
          <input
            className={`${styles.input} ${styles.messageInput}`} 
            type="text"
            placeholder="Message" 
          />
          <button className={styles.button}>
            Send
          </button>  
        </form>
      </div>
    </DivPrincipal>
  )
}
