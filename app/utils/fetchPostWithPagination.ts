"use server"

import { Post } from "@/types"
import { fetchAllPosts } from "./fetchAllPosts"

export async function fetchPostsWithPagination(pageNumber = 1, filter = '',category = '', limit = 6) {
    const res = await fetch(`https://662b7b43de35f91de1586a87.mockapi.io/api/posts?p=${pageNumber}&l=${limit}&filter=${filter}&read=${category}`)
    const posts: Post[] = await res.json()
    const { count } = await fetchAllPosts(filter,category)

    const next = (pageNumber + 1) % Math.round(count / limit)
    const previous = (pageNumber - 1 + Math.round(count / limit)) % Math.round(count / limit) || Math.round(count / limit)

    return {
        posts,
        current: pageNumber,
        next,
        previous
    }
}
