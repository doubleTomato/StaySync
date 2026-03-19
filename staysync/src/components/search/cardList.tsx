import { MdOutlineStar, MdLocationOn  } from "react-icons/md";
import { CardProps } from "@/app/data/constants/listData";
import {DISCOUNT_POLICIES} from '@/app/data/constants/discount';

export default function CardList({cardObj}:{cardObj:CardProps}){
    const {id, imgUrl, accommodation, title, location, starrating, reviewers, checkin, checkout, onsale, discounttype, price, amenities} = cardObj;
    const salePriceClassN:string = onsale ? "text-sm text-gray-300 line-through":"text-2xl font-semibold";
    // 10원미만 버림 처리
    const salePrice:number = onsale ? Math.floor(price * (1 - DISCOUNT_POLICIES[discounttype]) / 10) * 10 : price;
    return (
        <div className="flex gap-5 border border-gray-200 rounded-lg overflow-hidden p-5 mb-5 shadow-sm">
            <input type='hidden' name="id" value={id}/>
            <div className="w-[300px] h-[200px] flex-shirink-0 bg-amber-200 rounded-md overflow-hidden">
                {imgUrl}
            </div>
            <div className="flex-1 relative">
                <p className=" text-gray-400 text-xs font-semibold mb-1.5">{accommodation}</p>
                <p className="text-xl font-semibold mb-1.5">{title}</p>
                <p className="text-gray-400 text-sm flex items-center mb-1.5"><MdLocationOn /> {location}</p>
                <p className="flex mb-2.5 items-center gap-1"><MdOutlineStar  color="#ff6900"/>{starrating} <span className="text-gray-500">({reviewers})</span></p>
                <p className="mb-2.5 text-gray-400 text-sm"><span className="font-semibold">숙박</span> {checkin} 체크인</p>
                <div className="absolute text-right right-0 bottom-2">
                    <div className="flex items-center gap-2 justify-end">
                        {onsale && <p className=" text-orange-500 font-semibold">{DISCOUNT_POLICIES[discounttype] * 100}%</p>}
                        <p className={salePriceClassN}>{price.toLocaleString()}</p>
                        
                    </div>
                    {
                    onsale && <div className="flex gap-2 items-center">
                        <p className=" bg-amber-100 py-0.5 px-1.5 rounded-sm text-center text-xs text-orange-500 font-semibold inline-block">{discounttype}</p>
                        <p className="text-2xl font-semibold">{salePrice.toLocaleString()}</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}