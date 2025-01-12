import DivPrincipal from "@/components/divPrincipal/DivPrincipal";
import styles from "@/app/about/about.module.css"
import Image from "next/image";
import imgAbout from "../../../public/about.png"

export default function About() {
  return (
    <DivPrincipal>
      <div className={styles.divEsq}>
        <p className={styles.about}>About Agency</p>
        <h2 className={styles.h2}>We create digital ideas that are bigger, bolder, bracer and beter.</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ut quidem rerum laborum, 
          iusto aliquid molestias aperiam a doloribus repellat commodi modi tempore corrupti tenetur vitae
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>10 K+</h3>
            <p className={styles.p}>Year of experience</p>
          </div>
          <div className={styles.card}>
            <h3>234 K+</h3>
            <p className={styles.p}>People reached</p>
          </div>
          <div className={styles.card}>
            <h3>5 K+</h3>
            <p className={styles.p}>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.divDir}>
        <Image
          className={styles.imgAbout}
          src={imgAbout}
          alt="image"
        />
      </div>
    </DivPrincipal>
  )
}

