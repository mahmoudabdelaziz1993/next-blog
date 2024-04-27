"use server"

import { Post } from "@/types"

export async function fetchAllPosts() {
    const res = await fetch('https://662b7b43de35f91de1586a87.mockapi.io/api/posts')
    const posts:Post[] = await res.json()
    return {
        posts, count: posts.length
    }
}