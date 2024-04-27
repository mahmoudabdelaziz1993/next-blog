import React from 'react'
import PostCard from '../Card'
import { Post } from '@/types'
import { fetchPostsWithPagination } from '@/app/utils/fetchPostWithPagination'
import Pagination from './Pagination'
import Search from './../../Search/index';
type props = {
    p: number,
    locale: string,
    title: string ,
    placeholder: string,
    query?: string
}

async function PostsList({ p, locale, title ,placeholder,query }: props) {
    const { posts, next, previous, current } = await fetchPostsWithPagination(p ?? 1,query ?? '');


    return (
        <section className="grid gap-4 place-items-center">
            <div className="flex justify-between w-full items-start md:flex-row flex-col">
                <h1 className="md:text-3xl text-2xl font-bold mb-9">{title} </h1>
                <section className='flex gap-4 md:flex-row flex-col'  >

                    <Search  locale={locale} placeholder={placeholder}/>
                    <Pagination next={next} previous={previous} locale={locale} />
                </section>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post: Post) => (
                    <li key={post.id}><PostCard post={post} locale={locale} /></li>
                ))}
            </ul>
            <Pagination current={current} next={next} previous={previous} locale={locale} />
        </section>
    )
}

export default PostsList