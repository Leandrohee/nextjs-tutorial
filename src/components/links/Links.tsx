"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./Link.module.css"
import { useState } from "react";
import Image from "next/image";
import menuIcon from "../../../public/menu.png"

export default function Links() {
    const pathName = usePathname();                                                                 //É necessário usar o "use client"
    const [inSession, setInSession] = useState<Boolean>(false)
    const [menuOpen, SetMenuOpen] = useState<Boolean>(false)

    const links = [
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        },
        {
            name: "Blog",
            link: "/blog"
        },
    ]

    //temporary
    const isAdmin = true
  
    const teste = () => {console.log("teste")}

    return (
        <>
            <div className={`${styles.links} ${menuOpen && styles.menuActivated}`}>
                {/*Lógica dos demais botoes*/}
                {links.map((item, index) => 
                    <Link 
                        className={pathName == item.link ? styles.linkActivated : styles.link}         
                        key={index} 
                        href={item.link}
                    >
                        {item.name}
                    </Link> 
                )}
                {/*Lógica dos botoes de login|logout|admin*/}
                {inSession && isAdmin && 
                    <Link 
                        className={pathName == '/admin' ? styles.linkActivated : styles.link} 
                        href={"./admin"}
                    >
                        Admin
                    </Link>
                }
                {inSession 
                    ? <button className={styles.logoutBtn} onClick={() => setInSession(prev => !prev)}>Logout</button> 
                    : <Link className={styles.loginBtn} href={"login"} onClick={() => setInSession(prev =>!prev)} >Login</Link>
                }
            </div>
            <div className={styles.containerMenuIcon}>
                <Image
                    src={menuIcon} 
                    alt="menuIcon"
                    onClick={() => SetMenuOpen(prev => !prev)} 
                    className={styles.btn768}
                />
            </div>

        </>
    )
}

