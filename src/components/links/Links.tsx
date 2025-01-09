import Link from "next/link"

export default function Links() {
  
  const links = [
    {
        name: "About",
        link: "./about"
    },
    {
        name: "Contact",
        link: "./contact"
    },
    {
        name: "Blog",
        link: "./blog"
    },
  ]
  
    return (
        <div>
            {links.map((item, index) => 
                <Link key={index} href={item.link}>{item.name}</Link> 
            )}
        </div>
    )
}
