import { useTranslations } from 'next-intl';
import Pagination from './Pagination';

type props = {
    current?: number;
    next: number;
    previous: number;
    locale: string;
    path ?: string;
}
function PaginationWrapper({ current, next, previous, locale , path }: props) {
    const t = useTranslations("pagination");
    const [nextText, previousText, currentText] = [t("next"), t("previous"), t("page")];

    if (current) {
        return (
            <Pagination current={current.toLocaleString(locale)} next={next} previous={previous} locale={locale} previousText={previousText} nextText={nextText} currentText={currentText} path={path} />
        )
    }
    return (<Pagination  next={next} previous={previous} locale={locale} previousText={previousText} nextText={nextText}  />
    )
}

export default PaginationWrapper