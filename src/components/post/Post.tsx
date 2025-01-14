import Image, { StaticImageData } from "next/image"
import styles from "./Post.module.css"
import Link from "next/link"

interface PostProps{
    title: string,
    src: StaticImageData|string,
    description: string,
    dateImg: string|number,
    id: number
}

export default function Post({title,src,description,dateImg,id}: PostProps) {
  return (
    <div className={styles.container}>
        <div className={styles.divTop}>
            <Link className={styles.divImage} href={`./blog/${id}`}>
                <Image className={styles.img} src={src} alt="" width={100} height={100}/>
            </Link>
            <span className={styles.dateImg}>{dateImg}</span>
        </div>
        <div className={styles.divBottom}>
            <h3 className={styles.h3} >{title}</h3>
            <p className={styles.p}>{description}</p>
        </div>
    </div>
  )
}
