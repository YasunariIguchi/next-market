import Image from "next/image"
import Link from "next/link"

const getSingleItem = async(id) => {
    //console.log("id: ", id)
    const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`)
    const jsonData = await response.json()
    // console.log("jsonData: ", jsonData.singleItem)
    return jsonData.singleItem
}

const ReadSingleItem = async(context) => {
    console.log("context: ", context)
    const singleItem = await getSingleItem(context.params.id)
    return (
        <div>
            <div>
                <Image src={singleItem.image} alt={singleItem.title} width={750} height={500}></Image>
            </div>
           <div>
            <h1>{singleItem.title}</h1>
            <h2>{singleItem.price}</h2>
            <hr></hr>
            <p>{singleItem.description}</p>
            <Link href="/">Back to Home</Link>
           </div>
        </div>
    )
}

export default ReadSingleItem