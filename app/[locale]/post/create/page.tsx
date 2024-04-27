import Create from '@/app/_components/post/Forms/Create'
import React from 'react'
type props = {

    params: {
        locale: string
    }
}
function CreatePostPage({ params: { locale } }: props) {
    return (
        <section className="w-ful w-full max-w-[300px] mx-auto flex flex-col gap-4">
            <h1 className="text-3xl font-bold ">Create Post</h1>
            <Create locale={locale}  />
        </section>
    )
}

export default CreatePostPage