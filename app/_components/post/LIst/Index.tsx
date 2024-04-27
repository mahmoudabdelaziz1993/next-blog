import React from 'react'
import PostCard from '../Card'
import { Post } from '@/types'
import { fetchPostsWithPagination } from '@/app/utils/fetchPostWithPagination'
import Pagination from './PaginationWrapper/Pagination'
import Search from './../../Search/index';
import { useTranslations } from 'next-intl'
import PaginationWrapper from './PaginationWrapper'
import Link from 'next/link'
type props = {
    p: number,
    locale: string,
    title: string,
    placeholder: string,
    query?: string
    path?: string;

}

async function PostsList({ p, locale, title, placeholder, query, path }: props) {
    const { posts, next, previous, current } = await fetchPostsWithPagination(p ?? 1, query ?? '');


    return (
        <section className="grid gap-4 place-items-center">
            <div className="flex justify-between w-full items-start md:flex-row flex-col">
            <h1 className="md:text-3xl text-2xl font-bold mb-9">{title} </h1>

                <section className='flex gap-4 md:flex-row flex-col'  >

                    <Search locale={locale} placeholder={placeholder} />
                    <PaginationWrapper next={next} previous={previous} locale={locale} path={path} />
                </section>
            </div>
            <div className="flex gap-2 justify-end w-full">

                    <Link href={`/${locale}/post/create`} className="btn btn-primary   gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>
                        <span className='hidden lg:inline-block'>Create Post</span>
                        

                    </Link>
                </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post: Post) => (
                    <li key={post.id}><PostCard post={post} locale={locale} /></li>
                ))}
            </ul>
            <PaginationWrapper current={current} next={next} previous={previous} locale={locale} path={path} />
        </section>
    )
}

export default PostsList