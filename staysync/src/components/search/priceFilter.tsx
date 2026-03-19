"use client";

import React, { useState } from "react";
import * as Slider from "@radix-ui/react-slider";

export default function PriceFilter() {
  const [range, setRange] = useState([20000, 80000]);

  return (
    <div className="w-full max-w-[400px] rounded-xl">
      <div className="flex justify-between items-center mb-6 text-sm">
        <div className="p-1 border rounded-md flex-1 text-center">
          <p className="text-gray-500 text-xs font-medium">최저</p>
          <p className="font-medium"><span className="text-gray-600 text-xs">₩</span> {range[0].toLocaleString()}</p>
        </div>
        <div className="mx-2 text-gray-400">~</div>
        <div className="p-1 border rounded-md flex-1 text-center">
          <p className="text-gray-500 text-xs font-medium">최고</p>
          <p className="font-medium"><span className="text-gray-600 text-xs">₩</span> {range[1].toLocaleString()}</p>
        </div>
      </div>

      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={range}
        onValueChange={setRange}
        max={100000}
        step={1000}
      >
        <Slider.Track className="bg-gray-200 relative grow rounded-full h-[4px]">
          <Slider.Range className="absolute bg-blue-600 rounded-full h-full" />
        </Slider.Track>

        <Slider.Thumb
          className="block w-6 h-6 bg-white border-2 border-blue-600 rounded-full shadow-md cursor-pointer hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-100"
        />

        <Slider.Thumb
          className="block w-6 h-6 bg-white border-2 border-blue-600 rounded-full shadow-md cursor-pointer hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-100"
        />
      </Slider.Root>
      
      <p className="mt-4 text-xs text-gray-400 text-center text-nowrap">
        범위를 조절하여 예산에 맞는 숙소를 찾아보세요.
      </p>
    </div>
  );
}