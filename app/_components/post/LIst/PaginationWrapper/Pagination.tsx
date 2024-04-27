"use client"
import { removeLanguageCode } from '@/app/utils/removeLanguageCode';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
type props = {
    current?: number;
    next: number;
    previous: number;
    locale: string;
    nextText: string;
    previousText: string;
    currentText?: string;
    path ?: string;

}
function Pagination({ current, next, previous, locale ,nextText,previousText,currentText ,path }: props) {
   

    return (
        <div className="join">
            <Link href={`/${locale}${path??''}/${previous}`} className="join-item btn btn-primary">« { previousText}</Link>
            {current && <button className="join-item btn">{currentText} {current.toLocaleString(locale)}</button>}
            <Link href={`/${locale}${path??''}/${next}`} className="join-item btn btn-primary"> {nextText}» </Link>
        </div>
    )
}

export default Pagination