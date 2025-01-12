import Image, { StaticImageData } from "next/image"
import styles from "./Post.module.css"
import Link from "next/link"

interface PostProps{
    title: string,
    src: StaticImageData,
    description: string,
    dateImg: string
}

export default function Post({title,src,description,dateImg}: PostProps) {
  return (
    <div className={styles.container}>
        <div className={styles.divTop}>
            <div className={styles.divImage}>
                <Image className={styles.img} src={src} alt=""/>
            </div>
            <span className={styles.dateImg}>{dateImg}</span>
        </div>
        <div className={styles.divBottom}>
            <h3 className={styles.h3} >{title}</h3>
            <p className={styles.p}>{description}</p>
            <Link  className={styles.link} href={"./"}>READ MORE</Link>
        </div>
    </div>
  )
}
