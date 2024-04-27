import PostsList from "@/app/_components/post/LIst/Index"
import { useTranslations } from "next-intl"

type props = {
  params: {
    locale: string
    p: string
  }
}
function Post({ params: { locale, p } }: props) {
  const t = useTranslations("sections");

  return (
    <section>
      <PostsList p={Number(p)} locale={locale} title={t("posts.title")} placeholder={t("searchInput.placeholder")} />
    </section>
  )
}

export default Post