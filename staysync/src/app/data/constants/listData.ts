export interface CardProps {
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