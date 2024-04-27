"use server"

import { Post } from "@/types"

export async function createPost({ postData }: { postData: { title: string, content: string, thumbnail: string, language: string } }) {
    const res = await fetch(`https://662b7b43de35f91de1586a87.mockapi.io/api/posts`, {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (!res.ok) {
        throw new Error("Failed to Create post")
    }
    const post: Post = await res.json()
    return {
        post
    }
}