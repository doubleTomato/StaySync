"use client"
import { MdHomeWork, MdWifi, MdPriceChange  } from "react-icons/md";
import { useState } from "react";
import PriceFilter from './priceFilter'
import CCheckbox from '@/components/common/checkbox';

export default function LeftFilter(){
    const [filters, setFilters] = useState({ wifi: false, parking: false });

    return(
        <nav className="rounded-lg sticky h-full w-70 left-5 top-45 bottom-0px inline-block p-5 shadow-lg">
            <h1 className="mb-7 text-md font-semibold">상세 필터</h1>
            <dl className="mb-5">
                <dt className="flex items-center gap-1 mb-2 font-semibold text-gray-700 text-sm"><MdPriceChange />가격 범위</dt>
                <dd><PriceFilter></PriceFilter></dd>
            </dl>
            <dl className="mb-5">
                <dt className="flex items-center gap-1 mb-2 font-semibold text-gray-700 text-sm"><MdHomeWork />숙소 유형</dt>
                <dd className="flex gap-5">
                    <CCheckbox 
                      label="호텔" 
                      id="hotel" 
                      onCheckedChange={(checked) => setFilters({...filters, hotel: !!checked})}
                    />
                    <CCheckbox 
                      label="펜션" 
                      id="house" 
                      onCheckedChange={(checked) => setFilters({...filters, house: !!checked})}
                    />
                </dd>
            </dl>
            <dl className="mb-5">
                <dt className="flex items-center gap-1 mb-2 font-semibold text-gray-700 text-sm"><MdWifi/>편의 시설</dt>
                <dd className="flex gap-5">
                    <CCheckbox 
                      label="wifi" 
                      id="wifi" 
                      onCheckedChange={(checked) => setFilters({...filters, wifi: !!checked})}
                    />
                    <CCheckbox 
                      label="pool" 
                      id="pool" 
                      onCheckedChange={(checked) => setFilters({...filters, pool: !!checked})}
                    />
                </dd>
            </dl>
        </nav>
    )
}