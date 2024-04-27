import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react'
type props = {
    current?: number;
    next: number;
    previous: number;
    locale: string;
}
function Pagination({ current, next, previous, locale }: props) {
    const t = useTranslations("pagination");

    return (
        <div className="join">
            <Link href={`/${locale}/${previous}`} className="join-item btn btn-primary">« {t("previous")}</Link>
            {current && <button className="join-item btn">{t("page")} {current.toLocaleString(locale)}</button>}
            <Link href={`/${locale}/${next}`} className="join-item btn btn-primary"> {t("next")}» </Link>
        </div>
    )
}

export default Pagination