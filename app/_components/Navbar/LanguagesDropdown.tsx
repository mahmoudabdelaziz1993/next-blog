'use client'

import { removeLanguageCode } from "@/app/utils/removeLanguageCode";
import Link from "next/link";
import { usePathname } from "next/navigation";


type props = {
    title: string;
    languages: {
        code: string;
        title: string;
    }[];
}
function LanguagesDropdown({ title, languages }: props) {
    const pathName = usePathname();
    console.log("pathName", removeLanguageCode(pathName))


    return (
        <details>
            <summary className="capitalize">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                </svg>
                {title}
            </summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
                {languages.map(({ code, title }, index) => <li key={"Language-" + `${code}`}><Link href={"/" + code + removeLanguageCode(pathName)}>{title}</Link></li>)}
            </ul>
        </details>)
}

export default LanguagesDropdown