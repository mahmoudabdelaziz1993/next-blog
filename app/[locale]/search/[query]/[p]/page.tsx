import PostsList from "@/app/_components/post/LIst/Index"
import { useTranslations } from "next-intl"

type props = {
    params: {
        locale: string
        query: string
        p: string
    }
}
function SearchPage( { params: { locale, query, p } }: props) {
    const t = useTranslations("sections");

  return (
    <section>
    <PostsList p={Number(p)} locale={locale} title={t("search.title")} query={query} placeholder={t("searchInput.placeholder")} path={`/search/${query}`} />
  </section>
  )
}

export default SearchPage