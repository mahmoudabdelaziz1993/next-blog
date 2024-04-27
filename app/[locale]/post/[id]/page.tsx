import { fetchSinglePost } from "@/app/utils/fetchSinglePost"
import Image from "next/image"

type props = {
    params: {
        locale: string
        id: string
    }
}
async function page({ params: { locale, id } }: props) {
    const { post } = await fetchSinglePost(id)
    console.log("post", post)
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full min-h-screen relative">
                <Image src={post.thumbnail} alt={post.title} fill />
            </div>
            <article className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <p>{post.content}</p>
            </article>
        </section>
    )
}

export default page