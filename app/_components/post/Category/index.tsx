import { useTranslations } from "next-intl";
import Link from "next/link";
type props = {

    locale: string;
    read?: boolean;
}
function CategotyList({ read, locale }: props) {
    const t = useTranslations('categotyList');
    return (
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box gap-2">
            {[1, 2, 3].map((i) => <li key={i}><Link href={
                
                    i === 3 ? `/${locale}/read/true` :
                        i === 2 ? `/${locale}/read/false` : `/${locale}`
            } className={
                read === undefined && i === 1 ? "active" :
                    read === true && i === 3 ? "active" :
                        read === false && i === 2 ? "active" :
                            ""
            }
            >{t(i.toString())}</Link></li>)}


        </ul>
    )
}

export default CategotyList