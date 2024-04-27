import { Post } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
type props = {
    post: Post;
    locale: string;
}

function PostCard({ post , locale}: props) {
    return (
        <div className="card w-full max-w-screen-md bg-base-100 shadow-xl">
            <div className="card-body">
                <Link href={`/${locale}/post/${post.id}`} className="card-title line-clamp-1 text-primary">{post.title}</Link>
                <p className='line-clamp-2'>{post.content}</p>
            </div>
            <figure>
                <Image

                    src={post.thumbnail}
                    alt={post.title}
                    width={500} // Specify the width of the image
                    height={300} // Specify the height of the image
                    sizes="(max-width: 640px) 100vw, 640px" // Specify the sizes attribute for responsive images
                    quality={85} // Specify the quality of the image
                    priority={false}
                />
            </figure>

          
        </div>
    )
}

export default PostCard