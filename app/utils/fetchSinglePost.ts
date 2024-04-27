"use server"

import { Post } from "@/types"

export async function fetchSinglePost( id : string ) {
    const res = await fetch(`https://662b7b43de35f91de1586a87.mockapi.io/api/posts/${id}`)
    const post: Post = await res.json()
    return {
        post
    }
}