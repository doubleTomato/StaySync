'use client'
import { MdOutlineSearch, MdOutlinePerson  } from "react-icons/md";
import { useState } from 'react';
import Image from 'next/image'
export default function topHeader(){
    const [login, setLogined] = useState(false);
    return (
        <header className="flex items-center shadow-md justify-between gap-4 px-40 sticky top-0 bg-white z-10">
            <div><Image src="/logo_2.png" alt="로고 사진" 
             width={150} height={40} /></div>
            <div className='bg-amber-50 sticky top-25 h-[70px] flex items-center justify-between shadow-lg'>
                <ul className="flex">
                    <li>
                        <p></p>
                        <p></p>
                    </li>
                    <li>날짜(datepicker)</li>
                    <li>인원수(어른/아이) +- 카운트 형식</li>
                </ul>
                <p><MdOutlineSearch/></p>
            </div>
            <div>
                <MdOutlinePerson />
            </div>
        </header>
    )
}