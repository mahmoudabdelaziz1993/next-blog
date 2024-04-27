import PostsList from "@/app/_components/post/LIst/Index";
import { useTranslations } from "next-intl";

type props = {
    params: {
        locale: string
        read: string
    }
}
function ReadPage({ params: { locale, read } }: props) {

  
    const t = useTranslations("sections");

    const readBool = read === "true"

    return (
      <section>
        <PostsList p={1} locale={locale} title={t("posts.title")} placeholder={t("searchInput.placeholder")} read={readBool} />
      </section>
    );
  
}

export default ReadPage