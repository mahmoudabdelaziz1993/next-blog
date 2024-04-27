import { useTranslations } from "next-intl";
import { fetchAllPosts } from "../utils/fetchAllPosts";
import PostCard from "../_components/Navbar/post/Card";
import PostsList from "../_components/Navbar/post/LIst/Index";

type props = {
  params: {
    locale: string;
  };
}
export default function Home({ params: { locale } }: props) {
  const t = useTranslations("sections");

  return (
    <section>
      <PostsList p={1} locale={locale} title={t("posts.title")} />
    </section>
  );
}
