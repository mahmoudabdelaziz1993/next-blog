import { Post } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import Delete from '../Actions/Delete';
type props = {
    post: Post;
    locale: string;
}

function PostCard({ post, locale }: props) {
    return (
        <div className="card w-full max-w-screen-md bg-base-100 shadow-xl">
            <div className="card-body">

                <Link href={`/${locale}/post/${post.id}`} className="card-title line-clamp-1 text-primary">{post.title}</Link>
                <p className='line-clamp-2'>{post.content}</p>

                <div className="card-actions  gap-2">
                    {/* view button */}
                    <button className="btn btn-info btn-xs gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                        </svg>

                    </button>
                    {/* edit button */}
                    <button className="btn btn-accent btn-xs gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                        </svg>

                    </button>
                    {/* delete button */}
                   <Delete id={post.id} />
                </div>

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


        </div >
    )
}

export default PostCard