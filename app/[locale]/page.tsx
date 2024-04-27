import { useTranslations } from "next-intl";
import { fetchAllPosts } from "../utils/fetchAllPosts";
import PostCard from "../_components/post/Card";
import PostsList from "../_components/post/LIst/Index";

type props = {
  params: {
    locale: string;
  };
}
export default function Home({ params: { locale } }: props) {
  const t = useTranslations("sections");

  return (
    <section>
      <PostsList p={1} locale={locale} title={t("posts.title")} placeholder={t("searchInput.placeholder")} />
    </section>
  );
}
