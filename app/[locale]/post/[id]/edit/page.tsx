import Edit from '@/app/_components/post/Forms/Edit'
import { fetchSinglePost } from '@/app/utils/fetchSinglePost'
import React from 'react'

type props = {
    params: {
        locale: string
        id: string
    }
}
async function EditPostPage({ params: { locale, id } }: props) {
    const { post } = await fetchSinglePost(id)
    const { title, content, thumbnail, language } = post
    return (
        <section className="w-ful w-full max-w-[300px] mx-auto flex flex-col gap-4 items-center">
            <h1 className="text-3xl font-bold ">Edit Post</h1>
            <Edit locale={locale} title={title} content={content} thumbnail={thumbnail} language={language}  id={id}   />
        </section>
    )
}

export default EditPostPage