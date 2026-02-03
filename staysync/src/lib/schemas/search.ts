import { z } from "zod";

export const searchSchema = z.object({
  selLocation: z.string().min(1).default("seoul"),
  checkIn: z.string().refine((val) => !isNaN(Date.parse(val))),
  checkOut: z.string().refine((val) => !isNaN(Date.parse(val))),
  adultsNum: z.coerce.number().min(1).max(10).default(1),
  childrenNum: z.coerce.number().min(0).max(10).default(0),
  minPrice: z.coerce.number().optional(),
  maxPrice: z.coerce.number().optional(),
}).refine((data) => {
  const checkInDate = new Date(data.checkIn);
  const checkOutDate = new Date(data.checkOut);
  return checkOutDate > checkInDate;
},{
  message:"체크아웃 날짜는 체크인 날짜보다 나중이어야 합니다.",
});

export type SearchParams = z.infer<typeof searchSchema>;