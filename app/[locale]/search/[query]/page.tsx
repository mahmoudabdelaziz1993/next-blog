import PostsList from "@/app/_components/post/LIst/Index";
import { useTranslations } from "next-intl";

type props = {
    params: {
        locale: string
        query: string
    }
}
function SearchPage({ params: { locale, query } }: props) {
    const t = useTranslations("sections");

  return (
    <section>
      <PostsList p={1} locale={locale} title={t("search.title")} query={query} placeholder={t("searchInput.placeholder")} />
    </section>
  );
}

export default SearchPage