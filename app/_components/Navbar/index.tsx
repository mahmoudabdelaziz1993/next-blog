import { useTranslations } from "next-intl";
import LanguagesDropdown from "./LanguagesDropdown";
import Link from "next/link";

function Navbar() {
    const t = useTranslations('website');
    const translationLang = useTranslations('languages');
  
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl gap-2 uppercase font-extrabold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary font-bold" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                    </svg>
                    {t('name')}</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a>Link</a></li> */}
                    <li>
                       <LanguagesDropdown title={translationLang('title')} languages={[{
                        code:translationLang("1.code"),
                        title:translationLang("1.title")
                       } ,{
                        code:translationLang("2.code"),
                        title:translationLang("2.title")
                       }]}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar