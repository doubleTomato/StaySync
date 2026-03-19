import { MdOutlineStar, MdLocationOn  } from "react-icons/md";
interface CardProps {
    id: number,
    accommodation: string
    imgUrl: string;
    location: string;
    starrating:number;
    reviewers: number;
    onsale: boolean;
    discounttype: string;
    checkin: string;
    checkout: string;
    amenities: number[];
    title: string;
    rating: number;
    customersCount: number;
    price: number;
}
export default function CardList({cardObj}:{cardObj:CardProps}){
    const {id, imgUrl, accommodation, title, location, starrating, reviewers, checkin, checkout, onsale, discounttype, price, amenities} = cardObj;
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
                <div className="absolute  text-right right-0 bottom-2">
                    {onsale ? <p className="mb-1.5 bg-amber-100 py-0.5 px-1.5 rounded-sm text-center text-xs text-orange-500 font-semibold inline-block">{discounttype}</p>:<></>}
                    <p className="text-2xl font-semibold">{price.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}