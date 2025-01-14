"use client"                                    //Para usar o componente como RCS (rendering client side - navegador) ao inves de RSS (rendering server side - react)

import styles from "./singlePost.module.css"
import Image from "next/image"
import img from "../../../../public/australia.jpeg"
import avatar from "../../../../public/girafas.jpeg"
import { usePathname, useSearchParams } from "next/navigation"
import { use, useEffect, useState } from "react"
import { DataResult } from "../page"


/* --------------------------- PEGANDO OS DADOS DE UM POST ESPECÍFICO --------------------------- */
// const getPost = async () => {
//   const res = await fetch()
// }


interface SinglePostPageParams{
  params : Promise<{ slug: string }>
}


/* ---------------------------------- RENDERIZANDO O COMPONENTE --------------------------------- */
export default function SinglePostPage({params}:SinglePostPageParams) {
  const [post, setPost] = useState<DataResult>()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // http://localhost:5200/blog/post?value=66&date=1994
  console.log(pathname)                                   // /blog/post
  console.log(searchParams.get("value"))                  // 66
  console.log(searchParams.get("date"))                   // 1994
  //http://localhost:5200/blog/1
  const {slug} = use(params)                              // This is how i can get the relative value of my route, in this case "1"
  console.log(slug)                                       // 1

  const getPost = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${slug}`)
    if (!res.ok) throw new Error("Something went wrong")
    
    const post = await res.json()
    return post
  }

  //Chama uma vez somente
  useEffect(()=>{
    getPost().then((data)=>{setPost(data)})
    console.log("passou aqui")
  },[])



  return (
    <div className={styles.divPrincipal} >
      <div className={styles.divEsq}>
        <Image src={img} alt="" className={styles.img}/>
      </div>
      <div className={styles.divDir}>
        <h2 className={styles.h2}>{post?.category}</h2>
        <div className={styles.subTitleCard} >
          <Image src={avatar} alt="" className={styles.avatar} />
          <div className={styles.authorCard} >
            <p className={styles.subTitle} >Author</p>
            <p className={styles.value} >Leandro Torres</p>
          </div>
          <div className={styles.publishCard} >
            <p className={styles.subTitle} > Published</p>
            <p className={styles.value} >{post?.price}</p>
          </div>
        </div>
        <p className={styles.description} >
          {post?.description}
        </p>
      </div>
    </div>
  )
}
