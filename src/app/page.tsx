/* ------------- OS ARQUIVOS PAGE.TSX SAO OS ARQUIVOS CENTRAIS (CHILDREN) DA PÁGINA ------------- */
import Image from "next/image";
import styles from "./home.module.css"
import gif from "../../public/hero.gif"
import brands from "../../public/brands.png"
import DivPrincipal from "@/components/divPrincipal/DivPrincipal";


export default function Home() {
  return (
    <DivPrincipal>
      <div className={styles.divEsq}>
        <h1 className={styles.h1}>Creative Thoughts Agency.</h1>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cum. Ducimus nesciunt
          sunt a aliquam.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image className={styles.brandsImg} src={brands} alt="brands"/>
        </div>
      </div>
      <div className={styles.divDir}>
          <Image className={styles.gif} src={gif} alt="gif"/>
      </div>
      </DivPrincipal>
  );
}