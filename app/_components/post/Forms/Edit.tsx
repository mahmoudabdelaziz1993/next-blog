'use client'
import { createPost } from "@/app/utils/createPost"
import { editPost } from "@/app/utils/editPost"
import { useRouter } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
    title: string
    content: string
    thumbnail: string
    language: string
}
type props = {
    locale: string;
    title: string;
    content: string;
    thumbnail: string;
    language: string;
    id: string;
}
function Edit({ locale, title, content, thumbnail, language , id }: props) {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await editPost({ postData: data, id: id })
        if (res && res.post) {
            router.push(`/${locale}/post/${res.post.id}`)
        }
    }
    return (
        <form className="flex flex-col gap-4 w-full px-2 " onSubmit={handleSubmit(onSubmit)}>
            <label className={`input input-bordered flex items-center gap-2  ${errors.title ? 'input-error' : 'input-primary'} `}>
                title
                <input type="text" className="w-full" placeholder="Daisy" {...register("title", { required: true, value: title, maxLength: 100, minLength: 10 })} />
            </label>
            <label className={`input input-bordered flex items-center gap-2  ${errors.content ? 'input-error' : 'input-primary'} `}>
                content
                <input type="text" className="w-full" placeholder="Daisy" {...register("content", { required: true, value: content, maxLength: 1000, minLength: 10 })} />
            </label>

            <label className={`input input-bordered flex items-center gap-2  ${errors.thumbnail ? 'input-error' : 'input-primary'} `}>
                thumbnail
                <input type="text" className="w-full" placeholder="thumbnail" {...register("thumbnail", {
                    required: true, pattern: {
                        value: /https?:\/\/(?:www\.)?loremflickr\.com\/.*/,
                        message: 'Please enter a valid LoremFlickr link',
                    },
                    value: thumbnail
                })} />
            </label>
            <p className="text-error text-xs"> {errors.thumbnail?.message}</p>
            <label className={`input input-bordered flex items-center gap-2  ${errors.language ? 'input-error' : 'input-primary'} `}>
                language
                <input type="text" className="w-full" placeholder="language" {...register("language", {
                    required: true, value: locale
                })} />
            </label>
            <button type="submit" className="btn btn-primary gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>

                Edit Post
            </button>
        </form>
    )
}

export default Edit