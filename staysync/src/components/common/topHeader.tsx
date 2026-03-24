'use client'
import { MdOutlineSearch, MdOutlinePerson, MdArrowDropDown  } from "react-icons/md";
import { useState } from 'react';
import Image from 'next/image'
export default function topHeader(){
    const [login, setLogined] = useState(false);
    return (
        <header className="flex items-center shadow-md justify-between gap-4 px-40 sticky top-0 bg-white z-10">
            <div>
                <Image src="/logo_2.png" alt="로고 사진" 
                width={150} height={40} />
            </div>
            <ul className="w-170 rounded-2xl border border-gray-300  flex items-center shadow-lg  overflow-hidden pr-2.5">
                <li className="duration-700 rounded-2xl hover:bg-gray-200 pl-5 w-70 py-2.5 cursor-pointer">
                    <p className="flex items-center gap-2.5 justify-between">
                        <span className="text-gray-500 font-semibold text-base">지역</span>
                        <span className="text-sm">서울시 경기도...</span>
                        <span className="h-[15px] block bg-gray-300 w-[1px]"></span>
                    </p>
                </li>
                 <li className="duration-700 rounded-2xl hover:bg-gray-200 pl-5 w-50 py-2.5 cursor-pointer">
                    <p className="flex items-center gap-2.5 justify-between">
                        <span className="text-gray-500 font-semibold text-base">날짜</span>
                        <span className="text-sm">2025.05.21</span>
                        <span className="h-[15px] block bg-gray-300 w-[1px]"></span>
                    </p>
                </li>
                 <li className="duration-700 rounded-2xl hover:bg-gray-200 pl-5 w-40 py-2.5 cursor-pointer">
                    <p className="flex items-center gap-2.5">
                        <span className="text-gray-500 font-semibold text-base">인원수</span>
                        <span className="text-sm">게스트 10명</span>
                    </p>
                </li>
                 <li className="duration-700 hover:bg-gray-400 w-10 py-2.5 cursor-pointer rounded-4xl flex justify-center"><MdOutlineSearch/></li>
            </ul>
            <MdOutlinePerson />
        </header>
    )
}