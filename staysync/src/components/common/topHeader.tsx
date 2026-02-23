'use client'
import { usePathname } from 'next/navigation';
export default function topHeader(){
    const curPage = usePathname();
    return (
        <header className="flex items-center justify-between gap-4 p-4 border-b bg-cyan-950 text-white">
            <div>로고</div>
            { curPage === "/search" ?
            <div>
                <ul className="flex">
                    <li>지역(팝업)</li>
                    <li>날짜(datepicker)</li>
                    <li>인원수(어른/아이) +- 카운트 형식</li>
                </ul>
            </div>
            :
            <></>
            }
            <div>
                <ul>
                    <li>프로필</li>
                    <li>로그아웃</li>
                </ul>
            </div>
        </header>
    )
}