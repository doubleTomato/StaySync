'use client'
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image'
export default function topHeader(){
    const curPage = usePathname();
    const [login, setLogined] = useState(false);
    return (
        <header className="flex items-center shadow-md justify-between gap-4 px-40 sticky top-0 bg-white z-10">
            <div><Image src="/logo_2.png" alt="로고 사진" 
             width={150} height={40} /></div>
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
                <ul className='flex gap-2'>
                    {/* 프로필에서 예약 내역 확인 가능 // 추후 회원가입/로그인 기능 구현 */}
                    <li></li>
                </ul>
            </div>
        </header>
    )
}