import Link from "next/link";
import Links from "../links/Links";
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navcss}>                                     {/*navcss é o nome da classe*/}
        <Link className={styles.logocss} href={"/"}>Logo</Link>         {/*logocss é o nome da classe*/}
        <Links/>
    </nav>
  )
}
