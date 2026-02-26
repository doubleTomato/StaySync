import { MdOutlineStar } from "react-icons/md";
interface CardProps {
  imgUrl: string;
  title: string;
  rating: number;
  customersCount: number;
  price: number;
}
export default function CardList({cardObj}:{imgUrl, title, rating, customersCount, price }:CardProps){
    return (
        <div className="">
            <div>{imgUrl}</div>
            <div>
                <p>{title}</p>
                <p><MdOutlineStar/>{rating}({customersCount})</p>
                <p>{price}</p>
            </div>
        </div>
    )
}