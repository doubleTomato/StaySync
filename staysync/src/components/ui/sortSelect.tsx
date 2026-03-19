"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SortSelect() {
  // 기본 값 할인율 높은 순
  const [sortOrder, setSortOrder] = React.useState("discount_desc")

  const handleValueChange = (value: string) => {
    setSortOrder(value)
    console.log("선택된 정렬 기준:", value)
  }

  return (
    <Select value={sortOrder} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="정렬 기준" />
      </SelectTrigger>
      <SelectContent position="popper" className="z-50 border bg-white shadow-md">
        <SelectItem value="discount_desc">할인율 높은 순</SelectItem>
        <SelectItem value="price_asc">예약가 낮은 순</SelectItem>
        <SelectItem value="price_desc">예약가 높은 순</SelectItem>
        <SelectItem value="review_desc">후기 많은 순</SelectItem>
      </SelectContent>
    </Select>
  )
}