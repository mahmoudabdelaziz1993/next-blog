import React from 'react'
import PostCard from '../Card'
import { Post } from '@/types'
import { fetchPostsWithPagination } from '@/app/utils/fetchPostWithPagination'
import Pagination from './Pagination'
type props = {
    p: number,
    locale: string,
    title: string
}

async function PostsList({ p, locale, title }: props) {
    const { posts, next, previous, current } = await fetchPostsWithPagination(p ?? 1);


    return (
        <section className="grid gap-4 place-items-center">
            <div className="flex justify-between w-full items-start">
                <h1 className="md:text-3xl text-2xl font-bold mb-9">{title} </h1>
                <Pagination next={next} previous={previous} locale={locale} />
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post: Post) => (
                    <li key={post.id}><PostCard post={post} /></li>
                ))}
            </ul>
            <Pagination current={current} next={next} previous={previous} locale={locale} />
        </section>
    )
}

export default PostsList