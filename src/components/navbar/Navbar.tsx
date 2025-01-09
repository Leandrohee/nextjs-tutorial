import Links from "../links/Links";
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navcss}>     {/*navcss é o nome da classe*/}
        <div>Logo</div>
        <Links/>
    </nav>
  )
}
