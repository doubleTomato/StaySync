import { z } from "zod";

const dateString = z.string().refine((v) => 
  !isNaN(Date.parse(v)), {
    message: "유효한 날짜 형식이 아닙니다.",
});

export const searchSchema = z
  .object({
    selLocation: z.string().default("seoul"),
    // date 유효성 추가
    checkIn: dateString.default(() => {
      const d = new Date();
      return d.toISOString().split("T")[0];
    }),
    checkOut: dateString.optional().default(() => {
      const d = new Date();
      d.setDate(d.getDate() + 1);
      return d.toISOString().split("T")[0];
    }),

    // url param 숫자인 부분 최대 10명
    adultsNum: z.coerce.number().min(1).max(10).optional().default(1),
    childrenNum: z.coerce.number().min(0).max(10).optional().default(0),

    
    minPrice: z.coerce.number().min(0).optional(),
    maxPrice: z.coerce.number().min(0).optional(),
  })
  // 날짜 순서 검사
  .refine(
    (d) => new Date(d.checkOut) > new Date(d.checkIn),
    {
      message: "체크아웃 날짜는 체크인 날짜보다 나중이어야 합니다.",
      path: ["checkOut"],
    }
  )
  // 가격 범위 오류 검사
  .refine(
    (d) =>
      d.minPrice == null ||
      d.maxPrice == null ||
      d.minPrice <= d.maxPrice,
    {
      message: "최소 가격은 최대 가격보다 클 수 없습니다.",
      path: ["minPrice"],
    }
  );

export type SearchParams = z.infer<typeof searchSchema>;
