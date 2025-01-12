import { ReactNode } from "react"
import styles from "./DivPrincipal.module.css"

interface DivPrincipalProps{
    children: ReactNode
}

export default function DivPrincipal({children}: DivPrincipalProps) {

  return (
    <div className={styles.div}>
        {children}
    </div>
  )
}
