'use client'
import { createPost } from "@/app/utils/createPost"
import { useRouter } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
    title: string
    content: string
    thumbnail: string
    language: string
}
type props = {
    locale: string
}
function Create({ locale }: props) {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await createPost({ postData: data })
        if (res && res.post) {
            router.push(`/${locale}/post/${res.post.id}`)
        }
    }
    return (
        <form className="flex flex-col gap-4 w-full px-2 " onSubmit={handleSubmit(onSubmit)}>
            <label className={`input input-bordered flex items-center gap-2  ${errors.title ? 'input-error' : 'input-primary'} `}>
                title
                <input type="text" className="w-full" placeholder="Daisy" {...register("title", { required: true , maxLength: 100 , minLength: 10 })} />
            </label>
            <label className={`input input-bordered flex items-center gap-2  ${errors.content ? 'input-error' : 'input-primary'} `}>
                content
                <input type="text" className="w-full" placeholder="Daisy" {...register("content", { required: true  , maxLength: 1000 , minLength: 10})} />
            </label>
            
            <label className={`input input-bordered flex items-center gap-2  ${errors.thumbnail ? 'input-error' : 'input-primary'} `}>
                thumbnail
                <input type="text" className="w-full" placeholder="thumbnail" {...register("thumbnail", {
                    required: true, pattern: {
                        value:/https?:\/\/(?:www\.)?loremflickr\.com\/.*/,
                        message: 'Please enter a valid LoremFlickr link',
                    },
                })} />
            </label>
            <p className="text-error text-xs"> {errors.thumbnail?.message}</p>
            <label className={`input input-bordered flex items-center gap-2  ${errors.language ? 'input-error' : 'input-primary'} `}>
                language
                <input type="text" className="w-full" placeholder="language" {...register("language", {
                    required: true, value: locale
                })} />
            </label>
            <button type="submit" className="btn btn-primary gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
                Create Post
            </button>
        </form>
    )
}

export default Create