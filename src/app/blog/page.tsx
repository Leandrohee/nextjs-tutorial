// 'use client'                                         //Se usar o cliente aqui dá ruim por causa do async await

import Post from "@/components/post/Post"
import styles from "./blog.module.css"
import australia from "../../../public/australia.jpeg"
import cachorro from "../../../public/cachorro.webp"
import girafas from "../../../public/girafas.jpeg"
import mulher from "../../../public/mulher.jpeg"
import vestido from "../../../public/vestido.jpeg"
import ny from "../../../public/ny.jpeg"

/* ------------------------- PEGANDO DADOS DE UMA API FALSA COM REST API ------------------------ */
const getPosts = async () => {
  const res = await fetch("https://fakestoreapi.com/products",{cache: "no-cache"})
  if (!res.ok) throw new Error("Something went wrong")
  return res.json()
}

export interface DataResult{
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

/* --------------------------------- RENDERIZACAO DO COMPONENTE --------------------------------- */
export default async function Blog() {

  const data: Array<DataResult> = await getPosts()

  return (
    <div className={styles.divCentral}>
      {data.map((item,index)=>(
        <Post
          title={item.category}
          description={item.description.slice(0,30)+"..."}
          dateImg={item.price}
          src={item.image}
          key={index}
          id={item.id}
        />
      ))}


      {/* <Post
        title="Australia"
        description="Uma foto da australia"
        dateImg="15/11/1994"
        src={australia}
      />
      <Post
        title="Cachorro"
        description="Uma foto de um cachorro na coleira"
        dateImg="15/11/1994"
        src={cachorro}
      />
      <Post
        title="Girafas"
        description="Uma foto das girafas"
        dateImg="15/11/1994"
        src={girafas}
      />
      <Post
        title="Nova York"
        description="Uma foto de Nova York"
        dateImg="15/11/1994"
        src={ny}
      />
      <Post
        title="Mulher"
        description="Uma foto de uma mulher"
        dateImg="15/11/1994"
        src={mulher}
      />
      <Post
        title="Vestido"
        description="Uma foto de uma mulher com um vestido"
        dateImg="15/11/1994"
        src={vestido}
      />
      <Post
        title="Australia"
        description="Uma foto da australia"
        dateImg="15/11/1994"
        src={australia}
      /> */}
    </div>
  )
}
